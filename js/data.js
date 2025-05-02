// Main Configuration
const config = {
    commonContact: {
        phone: "+92 3019382521",
        whatsapp: "+92 3019382521",
        address: "Uch Sharif, Islamabad, Pakistan",
        availability: "Mon-Sat: 10:00 AM - 7:00 PM"
    }
};

// Teacher Data Array with corrected name (Shahzad instead of Shadad)
const teachers = [
    {
        id: 'majid',
        name: 'Sir Majid',
        title: 'Mathematics & Physics Specialist',
        specialty: 'Math & Physics',
        image: 'img/boy.png',
        aboutImage: 'img/a.jpg',
        bio: 'Mathematics and physics educator with 8 years of experience helping students master challenging concepts through clear explanations and practical applications.',
        experience: '8 years',
        students: '600+',
        successRate: '96%',
        education: 'M.Sc. in Physics & Mathematics, University of Karachi',
        teachingApproach: 'Problem-solving focused with real-world applications',
        email: 'majid@physicsteacher.com',
        contact: {
            phone: "+923001234567",
            whatsapp: "+923001234567",
            email: "majid@physicsteacher.com",
            address: "Block 5, Gulshan-e-Iqbal, Karachi"
        },
        socialMedia: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            youtube: '#',
            
        },
        stats: {
            yearsExp: 8,
            studentsTaught: 600,
            successRate: 96
        },
        aboutText1: 'With 8 years of experience, I specialize in breaking down complex physics and math concepts into understandable components that students can master.',
        aboutText2: 'My teaching method emphasizes problem-solving techniques and real-world applications that help students develop both skills and confidence.',
        heroTitle: 'Sir Majid',
        heroSubtitle: 'Mathematics & Physics Specialist',
        heroText: 'Transforming challenging concepts into understandable lessons through clear explanations and practical applications.'
    },
    {
        id: 'shahzad',
        name: 'Sir Shahzad',
        title: 'Mathematics Expert',
        specialty: 'Mathematics',
        image: 'img/shazad.jpg',
        aboutImage: 'img/shazad.jpg',
        bio: 'Mathematics educator specializing in calculus, algebra, and geometry with 7 years of teaching experience.',
        experience: '7 years',
        students: '450+',
        successRate: '95%',
        education: 'M.Sc. in Mathematics, University of Karachi',
        teachingApproach: 'Step-by-step problem solving approach',
        email: 'shahzad@mathteacher.com',
        contact: {
            phone: "+923007654321",
            whatsapp: "+923007654321",
            email: "shahzad@mathteacher.com",
            address: "Block 7, Clifton, Karachi"
        },
        stats: {
            yearsExp: 7,
            studentsTaught: 450,
            successRate: 95
        },
        aboutText1: 'With 7 years of dedicated mathematics teaching, I focus on building strong foundational skills that enable students to tackle advanced concepts.',
        aboutText2: 'My approach emphasizes logical thinking and systematic problem-solving techniques that serve students in all areas of mathematics.',
        heroTitle: 'Sir Shahzad',
        heroSubtitle: 'Mathematics Expert',
        heroText: 'Building mathematical mastery through systematic learning and problem-solving techniques.'
    },
    {
        id: 'shahzad-iqbal',
        name: 'Sir Shahzad Iqbal',
        title: 'Computer Science & Chemistry Expert',
        specialty: 'CS & Chemistry',
        image: 'img/boy.png',
        aboutImage: 'img/a.jpg',
        bio: 'Expert in both computer science and chemistry with 6 years of experience in teaching and industry applications. My unique interdisciplinary approach helps students see connections between technology and science.',
        experience: '6 years',
        students: '400+',
        successRate: '94%',
        education: 'Ph.D. in Computer Science & Chemistry, University of Karachi',
        teachingApproach: 'Project-based learning with real-world applications',
        email: 'shahzad.iqbal@csteacher.com',
        contact: {
            phone: "+923008765432",
            whatsapp: "+923008765432",
            email: "shahzad.iqbal@csteacher.com",
            address: "Block 9, Clifton, Karachi"
        },
        stats: {
            yearsExp: 6,
            studentsTaught: 400,
            successRate: 94
        },
        aboutText1: 'With 6 years of combined teaching and industry experience, I specialize in bridging the gap between computer science and chemistry through innovative, project-based learning approaches.',
        aboutText2: 'My teaching philosophy emphasizes practical applications of theoretical concepts, preparing students for both academic success and real-world problem-solving in technology and science fields.',
        heroTitle: 'Sir Shahzad Iqbal',
        heroSubtitle: 'Computer Science & Chemistry Educator',
        heroText: 'Bridging technology and science through project-based learning that prepares students for real-world challenges.'
    },
    {
        id: 'monir-shamsi',
        name: 'Sir Monir Shamsi',
        title: 'English & Urdu Language Expert',
        specialty: 'English & Urdu',
        image: 'img/sirmonir.jpg',
        aboutImage: 'img/a.jpg',
        bio: 'Language specialist with 9 years of expertise in academic writing and literature in both English and Urdu.',
        experience: '9 years',
        students: '550+',
        successRate: '97%',
        education: 'MA in English Literature & Urdu, University of Karachi',
        teachingApproach: 'Interactive communication-based learning',
        email: 'monirshamsi@languageteacher.com',
        contact: {
            phone: "+923009876543",
            whatsapp: "+923009876543",
            email: "monirshamsi@languageteacher.com",
            address: "Block 10, North Nazimabad, Karachi"
        },
        stats: {
            yearsExp: 9,
            studentsTaught: 550,
            successRate: 97
        },
        aboutText1: 'With 9 years of language teaching experience, I help students master both English and Urdu through immersive, communication-focused methods.',
        aboutText2: 'My approach combines literary analysis with practical language skills, enabling students to excel in both academic and real-world communication scenarios.',
        heroTitle: 'Sir Monir Shamsi',
        heroSubtitle: 'English & Urdu Language Expert',
        heroText: 'Mastering language skills through literature, analysis, and practical communication techniques.'
    },
    {
        id: 'adeel-shamsi',
        name: 'Sir Adeel Shamsi',
        title: 'Computer Science & Biology Educator',
        specialty: 'CS & Biology',
        image: 'img/siradeel.jpg',
        aboutImage: 'img/siradeela.jpg',
        bio: 'Specialist in both computer science and biology with 5 years of experience in teaching computational biology and bioinformatics.',
        experience: '5 years',
        students: '350+',
        successRate: '93%',
        education: 'M.Sc. in Computer Science & Biology, University of Karachi',
        teachingApproach: 'Computational approaches to biological problems',
        email: 'adeelshamsi@bioteacher.com',
        contact: {
            phone: "+923001112233",
            whatsapp: "+923001112233",
            email: "adeelshamsi@bioteacher.com",
            address: "Block 11, Gulistan-e-Jauhar, Karachi"
        },
        stats: {
            yearsExp: 5,
            studentsTaught: 350,
            successRate: 93
        },
        aboutText1: 'With 5 years of interdisciplinary teaching, I bring together computer science and biology to help students understand computational approaches to biological problems.',
        aboutText2: 'My teaching focuses on practical applications of programming in biological research, preparing students for careers in bioinformatics and computational biology.',
        heroTitle: 'Sir Adeel Shamsi',
        heroSubtitle: 'Computer Science & Biology Educator',
        heroText: 'Integrating computer science with biological sciences through practical, research-oriented teaching.'
    }
];

