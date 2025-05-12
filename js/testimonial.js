const testimonials = {
    'majid': [
        {
            id: 1,
            text: "Sir Majid's physics classes made me fall in love with the subject. His problem-solving approach is incredibly effective.",
            urduText: "سر ماجد کی فزکس کی کلاسوں نے مجھے اس مضمون سے محبت کرنے پر مجبور کر دیا۔ ان کا مسئلہ حل کرنے کا طریقہ ناقابل یقین حد تک موثر ہے۔",
            author: {
                name: "Raza",
                title: "Engineering Student",
                image: "img/raza.jpg"
            }
        },
        {
            id: 2,
            text: "Thanks to Sir Majid's clear explanations, I finally understand calculus concepts that confused me for years.",
            urduText: "سر ماجد کی واضح وضاحتوں کی بدولت، میں آخر کار کیلکولس کے ان تصورات کو سمجھ گیا جو سالوں سے مجھے الجھن میں ڈالتے تھے۔",
            author: {
                name: "Daniyal",
                title: "Mathematics Student",
                image: "img/Daniel.jpg"
            }
        },
        {
            id: 3,
            text: "Sir Majid has a knack for making complex topics seem simple. I always looked forward to his classes.",
            urduText: "سر ماجد میں پیچیدہ موضوعات کو آسان بنانے کی مہارت ہے۔ میں ہمیشہ ان کی کلاسوں کا منتظر رہتا تھا۔",
            author: {
                name: "Sikandar",
                title: "Physics Enthusiast",
                image: "img/sikandar.jpg"
            }
        },
        {
            id: 5,
            text: "Sir Majid instilled in me a deep passion for physics.  His lectures were always engaging and thought-provoking.",
            urduText: "سر ماجد نے میرے اندر طبیعیات کا گہرا شوق پیدا کیا۔ ان کے لیکچرز ہمیشہ دل چسپ اور فکر انگیز ہوتے تھے۔",
            author: {
                name: "Mohammad Ali",
                title: "Physics Graduate",
                image: "img/mohammad_ali.jpg" // Replace with actual image path
            }
        },
        {
            id: 4,
            text: "His guidance in practical experiments was invaluable. Sir Majid's hands-on approach truly solidified my understanding.",
            urduText: "عملی تجربات میں ان کی رہنمائی انمول تھی۔ سر ماجد کے عملی انداز نے واقعی میری سمجھ کو مضبوط کیا۔",
            author: {
                name: "Ahmad",
                title: "Applied Physics Student",
                image: "img/ahmad.jpg"
            }
        }
    ],
    'shahzad': [
        {
            id: 1,
            text: "Sir Shahzad's methodical approach to mathematics helped me develop a strong foundation in algebra and calculus.",
            urduText: "سر شہزاد کا ریاضی میں منظم طریقہ کار نے مجھے الجبرا اور کیلکولس میں مضبوط بنیاد بنانے میں مدد کی۔",
            author: {
                name: "Waqas",
                title: "Engineering Student",
                image: "img/waqas.jpg"
            }
        },
        {
            id: 6,
            text: "Sir Shahzad's teaching style is excellent. He breaks down complex problems into smaller, more manageable steps, making it easier to understand.",
            urduText: "سر شہزاد کا تدریسی انداز عمدہ ہے۔ وہ پیچیدہ مسائل کو چھوٹے، زیادہ قابل انتظام مراحل میں تقسیم کرتے ہیں، جس سے سمجھنا آسان ہو جاتا ہے۔",
            author: {
                name: "Mohammad Ali",
                title: "Mathematics Student",
                image: "img/mohammad_ali.jpg" // Replace with actual image path
            }
        },
        {
            id: 2,
            text: "I went from failing math to scoring top grades thanks to Sir Shahzad's patient teaching style.",
            urduText: "سر شہزاد کے صبر آزما تدریسی انداز کی بدولت میں ریاضی میں فیل ہونے سے لے کر سب سے زیادہ نمبر حاصل کرنے تک پہنچ گیا۔",
            author: {
                name: "Farok",
                title: "College Student",
                image: "img/farok.jpg"
            }
        },
        {
            id: 3,
            text: "Sir Shahzad's lectures were always well-prepared and easy to follow. He made learning math enjoyable.",
            urduText: "سر شہزاد کے لیکچرز ہمیشہ اچھی طرح سے تیار کیے جاتے تھے اور ان پر عمل کرنا آسان تھا۔ انہوں نے ریاضی سیکھنے کو خوشگوار بنا دیا۔",
            author: {
                name: "Sikandar",
                title: "Mathematics Learner",
                image: "img/sikandar.jpg"
            }
        },
        {
            id: 4,
            text: "His emphasis on understanding the underlying concepts rather than just memorizing formulas was incredibly helpful.",
            urduText: "فارمولوں کو صرف یاد کرنے کے بجائے بنیادی تصورات کو سمجھنے پر ان کا زور ناقابل یقین حد تک مددگار تھا۔",
            author: {
                name: "Raza",
                title: "Mathematics Enthusiast",
                image: "img/raza.jpg"
            }
        },
        {
            id: 5,
            text: "Sir Shahzad has a wonderful way of breaking down complex mathematical ideas. His guidance was crucial for my success.",
            urduText: "سر شہزاد کے پاس پیچیدہ ریاضیاتی خیالات کو آسان بنانے کا ایک شاندار طریقہ ہے۔ میری کامیابی کے لیے ان کی رہنمائی بہت اہم تھی۔",
            author: {
                name: "Ahmad",
                title: "Mathematics Student",
                image: "img/ahmad.jpg"
            }
        }
    ],
    'shahzad-iqbal': [
        {
            id: 1,
            text: "Sir Shahzad's interdisciplinary approach helped me see the connections between computer science and chemistry in ways I never imagined.",
            urduText: "سر شہزاد کا بین الشعبہ جاتی طریقہ کار نے مجھے کمپیوٹر سائنس اور کیمسٹری کے درمیان تعلق کو ایسے طریقے سے دیکھنے میں مدد دی جس کا میں نے کبھی تصور بھی نہیں کیا تھا۔",
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
                name: "Raza",
                title: "Chemistry Major",
                image: "img/raza.jpg"
            }
        },
        {
            id: 7,
            text: "Sir Shahzad's ability to make complex concepts understandable is impressive. He helped me see the practical applications of what I was learning.",
            urduText: "سر شہزاد کی پیچیدہ تصورات کو قابل فہم بنانے کی صلاحیت متاثر کن ہے۔ انہوں نے مجھے یہ دیکھنے میں مدد کی کہ میں جو کچھ سیکھ رہا ہوں اس کا عملی استعمال کیا ہے۔",
            author: {
                name: "Mohammad Ali",
                title: "Computer Science and Chemistry Student",
                image: "img/mohammad_ali.jpg" // Replace with actual image path
            }
        },
        {
            id: 3,
            text: "Sir Shahzad's ability to bridge complex ideas from different fields is truly impressive. He broadened my perspective significantly.",
            urduText: "مختلف شعبوں سے تعلق رکھنے والے پیچیدہ خیالات کو جوڑنے کی سر شہزاد کی صلاحیت واقعی متاثر کن ہے۔ انہوں نے میرے نقطہ نظر کو نمایاں طور پر وسیع کیا۔",
            author: {
                name: "Daniyal",
                title: "Interdisciplinary Studies Student",
                image: "img/Daniel.jpg"
            }
        },
        {
            id: 4,
            text: "His passion for both computer science and chemistry is contagious and made learning these subjects incredibly engaging.",
            urduText: "کمپیوٹر سائنس اور کیمسٹری دونوں کے لیے ان کا جذبہ متعدی ہے اور اس نے ان مضامین کو سیکھنا ناقابل یقین حد تک دل چسپ بنا دیا۔",
            author: {
                name: "Abdullah",
                title: "Chemical Engineering Student",
                image: "img/abdullah.jpg"
            }
        }
    ],
    'monir-shamsi': [
        {
            id: 1,
            text: "Sir Monir's literature classes transformed my understanding of both English and Urdu poetry and prose.",
            urduText: "سر منیر کی ادب کی کلاسوں نے انگریزی اور اردو دونوں زبانوں کی شاعری اور نثر کے بارے میں میری سمجھ کو تبدیل کر دیا۔",
            author: {
                name: "Hassan",
                title: "Literature Student",
                image: "img/Hassan.jpg"
            }
        },
        {
            id: 2,
            text: "Thanks to Sir Monir, I improved my academic writing skills in both languages and secured top marks in my exams.",
            urduText: "سر منیر کی بدولت، میں نے دونوں زبانوں میں اپنی علمی تحریری مہارت کو بہتر بنایا اور اپنے امتحانات میں اعلیٰ نمبر حاصل کیے۔",
            author: {
                name: "Daniyal",
                title: "University Student",
                image: "img/Daniel.jpg"
            }
        },
        {
            id: 3,
            text: "Sir Monir has a wonderful way of bringing literary texts to life. His insights made the characters and stories so relatable.",
            urduText: "سر منیر کے پاس ادبی متون کو زندہ کرنے کا ایک شاندار طریقہ ہے۔ ان کی بصیرت نے کرداروں اور کہانیوں کو بہت قابل فہم بنا دیا۔",
            author: {
                name: "Sikandar",
                title: "Literature Enthusiast",
                image: "img/sikandar.jpg"
            }
        },
        {
            id: 4,
            text: "His feedback on my essays was incredibly helpful and pushed me to think more critically about the themes and nuances in literature.",
            urduText: "میرے مضامین پر ان کی رائے ناقابل یقین حد تک مددگار تھی اور اس نے مجھے ادب میں موضوعات اور باریکیوں کے بارے میں مزید تنقیدی انداز میں سوچنے پر مجبور کیا۔",
            author: {
                name: "Ahmad",
                title: "English Literature Major",
                image: "img/ahmad.jpg"
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
        },
        {
            id: 8,
            text: "Sir Adeel's guidance was instrumental in helping me understand complex bioinformatics concepts and apply them to real-world research problems.",
            urduText: "سر عادل کی رہنمائی پیچیدہ بائیو انفارمیٹکس کے تصورات کو سمجھنے اور انہیں حقیقی دنیا کے تحقیقی مسائل پر لاگو کرنے میں میری مدد کرنے میں اہم کردار ادا کر رہی ہے۔",
            author: {
                name: "Mohammad Ali",
                title: "Bioinformatics Researcher",
                image: "img/mohammad_ali.jpg" // Replace with actual image path
            }
        },
        {
            id: 3,
            text: "Sir Adeel's enthusiasm for the subject is infectious. He made learning complex algorithms in biology both challenging and rewarding.",
            urduText: "مضمون کے لیے سر عادل کا جوش متعدی ہے۔ انہوں نے حیاتیات میں پیچیدہ الگورتھم سیکھنے کو چیلنجنگ اور فائدہ مند دونوں بنا دیا۔",
            author: {
                name: "Hassan",
                title: "Bioinformatics Student",
                image: "img/Hassan.jpg"
            }
        },
        {
            id: 4,
            text: "His guidance on using computational tools for biological data analysis was exceptional. I feel well-prepared for my future research work.",
            urduText: "حیاتیاتی ڈیٹا کے تجزیے کے لیے کمپیوٹیشنل ٹولز کے استعمال پر ان کی رہنمائی غیر معمولی تھی۔ میں اپنے مستقبل کے تحقیقی کام کے لیے اچھی طرح سے تیار محسوس کرتا ہوں۔",
            author: {
                name: "Abdullah",
                title: "Computational Biology Researcher",
                image: "img/abdullah.jpg"
            }
        },
        {
            id: 5,
            text: "I was initially intimidated by computational biology, but Sir Adeel's patient and clear teaching style made it accessible and fascinating.",
            urduText: "میں ابتدائی طور پر کمپیوٹیشنل بائیولوجی سے خوفزدہ تھا، لیکن سر عادل کے صبر آزما اور واضح تدریسی انداز نے اسے قابل رسائی اور دل چسپ بنا دیا۔",
            author: {
                name: "Ahmad",
                title: "Biotechnology Student",
                image: "img/ahmad.jpg"
            }
        }
    ]
};
