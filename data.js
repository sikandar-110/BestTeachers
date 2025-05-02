// Main Configuration
const config = {
    commonContact: {
        phone: "+92 3019382521",
        whatsapp: "+92 3019382521",
        address: "Uch sharif, Islamabad, Pakistan",
        availability: "Mon-Sat: 12:00 AM - 7:00 PM"
    }
};

// Teacher Data Array
const teachers = [
    {
        id: 'majid',
        name: 'Sir Majid',
        title: 'Mathematics & Physics Specialist',
        specialty: 'Math & Physics',
        image: 'https://cdn-icons-png.flaticon.com/512/1999/1999625.png',
        aboutImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bio: 'Mathematics and physics educator with 8 years of experience helping students master challenging concepts through clear explanations and practical applications.',
        experience: '8 years',
        students: '600+',
        successRate: '96%',
        education: 'M.Sc. in Physics & Mathematics, University of Karachi',
        teachingApproach: 'Problem-solving focused with real-world applications',
        email: 'majid@physicsteacher.com',
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
        id: 'shadad',
        name: 'Sir Shadad',
        title: 'Mathematics Expert',
        specialty: 'Mathematics',
        image: 'https://cdn-icons-png.flaticon.com/512/1999/1999625.png',
        aboutImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bio: 'Mathematics educator specializing in calculus, algebra, and geometry with 7 years of teaching experience.',
        experience: '7 years',
        students: '450+',
        successRate: '95%',
        education: 'M.Sc. in Mathematics, University of Karachi',
        teachingApproach: 'Step-by-step problem solving approach',
        email: 'shadad@mathteacher.com',
        stats: {
            yearsExp: 7,
            studentsTaught: 450,
            successRate: 95
        },
        aboutText1: 'With 7 years of dedicated mathematics teaching, I focus on building strong foundational skills that enable students to tackle advanced concepts.',
        aboutText2: 'My approach emphasizes logical thinking and systematic problem-solving techniques that serve students in all areas of mathematics.',
        heroTitle: 'Sir Shadad',
        heroSubtitle: 'Mathematics Expert',
        heroText: 'Building mathematical mastery through systematic learning and problem-solving techniques.'
    },
    {
        id: 'shadad-iqbal',
        name: 'Sir Shadad Iqbal',
        title: 'Computer Science & Chemistry Expert',
        specialty: 'CS & Chemistry',
        image: 'https://cdn-icons-png.flaticon.com/512/1999/1999625.png',
        aboutImage: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bio: 'Expert in both computer science and chemistry with 6 years of experience in teaching and industry applications. My unique interdisciplinary approach helps students see connections between technology and science.',
        experience: '6 years',
        students: '400+',
        successRate: '94%',
        education: 'Ph.D. in Computer Science & Chemistry, University of Karachi',
        teachingApproach: 'Project-based learning with real-world applications',
        email: 'shadad.iqbal@csteacher.com',
        stats: {
            yearsExp: 6,
            studentsTaught: 400,
            successRate: 94
        },
        aboutText1: 'With 6 years of combined teaching and industry experience, I specialize in bridging the gap between computer science and chemistry through innovative, project-based learning approaches.',
        aboutText2: 'My teaching philosophy emphasizes practical applications of theoretical concepts, preparing students for both academic success and real-world problem-solving in technology and science fields.',
        heroTitle: 'Sir Shadad Iqbal',
        heroSubtitle: 'Computer Science & Chemistry Educator',
        heroText: 'Bridging technology and science through project-based learning that prepares students for real-world challenges.'
    },
    {
        id: 'monir-shamsi',
        name: 'Sir Monir Shamsi',
        title: 'English & Urdu Language Expert',
        specialty: 'English & Urdu',
        image: 'img/sirmonir.jpg',
        aboutImage: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        bio: 'Language specialist with 9 years of expertise in academic writing and literature in both English and Urdu.',
        experience: '9 years',
        students: '550+',
        successRate: '97%',
        education: 'MA in English Literature & Urdu, University of Karachi',
        teachingApproach: 'Interactive communication-based learning',
        email: 'monirshamsi@languageteacher.com',
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

// Testimonials Data - Organized by teacher ID
const testimonials = {
    'majid': [
        {
            id: 1,
            text: "Sir Majid's physics classes made me fall in love with the subject. His problem-solving approach is incredibly effective.",
            urduText: "سر مجید کی فزکس کی کلاسوں نے مجھے اس مضمون سے محبت کرنے پر مجبور کر دیا۔ ان کا مسئلہ حل کرنے کا طریقہ ناقابل یقین حد تک موثر ہے۔",
            author: {
                name: "raza",
                title: "Engineering Student",
                image: "img/raza.jpg"
            }
        },
        {
            id: 2,
            text: "Thanks to Sir Majid's clear explanations, I finally understand calculus concepts that confused me for years.",
            urduText: "سر مجید کی واضح وضاحتوں کی بدولت، میں آخر کار کیلکولس کے ان تصورات کو سمجھ گیا جو سالوں سے مجھے الجھن میں ڈالتے تھے۔",
            author: {
                name: "Daniyal",
                title: "Mathematics Student",
                image: "img/Daniel.jpg"
            }
        }
    ],
    'shadad': [
        {
            id: 1,
            text: "Sir Shadad's methodical approach to mathematics helped me develop a strong foundation in algebra and calculus.",
            urduText: "سر شداد کا ریاضی میں منظم طریقہ کار نے مجھے الجبرا اور کیلکولس میں مضبوط بنیاد بنانے میں مدد کی۔",
            author: {
                name: "waqas",
                title: "Engineering Student",
                image: "img/waqas.jpg"
            }
        },
        {
            id: 2,
            text: "I went from failing math to scoring top grades thanks to Sir Shadad's patient teaching style.",
            urduText: "سر شداد کے صبر آزما تدریسی انداز کی بدولت میں ریاضی میں فیل ہونے سے لے کر سب سے زیادہ نمبر حاصل کرنے تک پہنچ گیا۔",
            author: {
                name: "farok",
                title: "College Student",
                image: "img/farok.jpg"
            }
        }
    ],
    'shadad-iqbal': [
        {
            id: 1,
            text: "Sir Shadad's interdisciplinary approach helped me see the connections between computer science and chemistry in ways I never imagined.",
            urduText: "سر شداد کا بین الشعبہ جاتی طریقہ کار نے مجھے کمپیوٹر سائنس اور کیمسٹری کے درمیان تعلق کو ایسے طریقے سے دیکھنے میں مدد دی جس کا میں نے کبھی تصور بھی نہیں کیا تھا۔",
            author: {
                name: "Sikandar",
                title: "Computer Science Student",
                image: "img/sikandar.jpg"
            }
        },
        {
            id: 2,
            text: "The way sir connects programming concepts to chemical processes is revolutionary. I went from struggling with both subjects to excelling in computational chemistry!",
            urduText: "سر کا طریقہ کہ وہ پروگرامنگ کے تصورات کو کیمیائی عمل سے جوڑتے ہیں، انقلابی ہے۔ میں دونوں مضامین میں مشکلات کا شکار ہونے سے کمپیوٹیشنل کیمسٹری میں مہارت حاصل کرنے تک پہنچ گیا ہوں!",
            author: {
                name: "raza",
                title: "Chemistry Major",
                image: "img/raza.jpg"
            }
        }
    ],
    'monir-shamsi': [
        {
            id: 1,
            text: "Sir Monir's literature classes transformed my understanding of both English and Urdu poetry and prose.",
            urduText: "سر منیر کی ادب کی کلاسوں نے انگریزی اور اردو دونوں زبانوں کی شاعری اور نثر کے بارے میں میری سمجھ کو تبدیل کر دیا۔",
            author: {
                name: "hassan",
                title: "Literature Student",
                image: "img/Hassan.jpg"
            }
        },
        {
            id: 2,
            text: "Thanks to Sir Monir, I improved my academic writing skills in both languages and secured top marks in my exams.",
            urduText: "سر منیر کی بدولت، میں نے دونوں زبانوں میں اپنی علمی تحریری مہارت کو بہتر بنایا اور اپنے امتحانات میں اعلیٰ نمبر حاصل کیے۔",
            author: {
                name: "daniyal",
                title: "University Student",
                image: "img/Daniel.jpg"
            }
        }
    ],
    'adeel-shamsi': [
        {
            id: 1,
            text: "Sir Adeel's computational biology classes showed me how powerful programming can be in biological research.",
            urduText: "سر عادل کی کمپیوٹیشنل بائیولوجی کی کلاسوں نے مجھے دکھایا کہ حیاتیاتی تحقیق میں پروگرامنگ کتنی طاقتور ہو سکتی ہے۔",
            author: {
                name: "Sikandar",
                title: "Biology Student",
                image: "img/sikandar.jpg"
            }
        },
        {
            id: 2,
            text: "The bioinformatics projects we did in Sir Adeel's class helped me secure a research internship at a leading lab.",
            urduText: "سر عادل کی کلاس میں کیے گئے بائیو انفارمیٹکس کے منصوبوں نے مجھے ایک معتبر لیب میں تحقیقی انٹرنشپ حاصل کرنے میں مدد کی۔",
            author: {
                name: "Raza",
                title: "Research Intern",
                image: "img/raza.jpg"
            }
        }
    ]
};
