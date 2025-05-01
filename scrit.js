// Current teacher being displayed
let currentTeacher = null;

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize the page with the default teacher
    initializeTeacherProfile();
    
    // Setup all event listeners and other functionality
    setupEventListeners();
});

// Initialize the teacher profile based on URL or default
function initializeTeacherProfile() {
    // Check URL for teacher parameter
    const hash = window.location.hash;
    let teacherId = config.defaultTeacher;
    
    if (hash.startsWith('#teacher=')) {
        teacherId = hash.split('=')[1];
    }
    
    // Find the teacher in our array
    const teacher = teachers.find(t => t.id === teacherId);
    
    if (teacher) {
        // Set as current teacher
        currentTeacher = teacher;
        
        // Load teacher data
        loadTeacherData(teacher);
        
        // Load testimonials for this teacher
        loadTestimonials(teacher.id);
        
        // If this was from URL, show profile directly
        if (hash.startsWith('#teacher=')) {
            showTeacherProfile(teacher.id);
        }
    } else {
        // If teacher not found, load default
        const defaultTeacher = teachers.find(t => t.id === config.defaultTeacher);
        if (defaultTeacher) {
            currentTeacher = defaultTeacher;
            loadTeacherData(defaultTeacher);
            loadTestimonials(defaultTeacher.id);
        }
    }
    
    // Always load other teachers
    loadOtherTeachers();
}

// Load teacher data into the page
function loadTeacherData(teacher) {
    // Header
    document.getElementById('headerName').textContent = teacher.name;
    document.getElementById('headerProfileImg').src = teacher.image;
    document.getElementById('headerProfileImg').alt = teacher.name;
    
    // Hero section
    document.getElementById('heroTitle').textContent = teacher.heroTitle || teacher.name;
    document.getElementById('heroSubtitle').textContent = teacher.heroSubtitle || teacher.title;
    document.getElementById('heroText').textContent = teacher.heroText || teacher.bio;
    document.getElementById('heroProfileImg').src = teacher.image;
    document.getElementById('heroProfileImg').alt = teacher.name;
    
    // About section
    document.getElementById('aboutText1').textContent = teacher.aboutText1 || teacher.bio;
    document.getElementById('aboutText2').textContent = teacher.aboutText2 || '';
    document.getElementById('aboutImage').src = teacher.aboutImage || teacher.image;
    document.getElementById('aboutImage').alt = `${teacher.name} teaching`;
    
    // Animate stats
    if (teacher.stats) {
        animateValue(document.getElementById('yearsExp'), 0, teacher.stats.yearsExp, 2000);
        animateValue(document.getElementById('studentsTaught'), 0, teacher.stats.studentsTaught, 2000);
        animateValue(document.getElementById('successRate'), 0, teacher.stats.successRate, 2000);
    }
    
    // Contact section
    document.getElementById('contactPhone').textContent = config.commonContact.phone;
    document.getElementById('contactWhatsApp').textContent = config.commonContact.whatsapp;
    document.getElementById('contactAddress').textContent = config.commonContact.address;
    document.getElementById('contactAvailability').textContent = config.commonContact.availability;
    document.getElementById('contactEmail').textContent = teacher.email;
    
    // Footer
    document.getElementById('footerName').textContent = teacher.name;
    document.getElementById('copyrightName').textContent = teacher.name;
}

// Load other teachers (excluding current teacher)
function loadOtherTeachers() {
    const teachersContainer = document.getElementById('teachersContainer');
    teachersContainer.innerHTML = '';
    
    teachers.forEach(teacher => {
        // Skip current teacher
        if (currentTeacher && teacher.id === currentTeacher.id) return;
        
        const teacherCard = document.createElement('div');
        teacherCard.className = 'teacher-card';
        teacherCard.dataset.id = teacher.id;
        
        teacherCard.innerHTML = `
            <div class="teacher-img-container">
                <img src="${teacher.image}" alt="${teacher.name}" class="teacher-img">
                <span class="teacher-specialty">${teacher.specialty}</span>
            </div>
            <h3 class="teacher-name">${teacher.name}</h3>
            <div class="teacher-subject">${teacher.title}</div>
            <p class="teacher-bio">${teacher.bio}</p>
            <a href="#teacher=${teacher.id}" class="view-profile">View Profile</a>
        `;
        
        teachersContainer.appendChild(teacherCard);
    });
}

// Load testimonials for a specific teacher
function loadTestimonials(teacherId) {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    testimonialsContainer.innerHTML = '';
    
    const teacherTestimonials = testimonials[teacherId] || [];
    
    if (teacherTestimonials.length === 0) {
        testimonialsContainer.innerHTML = `
            <div class="no-testimonials">
                <p>No testimonials available yet for this teacher.</p>
            </div>
        `;
        return;
    }
    
    teacherTestimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        
        testimonialElement.innerHTML = `
            <p class="testimonial-text">${testimonial.text}</p>
            <p class="testimonial-text testimonial-urdu">${testimonial.urduText}</p>
            <div class="testimonial-author">
                <img src="${testimonial.author.image}" alt="${testimonial.author.name}" class="author-img">
                <div class="author-info">
                    <div class="author-name">${testimonial.author.name}</div>
                    <div class="author-title">${testimonial.author.title}</div>
                </div>
            </div>
        `;
        
        testimonialsContainer.appendChild(testimonialElement);
        
        // Trigger animation after a short delay
        setTimeout(() => {
            testimonialElement.classList.add('active');
        }, testimonial.id * 100);
    });
}

// Show teacher profile
function showTeacherProfile(teacherId) {
    const teacher = teachers.find(t => t.id === teacherId);
    if (!teacher) return;
    
    // Set as current teacher
    currentTeacher = teacher;
    
    // Load teacher data
    loadTeacherData(teacher);
    
    // Load testimonials for this teacher
    loadTestimonials(teacher.id);
    
    // Update teacher profile content
    const teacherProfileContent = document.getElementById('teacherProfileContent');
    
    teacherProfileContent.innerHTML = `
        <div class="profile-header">
            <img src="${teacher.image}" alt="${teacher.name}" class="profile-picture">
            <h2 class="profile-name">${teacher.name}</h2>
            <div class="profile-title">${teacher.title}</div>
        </div>
        
        <div class="profile-details">
            <div class="profile-about detail-card">
                <h3 class="detail-title">About</h3>
                <div class="detail-content">${teacher.bio}</div>
            </div>
            
            <div class="detail-card">
                <h3 class="detail-title">Experience</h3>
                <div class="detail-content">${teacher.experience} teaching experience</div>
            </div>
            
            <div class="detail-card">
                <h3 class="detail-title">Students</h3>
                <div class="detail-content">${teacher.students} students taught</div>
            </div>
            
            <div class="detail-card">
                <h3 class="detail-title">Success Rate</h3>
                <div class="detail-content">${teacher.successRate} student success rate</div>
            </div>
            
            <div class="detail-card">
                <h3 class="detail-title">Education</h3>
                <div class="detail-content">${teacher.education}</div>
            </div>
            
            <div class="detail-card">
                <h3 class="detail-title">Teaching Approach</h3>
                <div class="detail-content">${teacher.teachingApproach}</div>
            </div>
            
            <div class="detail-card">
                <h3 class="detail-title">Contact</h3>
                <div class="detail-content">Email: ${teacher.email}</div>
            </div>
        </div>
    `;
    
    // Hide teachers section and show profile
    document.getElementById('teachers').style.display = 'none';
    document.getElementById('teacherProfile').style.display = 'block';
    
    // Scroll to profile
    document.getElementById('teacherProfile').scrollIntoView({ behavior: 'smooth' });
}

// Setup all event listeners
function setupEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle teacher card clicks
    document.addEventListener('click', (e) => {
        const teacherCard = e.target.closest('.teacher-card');
        if (teacherCard) {
            const teacherId = teacherCard.dataset.id;
            showTeacherProfile(teacherId);
            window.location.hash = `teacher=${teacherId}`;
        }
    });
    
    // Handle hash changes (back button)
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        if (hash.startsWith('#teacher=')) {
            const teacherId = hash.split('=')[1];
            showTeacherProfile(teacherId);
        } else if (hash === '#teachers') {
            document.getElementById('teachers').style.display = 'block';
            document.getElementById('teacherProfile').style.display = 'none';
            document.getElementById('teachers').scrollIntoView({ behavior: 'smooth' });
        } else if (hash === '') {
            document.getElementById('teachers').style.display = 'block';
            document.getElementById('teacherProfile').style.display = 'none';
        }
    });
    
    // Setup contact form
    setupContactForm();
    
    // Setup feedback form and display
    setupFeedbackSystem();
    
    // Setup scroll animations
    setupScrollAnimations();
}

// Animate statistics counting
function animateValue(element, start, end, duration) {
    let startTime = null;
    
    const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = progress === 1 ? `${value}+` : value;
        
        if (progress < 1) {
            window.requestAnimationFrame(animation);
        }
    };
    
    window.requestAnimationFrame(animation);
}

// Contact form submission
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Contact form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Your message has been sent successfully! I will get back to you soon.');
        contactForm.reset();
    });
}

// Feedback system
function setupFeedbackSystem() {
    const feedbackForm = document.getElementById('feedbackForm');
    const ratingStars = document.querySelectorAll('.rating-star');
    const feedbackRating = document.getElementById('feedbackRating');
    const userFeedbackContainer = document.getElementById('userFeedbackContainer');
    
    // Rating stars interaction
    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            feedbackRating.value = rating;
            
            // Update star display
            ratingStars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                }
            });
        });
    });
    
    // Load feedback from localStorage
    function loadFeedback() {
        const feedbacks = JSON.parse(localStorage.getItem('teacherFeedbacks')) || [];
        userFeedbackContainer.innerHTML = '';
        
        if (feedbacks.length === 0) {
            userFeedbackContainer.innerHTML = `
                <div class="user-feedback" style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                    <p>No feedback yet. Be the first to share your experience!</p>
                </div>
            `;
            return;
        }
        
        // Display latest feedbacks first
        feedbacks.reverse().forEach((feedback, index) => {
            const feedbackElement = document.createElement('div');
            feedbackElement.className = 'user-feedback';
            
            // Create stars based on rating
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= feedback.rating) {
                    stars += '<i class="fas fa-star"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            
            // Get initials for avatar
            const nameParts = feedback.name.split(' ');
            const initials = nameParts.map(part => part[0]).join('').toUpperCase();
            
            feedbackElement.innerHTML = `
                <div class="user-rating">${stars}</div>
                <p class="user-feedback-text">"${feedback.message}"</p>
                <div class="user-info">
                    <div class="user-avatar">${initials}</div>
                    <div>
                        <div class="user-name">${feedback.name}</div>
                        <div class="feedback-date">${new Date(feedback.date).toLocaleDateString()}</div>
                    </div>
                </div>
            `;
            
            userFeedbackContainer.appendChild(feedbackElement);
            
            // Trigger animation after a short delay
            setTimeout(() => {
                feedbackElement.classList.add('active');
            }, index * 100);
        });
    }
    
    // Form submission
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('feedbackName').value;
        const email = document.getElementById('feedbackEmail').value;
        const message = document.getElementById('feedbackMessage').value;
        const rating = parseInt(feedbackRating.value);
        
        if (rating === 0) {
            alert('Please provide a rating by clicking on the stars');
            return;
        }
        
        // Create feedback object
        const feedback = {
            name,
            email,
            message,
            rating,
            date: new Date().toISOString(),
            teacherId: currentTeacher ? currentTeacher.id : ''
        };
        
        // Get existing feedbacks from localStorage
        let feedbacks = JSON.parse(localStorage.getItem('teacherFeedbacks')) || [];
        
        // Add new feedback
        feedbacks.push(feedback);
        
        // Save back to localStorage
        localStorage.setItem('teacherFeedbacks', JSON.stringify(feedbacks));
        
        // Show success message
        alert('Thank you for your valuable feedback!');
        
        // Reset form
        feedbackForm.reset();
        ratingStars.forEach(star => {
            star.classList.remove('fas', 'active');
            star.classList.add('far');
        });
        feedbackRating.value = 0;
        
        // Reload feedback display
        loadFeedback();
    });
    
    // Initial load of feedback
    loadFeedback();
}

// Scroll animations
function setupScrollAnimations() {
    const animateElements = document.querySelectorAll('.testimonial, .user-feedback, .teacher-card, .stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}