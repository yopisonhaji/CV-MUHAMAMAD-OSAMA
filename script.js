/* ============================================================
   FIFA World Cup 2026 Theme — script.js
   Mohamed Osama Portfolio
   ============================================================ */

const translations = {
    id: {
        nav_home: "Beranda",
        nav_stats: "Statistik",
        nav_about: "Tentang",
        nav_trophies: "Trofi",
        nav_media: "Media",
        hero_subtitle: "U17 STRIKER | LIBYA 🇱🇾",
        hero_tagline: "LETHAL STRIKER. PROVEN WINNER.",
        hero_desc: "Bermain dengan ketajaman insting, kecepatan, dan mentalitas juara di setiap menit pertandingan.",
        btn_video: "LIHAT VIDEO HIGHLIGHTS",
        btn_contact: "HUBUNGI SEKARANG",
        stat_position_label: "POSISI",
        stat_position_val: "Striker / Winger",
        stat_foot_label: "KAKI DOMINAN",
        stat_foot_val: "Kanan (Right Foot)",
        stat_posture_label: "POSTUR",
        stat_club_label: "KLUB SAAT INI",
        about_title_1: "BORN TO ",
        about_title_2: "SCORE.",
        about_p1: "Ditempa dalam disiplin taktis bergaya Eropa bersama <strong>Borussia Mönchengladbach Academy Indonesia</strong>, saya adalah penyerang serba bisa (<em>versatile</em>) yang mampu beroperasi sebagai <em>Striker</em> murni, <em>Winger</em>, maupun <em>Free Striker</em>.",
        about_p2: "Berbekal pengalaman menjuarai kompetisi bergengsi seperti ISCO Cup U17, saya memahami apa yang dibutuhkan untuk menang di level tertinggi. Saya siap membawa ketajaman penyelesaian akhir dan kecepatan akselerasi ke jenjang sepak bola yang lebih tinggi bersama tim Anda.",
        trophy_title_1: "TROPHY ",
        trophy_title_2: "ROOM",
        trophy_team: "TEAM HONOURS",
        trophy_1st: "JUARA 1",
        trophy_2nd: "RUNNER-UP",
        trophy_ind: "INDIVIDUAL AWARDS",
        trophy_topscorer: "TOP SCORER",
        trophy_beststriker: "BEST STRIKER",
        trophy_potm: "Player of the Match",
        trophy_motm: "Man of the Match",
        cert_title: "CERTIFICATIONS & DOCUMENTS",
        media_title_1: "WATCH THE ",
        media_title_2: "ACTION",
        footer_title_1: "READY TO WIN ",
        footer_title_2: "TOGETHER?",
        footer_desc: "Rekrut Mohamed untuk memperkuat lini serang tim Anda musim ini.",
        footer_rights: "Dirancang & Dikembangkan oleh"
    },
    en: {
        nav_home: "Home",
        nav_stats: "Stats",
        nav_about: "About",
        nav_trophies: "Trophies",
        nav_media: "Media",
        hero_subtitle: "U17 STRIKER | LIBYA 🇱🇾",
        hero_tagline: "LETHAL STRIKER. PROVEN WINNER.",
        hero_desc: "Playing with sharp instincts, speed, and a champion's mentality in every minute of the match.",
        btn_video: "WATCH HIGHLIGHTS",
        btn_contact: "CONTACT NOW",
        stat_position_label: "POSITION",
        stat_position_val: "Striker / Winger",
        stat_foot_label: "DOMINANT FOOT",
        stat_foot_val: "Right Foot",
        stat_posture_label: "POSTURE",
        stat_club_label: "CURRENT CLUB",
        about_title_1: "BORN TO ",
        about_title_2: "SCORE.",
        about_p1: "Forged in European-style tactical discipline with <strong>Borussia Mönchengladbach Academy Indonesia</strong>, I am a versatile forward capable of operating as a pure <em>Striker</em>, <em>Winger</em>, or <em>Free Striker</em>.",
        about_p2: "Armed with the experience of winning prestigious competitions like the ISCO Cup U17, I understand what it takes to win at the highest level. I am ready to bring lethal finishing and rapid acceleration to the next level of football with your team.",
        trophy_title_1: "TROPHY ",
        trophy_title_2: "ROOM",
        trophy_team: "TEAM HONOURS",
        trophy_1st: "1ST PLACE",
        trophy_2nd: "RUNNER-UP",
        trophy_ind: "INDIVIDUAL AWARDS",
        trophy_topscorer: "TOP SCORER",
        trophy_beststriker: "BEST STRIKER",
        trophy_potm: "Player of the Match",
        trophy_motm: "Man of the Match",
        cert_title: "CERTIFICATIONS & DOCUMENTS",
        media_title_1: "WATCH THE ",
        media_title_2: "ACTION",
        footer_title_1: "READY TO WIN ",
        footer_title_2: "TOGETHER?",
        footer_desc: "Recruit Mohamed to strengthen your team's attacking line this season.",
        footer_rights: "Professionally Designed & Engineered by"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_stats: "إحصائيات",
        nav_about: "نبذة",
        nav_trophies: "الجوائز",
        nav_media: "وسائط",
        hero_subtitle: "مهاجم تحت 17 سنة | ليبيا 🇱🇾",
        hero_tagline: "مهاجم فتاك. فائز مثبت.",
        hero_desc: "اللعب بغريزة حادة وسرعة وعقلية بطل في كل دقيقة من المباراة.",
        btn_video: "شاهد أبرز اللقطات",
        btn_contact: "اتصل الآن",
        stat_position_label: "المركز",
        stat_position_val: "مهاجم / جناح",
        stat_foot_label: "القدم المفضلة",
        stat_foot_val: "اليمنى",
        stat_posture_label: "البنية",
        stat_club_label: "النادي الحالي",
        about_title_1: "ولد ",
        about_title_2: "ليسجل.",
        about_p1: "تم صقل مهاراتي في الانضباط التكتيكي على الطراز الأوروبي مع <strong>أكاديمية بوروسيا مونشنغلادباخ إندونيسيا</strong>، أنا مهاجم متعدد الاستخدامات قادر على اللعب كمهاجم صريح أو جناح أو مهاجم حر.",
        about_p2: "مسلحًا بتجربة الفوز بمسابقات مرموقة مثل كأس ISCO تحت 17 عامًا، أفهم ما يتطلبه الأمر للفوز على أعلى المستويات. أنا مستعد لتقديم إنهاء فتاك وتسارع سريع إلى المستوى التالي من كرة القدم مع فريقك.",
        trophy_title_1: "غرفة ",
        trophy_title_2: "الجوائز",
        trophy_team: "ألقاب الفريق",
        trophy_1st: "المركز الأول",
        trophy_2nd: "الوصيف",
        trophy_ind: "الجوائز الفردية",
        trophy_topscorer: "هداف البطولة",
        trophy_beststriker: "أفضل مهاجم",
        trophy_potm: "أفضل لاعب في المباراة",
        trophy_motm: "رجل المباراة",
        cert_title: "الشهادات والوثائق",
        media_title_1: "شاهد ",
        media_title_2: "الإثارة",
        footer_title_1: "مستعدون للفوز ",
        footer_title_2: "معًا؟",
        footer_desc: "قم بتجنيد محمد لتعزيز خط هجوم فريقك هذا الموسم.",
        footer_rights: "تم التصميم والتطوير باحترافية بواسطة"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // ══════════════════════════════════════════════
    // LANGUAGE DROPDOWN
    // ══════════════════════════════════════════════
    const langDropdown = document.getElementById('langDropdown');
    const langSelected = document.getElementById('langSelected');
    const langOptions  = document.querySelectorAll('.dropdown-option');

    const setLanguage = (lang) => {
        const optionEl = document.querySelector(`.dropdown-option[data-value="${lang}"]`);
        if (optionEl) {
            const imgSrc      = optionEl.querySelector('img').src;
            const textContent = optionEl.querySelector('span').textContent;
            langSelected.innerHTML = `<img src="${imgSrc}" alt="${lang}"> <span>${textContent}</span> <i class="fas fa-chevron-down"></i>`;
        }

        document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang]?.[key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem('preferredLang', lang);
    };

    langSelected.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => langDropdown.classList.remove('open'));

    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            setLanguage(option.getAttribute('data-value'));
            langDropdown.classList.remove('open');
        });
    });

    setLanguage(localStorage.getItem('preferredLang') || 'id');

    // ══════════════════════════════════════════════
    // THEME TOGGLE
    // ══════════════════════════════════════════════
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon   = themeToggle.querySelector('i');

    const setTheme = (isLight) => {
        document.body.classList.toggle('light-mode', isLight);
        themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('lightMode', isLight);
    };

    setTheme(localStorage.getItem('lightMode') === 'true');
    themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('light-mode')));

    // ══════════════════════════════════════════════
    // HAMBURGER / MOBILE MENU
    // ══════════════════════════════════════════════
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));

    // Close mobile menu on link click
    navLinks?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ══════════════════════════════════════════════
    // SMOOTH SCROLL
    // ══════════════════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ══════════════════════════════════════════════
    // SCROLL REVEAL — Intersection Observer
    // ══════════════════════════════════════════════
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-children').forEach(el => {
        revealObserver.observe(el);
    });

    // ══════════════════════════════════════════════
    // NAVBAR — Active link highlighting on scroll
    // ══════════════════════════════════════════════
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navAnchors.forEach(a => a.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                activeLink?.classList.add('active');
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));

    // ══════════════════════════════════════════════
    // NAVBAR SCROLL SHADOW
    // ══════════════════════════════════════════════
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.scrollY > 50
            ? '0 4px 30px rgba(0,0,0,0.5)'
            : 'none';
    }, { passive: true });

    // ══════════════════════════════════════════════
    // GALLERY — Simple lightbox
    // ══════════════════════════════════════════════
    const galleryImgs = document.querySelectorAll('.gallery-img');
    galleryImgs.forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position:fixed; inset:0; background:rgba(0,0,0,0.92);
                display:flex; align-items:center; justify-content:center;
                z-index:9999; cursor:zoom-out; animation:fadeIn .2s ease;
                backdrop-filter:blur(10px);
            `;
            const bigImg = document.createElement('img');
            bigImg.src = img.currentSrc || img.src;
            bigImg.style.cssText = `max-width:90vw; max-height:90vh; border-radius:12px; box-shadow:0 0 60px rgba(245,197,24,0.3);`;
            overlay.appendChild(bigImg);
            overlay.addEventListener('click', () => overlay.remove());
            document.body.appendChild(overlay);
        });
    });

    // ══════════════════════════════════════════════
    // STAT CARDS — Animate numbers
    // ══════════════════════════════════════════════
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.stat-card').forEach(card => {
        card.style.animationPlayState = 'paused';
        statObserver.observe(card);
    });

});
