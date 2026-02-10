// --- DATABASE 1: DESKRIPSI LOVE LANGUAGE ---
const llData = {
    "Words of Affirmation": {
        title: "🌟 Words of Affirmation",
        overview: "Kamu sangat peka terhadap kata-kata. Ucapan apresiasi, pengakuan usaha, atau kalimat penyemangat berdampak besar bagi motivasimu.",
        howToShow: "Kamu mengekspresikan kepedulian lewat pujian, ucapan terima kasih, dan validasi verbal.",
        needs: ["Apresiasi yang tulus & jelas.", "Feedback positif atas usaha.", "Pengakuan verbal."],
        recommendations: ["Lingkungan yang terbuka terhadap pujian.", "Komunikasi afirmatif dalam kelompok."],
        sources: [{ text: "Gardner (2003) - Effort-focused praise", link: "#" }]
    },
    "Quality Time": {
        title: "⏰ Quality Time",
        overview: "Bagi kamu, kehadiran penuh tanpa distraksi adalah segalanya. Kamu merasa terhubung saat berdiskusi atau belajar bersama dengan fokus.",
        howToShow: "Kamu meluangkan waktu khusus, mendengarkan, dan hadir secara utuh.",
        needs: ["Waktu khusus tanpa distraksi.", "Teman diskusi yang hadir penuh.", "Kebersamaan dalam proses."],
        recommendations: ["Sesi belajar rutin.", "Interaksi langsung tatap muka."],
        sources: [{ text: "ScienceDirect (2023) - Study-together groups", link: "#" }]
    },
    "Acts of Service": {
        title: "🤝 Acts of Service",
        overview: "Kamu merasa dihargai lewat tindakan nyata. Bantuan konkret yang meringankan beban lebih berarti daripada sekadar kata-kata manis.",
        howToShow: "Kamu refleks membantu saat melihat orang kesulitan. Kamu suka memberi solusi praktis.",
        needs: ["Bantuan langsung & konkret.", "Inisiatif tanpa diminta.", "Dukungan tenaga."],
        recommendations: ["Kerja tim yang saling membantu.", "Sistem peer tutoring."],
        sources: [{ text: "MDPI (2025) - Peer support", link: "#" }]
    },
    "Receiving Gifts": {
        title: "🎁 Receiving Gifts",
        overview: "Perhatian bagimu terasa lewat simbol. Hadiah kecil atau benda yang menunjukkan 'aku kepikiran kamu' sangat berarti.",
        howToShow: "Kamu suka memberi hadiah kecil atau simbol kepedulian pada momen spesial.",
        needs: ["Hadiah kecil yang personal.", "Simbol apresiasi atas usaha.", "Kejutan sederhana."],
        recommendations: ["Apresiasi simbolis (sertifikat/hadiah kecil).", "Lingkungan yang kreatif memberi reward."],
        sources: [{ text: "Univ Arizona - Brain science of gifts", link: "#" }]
    },
    "Physical Touch": {
        title: "🤍 Physical Touch",
        overview: "Kamu merasa terhubung lewat gestur fisik yang aman seperti tos, tepukan bahu, atau jabat tangan yang menguatkan.",
        howToShow: "Kamu menggunakan bahasa tubuh (tos, tepukan) untuk memberi semangat.",
        needs: ["Sentuhan ringan yang pantas (tos/high-five).", "Rasa kebersamaan fisik.", "Menghormati batas kenyamanan."],
        recommendations: ["Lingkungan hangat & tidak kaku.", "Gestur fisik pereda stres."],
        sources: [{ text: "PMC (2024) - Affective touch", link: "#" }]
    }
};

// --- DATABASE 2: DATA MAHASISWA (Generated from CSV) ---
const students = [
    {"npm": "2406344605", "name": "Fadhil Rusydi Hafizh", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "50%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "5%"}},
    {"npm": "2406358516", "name": "Adrian Dwi Mahendra", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "10%", "Quality Time": "70%", "Acts of Service": "10%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2506541143", "name": "Alifia Febrina", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "45%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406419114", "name": "Nadya Azzahra", "major": "Matematika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "50%", "Quality Time": "25%", "Acts of Service": "25%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506596136", "name": "Izzati Rifqah", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "65%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406484284", "name": "Andrea Ratu Felia", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "30%", "Quality Time": "35%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%"}},
    {"npm": "2506543312", "name": "Luciana Tjang", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "20%", "Quality Time": "35%", "Acts of Service": "35%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2506539630", "name": "Fathi Abdulhaqqi", "major": "Matematika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "35%", "Quality Time": "25%", "Acts of Service": "40%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506642243", "name": "Meidiandra Kurfatih", "major": "Aktuaria", "type": "Receiving Gifts", "percentages": {"Words of Affirmation": "0%", "Quality Time": "10%", "Acts of Service": "15%", "Receiving Gifts": "75%", "Physical Touch": "0%"}},
    {"npm": "2506590510", "name": "Nadiva Kayla Nurazizah", "major": "Matematika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "40%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506593254", "name": "Muhammad Arfa Raddell", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "40%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2306164512", "name": "Meiliana Putricia", "major": "Statistika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "45%", "Quality Time": "35%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406415343", "name": "Genisha Almyra Mumtaz", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "20%", "Quality Time": "50%", "Acts of Service": "30%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506593166", "name": "Dimaz Satya Ardendi", "major": "Matematika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "5%", "Quality Time": "35%", "Acts of Service": "45%", "Receiving Gifts": "15%", "Physical Touch": "0%"}},
    {"npm": "2506642855", "name": "Naura Mazaya Budianto", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "55%", "Acts of Service": "10%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406432564", "name": "Muhammad Radya Mulyana", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "5%", "Quality Time": "45%", "Acts of Service": "45%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2306218345", "name": "Naura Alya Salsabila", "major": "Statistika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "20%", "Quality Time": "25%", "Acts of Service": "35%", "Receiving Gifts": "15%", "Physical Touch": "5%"}},
    {"npm": "2406484132", "name": "Maria Ellora Damarkasih", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "35%", "Acts of Service": "15%", "Receiving Gifts": "25%", "Physical Touch": "0%"}},
    {"npm": "2406484523", "name": "Ananda Syifa Khairunnisa", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "20%", "Quality Time": "10%", "Acts of Service": "70%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406342354", "name": "Salsabila Siahaan", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "10%", "Quality Time": "25%", "Acts of Service": "50%", "Receiving Gifts": "10%", "Physical Touch": "5%"}},
    {"npm": "2406439860", "name": "Maribel Erlina Panjaitan", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "10%", "Quality Time": "55%", "Acts of Service": "25%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2306216604", "name": "Sri Azizah Rahmadani", "major": "Statistika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "35%", "Quality Time": "35%", "Acts of Service": "10%", "Receiving Gifts": "20%", "Physical Touch": "0%"}},
    {"npm": "2506642110", "name": "Kireina Azra Mukti", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "10%", "Quality Time": "40%", "Acts of Service": "35%", "Receiving Gifts": "10%", "Physical Touch": "5%"}},
    {"npm": "2306249621", "name": "Arifah Nabila Adhwa", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "30%", "Quality Time": "60%", "Acts of Service": "10%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2306164525", "name": "Syahrani", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "10%", "Quality Time": "40%", "Acts of Service": "30%", "Receiving Gifts": "15%", "Physical Touch": "5%"}},
    {"npm": "2506642003", "name": "Kayfa Avidati Mayla", "major": "Matematika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "5%", "Quality Time": "30%", "Acts of Service": "65%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2306164506", "name": "Arshila Dewi Bhasuki", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "5%", "Quality Time": "65%", "Acts of Service": "25%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2506643403", "name": "Reiza Fitri Ananda", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "55%", "Acts of Service": "30%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406406370", "name": "Firly Nadia Khalisa", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "10%", "Quality Time": "60%", "Acts of Service": "10%", "Receiving Gifts": "15%", "Physical Touch": "5%"}},
    {"npm": "2506625716", "name": "Joscelin Callista Chandra", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "30%", "Quality Time": "70%", "Acts of Service": "0%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506605134", "name": "Mitchel Aurelius Salvadiaz", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "5%", "Quality Time": "85%", "Acts of Service": "0%", "Receiving Gifts": "5%", "Physical Touch": "5%"}},
    {"npm": "2306261015", "name": "Muhammad Salman", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "10%", "Quality Time": "50%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "0%"}},
    {"npm": "2406482202", "name": "Nidia Nazila Rizkia Arsh", "major": "Matematika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "45%", "Quality Time": "45%", "Acts of Service": "5%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2506600650", "name": "Khadijah Nur Wafirah", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "45%", "Acts of Service": "30%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406356220", "name": "Ralf Zidane Harry", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "5%", "Receiving Gifts": "15%", "Physical Touch": "10%"}},
    {"npm": "2406438391", "name": "Selma Azkiah", "major": "Matematika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "15%", "Quality Time": "40%", "Acts of Service": "45%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406354272", "name": "Ronald Maulana Sepinggan", "major": "Matematika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "50%", "Quality Time": "20%", "Acts of Service": "0%", "Receiving Gifts": "0%", "Physical Touch": "30%"}},
    {"npm": "2506642943", "name": "Ni Putu Namerta Kirana", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "35%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "10%"}},
    {"npm": "2406482120", "name": "Muhammad Bintang Ardiwijaya", "major": "Matematika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "25%", "Quality Time": "30%", "Acts of Service": "45%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406484252", "name": "Khalisha Zhurifah Sejati", "major": "Statistika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "10%", "Quality Time": "35%", "Acts of Service": "50%", "Receiving Gifts": "0%", "Physical Touch": "5%"}},
    {"npm": "2406423471", "name": "Azka Safira Amorizki", "major": "Statistika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "15%", "Quality Time": "20%", "Acts of Service": "50%", "Receiving Gifts": "5%", "Physical Touch": "10%"}},
    {"npm": "2306244186", "name": "Raditya Fauzan", "major": "Matematika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "35%", "Quality Time": "30%", "Acts of Service": "30%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2406355073", "name": "Callysta Nadira Suhaidi", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "35%", "Quality Time": "40%", "Acts of Service": "25%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506602050", "name": "Keisha Adinda Aliffa", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "15%", "Physical Touch": "0%"}},
    {"npm": "2506610563", "name": "Hykal Aulia", "major": "Statistika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "45%", "Quality Time": "30%", "Acts of Service": "10%", "Receiving Gifts": "10%", "Physical Touch": "5%"}},
    {"npm": "2406351983", "name": "Asher Nancy Noviartha", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "10%", "Receiving Gifts": "15%", "Physical Touch": "10%"}},
    {"npm": "2206032860", "name": "Arjun Michael Rogan", "major": "Aktuaria", "type": "Physical Touch", "percentages": {"Words of Affirmation": "25%", "Quality Time": "10%", "Acts of Service": "30%", "Receiving Gifts": "0%", "Physical Touch": "35%"}},
    {"npm": "2406484196", "name": "Anello Absar", "major": "Statistika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "10%", "Quality Time": "25%", "Acts of Service": "40%", "Receiving Gifts": "5%", "Physical Touch": "20%"}},
    {"npm": "2406484403", "name": "Rizqy Adam Ramadhan", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "35%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "0%", "Physical Touch": "5%"}},
    {"npm": "2406484555", "name": "Ricardo Gavino Mahadi", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "60%", "Acts of Service": "20%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2506618704", "name": "Indrawati Kusuma", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "20%", "Quality Time": "60%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2306220601", "name": "Sofie", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "45%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406430546", "name": "Farhan Fauzan Rizqy", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "35%", "Acts of Service": "20%", "Receiving Gifts": "15%", "Physical Touch": "5%"}},
    {"npm": "2406484334", "name": "Satriyo Nur Hidayat", "major": "Statistika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "15%", "Quality Time": "25%", "Acts of Service": "60%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406403620", "name": "Reifan Faidhillah", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "35%", "Acts of Service": "25%", "Receiving Gifts": "10%", "Physical Touch": "5%"}},
    {"npm": "2406484145", "name": "Monica Cicilya Kumowal", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "5%", "Quality Time": "50%", "Acts of Service": "45%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506621913", "name": "Luna Adzrania Sharifa", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "10%", "Quality Time": "50%", "Acts of Service": "35%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2406348641", "name": "Alya Dwi Nurmiyati", "major": "Statistika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "45%", "Quality Time": "35%", "Acts of Service": "10%", "Receiving Gifts": "5%", "Physical Touch": "5%"}},
    {"npm": "2506632406", "name": "Syarifah Sheykha Mufassirah", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "30%", "Quality Time": "50%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406405664", "name": "Prinsesa Anantyas Nadira Sejati", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "20%", "Quality Time": "35%", "Acts of Service": "35%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406484391", "name": "Dominique Samantha Suniadji", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "70%", "Acts of Service": "15%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506617720", "name": "Nayla Aura Malika", "major": "Statistika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "10%", "Quality Time": "15%", "Acts of Service": "40%", "Receiving Gifts": "20%", "Physical Touch": "15%"}},
    {"npm": "2406418105", "name": "Hafizhul Urfan", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "25%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2306209624", "name": "Angelyne", "major": "Statistika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "35%", "Quality Time": "35%", "Acts of Service": "25%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2506607045", "name": "Netania Fenitiel Sinurat", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "20%", "Quality Time": "15%", "Acts of Service": "50%", "Receiving Gifts": "15%", "Physical Touch": "0%"}},
    {"npm": "2406482335", "name": "Averina Lizandra Purba", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "30%", "Quality Time": "35%", "Acts of Service": "25%", "Receiving Gifts": "5%", "Physical Touch": "5%"}},
    {"npm": "2406484290", "name": "Inshovi Amiroh", "major": "Statistika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "25%", "Quality Time": "30%", "Acts of Service": "35%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2506642331", "name": "Mohammad Rafi Islami", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "40%", "Quality Time": "45%", "Acts of Service": "10%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2506547304", "name": "Syafiq Maftuh", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "45%", "Acts of Service": "25%", "Receiving Gifts": "10%", "Physical Touch": "5%"}},
    {"npm": "2306231776", "name": "Dastin Rangga Berani", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "30%", "Quality Time": "45%", "Acts of Service": "20%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2406432684", "name": "Hesekiel Rafael Valerian L S", "major": "Statistika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "35%", "Quality Time": "25%", "Acts of Service": "25%", "Receiving Gifts": "0%", "Physical Touch": "15%"}},
    {"npm": "2506642930", "name": "Nikko Nabil Valerian", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "20%", "Quality Time": "45%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%"}},
    {"npm": "2406482114", "name": "Fauzan Rizky Ramadhan", "major": "Matematika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "45%", "Quality Time": "25%", "Acts of Service": "10%", "Receiving Gifts": "20%", "Physical Touch": "0%"}},
    {"npm": "2406351724", "name": "Mutiara Naghma Pane", "major": "Matematika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "0%", "Quality Time": "40%", "Acts of Service": "55%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2306164411", "name": "Natasya Revalina Putri", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "20%", "Quality Time": "40%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "0%"}},
    {"npm": "2506538035", "name": "Viola Sahira Putri", "major": "Statistika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "50%", "Quality Time": "30%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2406432570", "name": "Muhammad Hafizh Adha", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "75%", "Quality Time": "15%", "Acts of Service": "10%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2306207676", "name": "Argama Vanesa Nauli Sijabat", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "40%", "Acts of Service": "35%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406356933", "name": "Syifa Shafira", "major": "Matematika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "45%", "Quality Time": "25%", "Acts of Service": "30%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406430054", "name": "Bagas Aryo Wicaksono", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "0%", "Quality Time": "100%", "Acts of Service": "0%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406414170", "name": "Ilea Putrisia", "major": "Statistika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "15%", "Quality Time": "20%", "Acts of Service": "35%", "Receiving Gifts": "30%", "Physical Touch": "0%"}},
    {"npm": "2406413041", "name": "Muhammad Rifki Darmawan", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "50%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "5%"}},
    {"npm": "2406398293", "name": "Fahma Dani", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "0%", "Quality Time": "65%", "Acts of Service": "5%", "Receiving Gifts": "30%", "Physical Touch": "0%"}},
    {"npm": "2406348616", "name": "Haikal Faiz", "major": "Statistika", "type": "Physical Touch", "percentages": {"Words of Affirmation": "20%", "Quality Time": "20%", "Acts of Service": "20%", "Receiving Gifts": "15%", "Physical Touch": "25%"}},
    {"npm": "2406407096", "name": "Rahmaulia Azizah Syaifani", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "20%", "Quality Time": "35%", "Acts of Service": "30%", "Receiving Gifts": "10%", "Physical Touch": "5%"}},
    {"npm": "2406345702", "name": "Raya Rafelia Sartono", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "0%", "Quality Time": "50%", "Acts of Service": "50%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406436783", "name": "Rodear Gemilang Saragih", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "0%", "Quality Time": "100%", "Acts of Service": "0%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406422102", "name": "Nathanael Nainggolan", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "30%", "Quality Time": "40%", "Acts of Service": "25%", "Receiving Gifts": "0%", "Physical Touch": "5%"}},
    {"npm": "2406430092", "name": "Callista Remasya Hendy", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "30%", "Acts of Service": "30%", "Receiving Gifts": "15%", "Physical Touch": "0%"}},
    {"npm": "2406482101", "name": "Richardo Sidik", "major": "Matematika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "0%", "Quality Time": "0%", "Acts of Service": "100%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2306261255", "name": "Elfa Nusuki Amada", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "0%", "Quality Time": "95%", "Acts of Service": "5%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406414100", "name": "Christian Octavianus", "major": "Matematika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "30%", "Quality Time": "20%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "25%"}},
    {"npm": "2306153944", "name": "Vanya Alisha Zafira", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "65%", "Acts of Service": "5%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2406350993", "name": "Faiq Nailur Ridha", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "20%", "Quality Time": "40%", "Acts of Service": "0%", "Receiving Gifts": "0%", "Physical Touch": "40%"}},
    {"npm": "2406395575", "name": "Marusaha Montes Sianturi", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "20%", "Quality Time": "15%", "Acts of Service": "65%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406439311", "name": "Tamimah Kamila Azra", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "50%", "Acts of Service": "25%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406400316", "name": "Kent Farrell Candra", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "0%", "Quality Time": "45%", "Acts of Service": "45%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406439684", "name": "Aninditha Wahyu Putri", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "15%", "Quality Time": "15%", "Acts of Service": "60%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406439412", "name": "Muhammad Fawwaz Abadhas", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "0%", "Quality Time": "100%", "Acts of Service": "0%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506604560", "name": "Qyandra Azzahra Damanik", "major": "Statistika", "type": "Quality Time", "percentages": {"Words of Affirmation": "30%", "Quality Time": "55%", "Acts of Service": "15%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406417033", "name": "Muhammad Yusuf Syaifuddin", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "0%", "Quality Time": "70%", "Acts of Service": "10%", "Receiving Gifts": "0%", "Physical Touch": "20%"}},
    {"npm": "2406484340", "name": "Ruben Gian Agustin", "major": "Statistika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "60%", "Quality Time": "10%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406408123", "name": "Daniel Abyasa Daniswara", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "60%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406403633", "name": "Azka Fadhilah Putri", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "10%", "Quality Time": "60%", "Acts of Service": "20%", "Receiving Gifts": "5%", "Physical Touch": "5%"}},
    {"npm": "2406484542", "name": "Putri Enxi Suteja", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "30%", "Acts of Service": "10%", "Receiving Gifts": "25%", "Physical Touch": "10%"}},
    {"npm": "2406484580", "name": "Silvi Laurensia Salim", "major": "Aktuaria", "type": "Physical Touch", "percentages": {"Words of Affirmation": "15%", "Quality Time": "10%", "Acts of Service": "20%", "Receiving Gifts": "15%", "Physical Touch": "40%"}},
    {"npm": "2406353465", "name": "Nabila Nurcaya Andini", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "40%", "Quality Time": "25%", "Acts of Service": "25%", "Receiving Gifts": "0%", "Physical Touch": "10%"}},
    {"npm": "2506641221", "name": "Dzakir Rahman", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "0%", "Quality Time": "100%", "Acts of Service": "0%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2406355590", "name": "Kelly Jovita", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "0%", "Quality Time": "35%", "Acts of Service": "65%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506593084", "name": "Tiara Putri Allisya", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "5%", "Quality Time": "55%", "Acts of Service": "40%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506541616", "name": "Meylisa Nuraulia Sopian", "major": "Statistika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "20%", "Quality Time": "25%", "Acts of Service": "45%", "Receiving Gifts": "5%", "Physical Touch": "5%"}},
    {"npm": "2406484460", "name": "Resa Korenita Pembayun", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "5%", "Quality Time": "40%", "Acts of Service": "50%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2406432671", "name": "Anzalul Nurul Falahhiyyah", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "50%", "Quality Time": "25%", "Acts of Service": "5%", "Receiving Gifts": "5%", "Physical Touch": "15%"}},
    {"npm": "2406398513", "name": "Farisan Hindami Siswoko", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "30%", "Quality Time": "50%", "Acts of Service": "5%", "Receiving Gifts": "0%", "Physical Touch": "15%"}},
    {"npm": "2506640736", "name": "Arriza Hadiny", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "20%", "Quality Time": "60%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2506642792", "name": "Najmi Shafiyya Nafhanun", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "15%", "Quality Time": "50%", "Acts of Service": "25%", "Receiving Gifts": "10%", "Physical Touch": "0%"}},
    {"npm": "2406402990", "name": "Naura Faiza Purnomoputri", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "5%", "Quality Time": "15%", "Acts of Service": "45%", "Receiving Gifts": "5%", "Physical Touch": "30%"}},
    {"npm": "2406405153", "name": "Saefudin Ilham", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "0%", "Quality Time": "100%", "Acts of Service": "0%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506641120", "name": "Darian Muhammad Raihan", "major": "Matematika", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "45%", "Quality Time": "25%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "5%"}},
    {"npm": "2406439753", "name": "Ratu Ayunda Chelsea", "major": "Matematika", "type": "Quality Time", "percentages": {"Words of Affirmation": "20%", "Quality Time": "60%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "0%"}},
    {"npm": "2506642123", "name": "Krislyn Winny Riyadi", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "25%", "Receiving Gifts": "5%", "Physical Touch": "0%"}},
    {"npm": "2406396691", "name": "Athisaya Pasha Syandana", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "30%", "Acts of Service": "15%", "Receiving Gifts": "25%", "Physical Touch": "5%"}},
    {"npm": "2506543092", "name": "Saburo Mehetabel Johan", "major": "Aktuaria", "type": "Acts of Service", "percentages": {"Words of Affirmation": "20%", "Quality Time": "20%", "Acts of Service": "35%", "Receiving Gifts": "10%", "Physical Touch": "15%"}},
    {"npm": "2406424543", "name": "Fransisca Gabriella", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": {"Words of Affirmation": "40%", "Quality Time": "35%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "5%"}},
    {"npm": "2406354493", "name": "Theodora Adriana Rosa", "major": "Aktuaria", "type": "Quality Time", "percentages": {"Words of Affirmation": "25%", "Quality Time": "50%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "5%"}},
    {"npm": "2406408325", "name": "Firdha Nazla Soblia", "major": "Matematika", "type": "Acts of Service", "percentages": {"Words of Affirmation": "30%", "Quality Time": "30%", "Acts of Service": "40%", "Receiving Gifts": "0%", "Physical Touch": "0%"}}
];

// ... (Pastikan llData dan students ada di atas kode ini) ...

// --- LOGIC UTAMA (REVISI PIE CHART & DASHBOARD GLOBAL) ---
const searchBtn = document.getElementById('searchBtn');
const npmInput = document.getElementById('npmInput');
const resultContainer = document.getElementById('resultContainer');
const majorTabs = document.getElementById('majorTabs');

// Variabel untuk menyimpan instance chart agar bisa di-reset/update
let dashboardChart = null; 
let userPieChart = null;
let currentMajor = "";
let currentData = {};

// Init Dashboard on Load
document.addEventListener('DOMContentLoaded', () => {
    initDashboard(); 
});

searchBtn.addEventListener('click', findStudent);
npmInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') findStudent(); });

// --- 1. FUNGSI PENCARIAN (DENGAN PIE CHART) ---
function findStudent() {
    const inputNpm = npmInput.value.trim();
    resultContainer.innerHTML = '';

    if (!inputNpm) {
        alert("Mohon masukkan NPM!");
        return;
    }

    const student = students.find(s => String(s.npm).trim() === String(inputNpm));

    if (student) {
        let typeKey = student.type;
        if (!llData[typeKey]) {
            const foundKey = Object.keys(llData).find(k => k.toLowerCase() === typeKey.toLowerCase());
            typeKey = foundKey || "Quality Time";
        }
        const content = llData[typeKey]; 
        
        const needsList = content.needs.map(item => `<li>${item}</li>`).join('');
        const recList = content.recommendations.map(item => `<li>${item}</li>`).join('');

        // Inject HTML (Progress bar diganti Canvas Pie Chart)
        resultContainer.innerHTML = `
            <div class="card">
                <div class="student-info">
                    <h2>${student.name}</h2>
                    <span class="major">${student.major}</span>
                </div>
                <h2 class="ll-title">${content.title}</h2>
                
                <div class="user-chart-container">
                    <canvas id="userLoveChart"></canvas>
                </div>

                <div class="section-block"><h3>Gambaran Umum</h3><p>${content.overview}</p></div>
                <div class="section-block"><h3>Yang Kamu Butuhkan</h3><ul>${needsList}</ul></div>
                <div class="section-block"><h3>Rekomendasi</h3><ul>${recList}</ul></div>
            </div>
        `;
        
        // Render Pie Chart setelah HTML masuk ke halaman
        renderUserPieChart(student.percentages);
        
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } else {
        resultContainer.innerHTML = `<p class="error-msg">NPM <strong>${inputNpm}</strong> tidak ditemukan.</p>`;
    }
}

function renderUserPieChart(percentages) {
    const ctx = document.getElementById('userLoveChart').getContext('2d');
    
    // Konversi data "25%" string menjadi angka 25
    const labels = Object.keys(percentages);
    const dataValues = Object.values(percentages).map(val => parseInt(val.replace('%', '')));

    if (userPieChart) userPieChart.destroy(); // Hapus chart lama jika ada

    userPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: dataValues,
                backgroundColor: ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF'],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { family: "'Poppins', sans-serif", size: 12 }, boxWidth: 12 }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

// --- 2. FUNGSI DASHBOARD (DENGAN "SEMUA JURUSAN") ---
function initDashboard() {
    // Siapkan wadah statistik
    const stats = {};
    const globalStats = { "Words of Affirmation": 0, "Quality Time": 0, "Acts of Service": 0, "Receiving Gifts": 0, "Physical Touch": 0 };
    const allMajors = [];

    // Hitung data
    students.forEach(s => {
        const major = s.major;
        const type = s.type;
        
        if (!stats[major]) {
            stats[major] = { "Words of Affirmation": 0, "Quality Time": 0, "Acts of Service": 0, "Receiving Gifts": 0, "Physical Touch": 0 };
            allMajors.push(major);
        }
        
        // Normalisasi key (mencegah error huruf besar/kecil)
        let cleanType = Object.keys(stats[major]).find(k => k.toLowerCase() === type.toLowerCase());
        
        if(cleanType) {
            stats[major][cleanType]++;     // Tambah ke jurusan
            globalStats[cleanType]++;      // Tambah ke global
        }
    });

    // Urutkan Jurusan
    const uniqueMajors = [...new Set(allMajors)].sort();

    // 1. Buat Tombol "SEMUA JURUSAN" (Global)
    const btnGlobal = document.createElement('button');
    btnGlobal.innerText = "Semua Jurusan";
    btnGlobal.className = 'tab-btn active'; // Default aktif
    btnGlobal.onclick = () => {
        switchTab(btnGlobal, "Semua Jurusan", globalStats);
    };
    majorTabs.appendChild(btnGlobal);

    // 2. Buat Tombol Per Jurusan
    uniqueMajors.forEach(major => {
        const btn = document.createElement('button');
        btn.innerText = major;
        btn.className = 'tab-btn';
        btn.onclick = () => {
            switchTab(btn, major, stats[major]);
        };
        majorTabs.appendChild(btn);
    });

    // Render Grafik Awal (Global)
    updateDashboardChart("Semua Jurusan", globalStats);
}

function switchTab(btnElement, title, data) {
    // Reset class active
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    // Update Chart
    updateDashboardChart(title, data);
}

// Fungsi Update Chart Dashboard (Bar Chart)
function updateDashboardChart(majorName, dataObj) {
    currentMajor = majorName;
    currentData = dataObj;

    const ctx = document.getElementById('llChart').getContext('2d');
    const isMobile = window.innerWidth < 768;
    const fontSize = isMobile ? 10 : 13;

    // Responsive Label (Multiline)
    const rawLabels = Object.keys(dataObj);
    const dataValues = Object.values(dataObj);
    const responsiveLabels = rawLabels.map(label => {
        if (!isMobile) return label;
        if (label === "Words of Affirmation") return ["Words of", "Affirmation"];
        if (label === "Quality Time") return ["Quality", "Time"];
        if (label === "Acts of Service") return ["Acts of", "Service"];
        if (label === "Receiving Gifts") return ["Receiving", "Gifts"];
        if (label === "Physical Touch") return ["Physical", "Touch"];
        return label.split(" ");
    });

    if (dashboardChart) dashboardChart.destroy();

    dashboardChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: responsiveLabels,
            datasets: [{
                label: 'Jumlah Mahasiswa',
                data: dataValues,
                backgroundColor: ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF'],
                borderColor: '#FFC2D1',
                borderWidth: 2,
                borderRadius: isMobile ? 6 : 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { ticks: { font: { size: fontSize, family: "'Poppins', sans-serif" } } },
                y: { beginAtZero: true, ticks: { stepSize: 1, font: { size: fontSize } } }
            },
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: `Statistik: ${majorName}`,
                    font: { size: isMobile ? 14 : 18, family: "'Poppins', sans-serif" },
                    color: '#D63384'
                }
            }
        }
    });
}

// Auto Resize Listener
window.addEventListener('resize', () => {
    if (currentMajor && currentData) updateDashboardChart(currentMajor, currentData);
});



