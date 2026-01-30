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
    { "npm": "2406344605", "name": "Fadhil Rusydi Hafizh", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "50%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "5%" } },
    { "npm": "2406358516", "name": "Adrian Dwi Mahendra", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "10%", "Quality Time": "70%", "Acts of Service": "10%", "Receiving Gifts": "10%", "Physical Touch": "0%" } },
    { "npm": "2506541143", "name": "Alifia Febrina", "major": "Aktuaria", "type": "Acts of Service", "percentages": { "Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "45%", "Receiving Gifts": "10%", "Physical Touch": "0%" } },
    { "npm": "2406419114", "name": "Nadya Azzahra", "major": "Matematika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "50%", "Quality Time": "25%", "Acts of Service": "25%", "Receiving Gifts": "0%", "Physical Touch": "0%" } },
    { "npm": "2506596136", "name": "Izzati Rifqah", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "15%", "Quality Time": "65%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "0%" } },
    { "npm": "2506596546", "name": "Andrea Ratu Felia", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "50%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "10%" } },
    { "npm": "2206028991", "name": "Nasywaa Auliya", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "30%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "10%" } },
    { "npm": "2306222830", "name": "Farhan Nurhuda", "major": "Statistika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "20%", "Quality Time": "15%", "Acts of Service": "15%", "Receiving Gifts": "0%", "Physical Touch": "50%" } },
    { "npm": "2206030951", "name": "Zalsa Nadya Putri", "major": "Aktuaria", "type": "Acts of Service", "percentages": { "Words of Affirmation": "15%", "Quality Time": "30%", "Acts of Service": "40%", "Receiving Gifts": "15%", "Physical Touch": "0%" } },
    { "npm": "2406358365", "name": "Bagas Damar Pandulu", "major": "Statistika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "30%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "15%" } },
    { "npm": "2406357904", "name": "Cinta Aurellia", "major": "Aktuaria", "type": "Acts of Service", "percentages": { "Words of Affirmation": "25%", "Quality Time": "25%", "Acts of Service": "30%", "Receiving Gifts": "20%", "Physical Touch": "0%" } },
    { "npm": "2306214195", "name": "Ghaida Auliya", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "30%", "Receiving Gifts": "20%", "Physical Touch": "5%" } },
    { "npm": "2306211022", "name": "Muhammad Riziq Rabbani", "major": "Statistika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "20%", "Acts of Service": "10%", "Receiving Gifts": "10%", "Physical Touch": "25%" } },
    { "npm": "2306224325", "name": "Fina Syifaul", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "20%", "Acts of Service": "30%", "Receiving Gifts": "5%", "Physical Touch": "10%" } },
    { "npm": "2306214485", "name": "Adya Naila Wibowo", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "20%", "Quality Time": "20%", "Acts of Service": "40%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2306161833", "name": "Kezia Tetty Siringoringo", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "30%", "Quality Time": "25%", "Acts of Service": "45%", "Receiving Gifts": "0%", "Physical Touch": "0%" } },
    { "npm": "2406357476", "name": "Alya Mukhbita", "major": "Statistika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "15%", "Quality Time": "30%", "Acts of Service": "35%", "Receiving Gifts": "20%", "Physical Touch": "0%" } },
    { "npm": "2206025251", "name": "Favian Astama Adiyatma", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "0%" } },
    { "npm": "2406359046", "name": "Salwa Salsabila", "major": "Statistika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "35%" } },
    { "npm": "2306221140", "name": "Dinda Ayu Larasati", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "30%", "Quality Time": "40%", "Acts of Service": "30%", "Receiving Gifts": "0%", "Physical Touch": "0%" } },
    { "npm": "2306161745", "name": "Fadhil Dhia Ulhaq", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "30%", "Quality Time": "35%", "Acts of Service": "20%", "Receiving Gifts": "5%", "Physical Touch": "10%" } },
    { "npm": "2406359286", "name": "Mutiara Laila Syifa", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "30%", "Acts of Service": "15%", "Receiving Gifts": "25%", "Physical Touch": "5%" } },
    { "npm": "2406344233", "name": "Khayla Adzra Syakira", "major": "Matematika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "10%", "Quality Time": "20%", "Acts of Service": "10%", "Receiving Gifts": "10%", "Physical Touch": "50%" } },
    { "npm": "2206030586", "name": "Devina Alya Shafira", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "10%", "Quality Time": "30%", "Acts of Service": "45%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306161915", "name": "Reza Rahadian", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "30%", "Quality Time": "25%", "Acts of Service": "25%", "Receiving Gifts": "20%", "Physical Touch": "0%" } },
    { "npm": "2406358485", "name": "Gita Elfrida", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "30%", "Quality Time": "25%", "Acts of Service": "25%", "Receiving Gifts": "10%", "Physical Touch": "10%" } },
    { "npm": "2306168575", "name": "Muhammad Ridhwan Fakhri", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "5%", "Physical Touch": "10%" } },
    { "npm": "2406357873", "name": "Siti Nurlaila", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2406359191", "name": "Rihhadatul", "major": "Aktuaria", "type": "Physical Touch", "percentages": { "Words of Affirmation": "30%", "Quality Time": "10%", "Acts of Service": "10%", "Receiving Gifts": "15%", "Physical Touch": "35%" } },
    { "npm": "2406358390", "name": "Nabilah Putri Saniyyah", "major": "Matematika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "15%", "Acts of Service": "15%", "Receiving Gifts": "25%", "Physical Touch": "10%" } },
    { "npm": "2206082691", "name": "Rizky Ramadhani", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "15%", "Quality Time": "50%", "Acts of Service": "15%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2306227655", "name": "Raditya Ihsan", "major": "Matematika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "20%", "Quality Time": "30%", "Acts of Service": "10%", "Receiving Gifts": "5%", "Physical Touch": "35%" } },
    { "npm": "2306230861", "name": "Najwa Khalisa", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "35%", "Acts of Service": "15%", "Receiving Gifts": "20%", "Physical Touch": "10%" } },
    { "npm": "2406357734", "name": "Azfa Nabila", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "15%", "Quality Time": "45%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "0%" } },
    { "npm": "2306220794", "name": "Zia Luvena", "major": "Statistika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "45%", "Quality Time": "30%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "0%" } },
    { "npm": "2406358472", "name": "Fadya Haya", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "30%", "Receiving Gifts": "25%", "Physical Touch": "0%" } },
    { "npm": "2206081493", "name": "Dhimas Satria Yudha", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "15%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "20%", "Physical Touch": "5%" } },
    { "npm": "2306230911", "name": "Aditya Putra", "major": "Matematika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "20%", "Quality Time": "20%", "Acts of Service": "20%", "Receiving Gifts": "0%", "Physical Touch": "40%" } },
    { "npm": "2406359071", "name": "Nazwa Syakira", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "0%" } },
    { "npm": "2306154185", "name": "Rayhan Akmal", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "15%", "Quality Time": "35%", "Acts of Service": "15%", "Receiving Gifts": "25%", "Physical Touch": "10%" } },
    { "npm": "2306161865", "name": "Khairana Larasati", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "20%", "Quality Time": "30%", "Acts of Service": "35%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2206081700", "name": "Yudha Pratama", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "35%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "10%" } },
    { "npm": "2406357892", "name": "Salsabila Ramadhani", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "45%", "Acts of Service": "20%", "Receiving Gifts": "15%", "Physical Touch": "0%" } },
    { "npm": "2406357596", "name": "Farras Anindya", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "30%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "0%" } },
    { "npm": "2306230893", "name": "Nabilah Putri", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "15%", "Physical Touch": "0%" } },
    { "npm": "2206082722", "name": "Rizki Pratama", "major": "Matematika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "20%", "Quality Time": "20%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "35%" } },
    { "npm": "2406359084", "name": "Vania Clarissa", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "50%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "0%" } },
    { "npm": "2306210080", "name": "Tiara Andini", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "35%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2406357646", "name": "Adinda Putri", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "40%", "Quality Time": "30%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "0%" } },
    { "npm": "2206081442", "name": "Fadhil Muhammad", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "35%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2206024974", "name": "Nurul Hidayati", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "15%", "Quality Time": "25%", "Acts of Service": "45%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2406357601", "name": "Nabila Syakira", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "35%", "Acts of Service": "20%", "Receiving Gifts": "20%", "Physical Touch": "0%" } },
    { "npm": "2206822294", "name": "Rizky Firmansyah", "major": "Matematika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "15%", "Quality Time": "20%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "45%" } },
    { "npm": "2306208076", "name": "Alya Safira", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2206082533", "name": "Siti Aminah", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "50%", "Acts of Service": "15%", "Receiving Gifts": "15%", "Physical Touch": "0%" } },
    { "npm": "2306230975", "name": "Fauzan Ramadhan", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "30%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "10%" } },
    { "npm": "2306161985", "name": "Annisa Putri", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "35%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2406359052", "name": "Rizki Aditya", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "40%", "Quality Time": "25%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306161732", "name": "Nadia Putri", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "30%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "0%" } },
    { "npm": "2306214245", "name": "Farhan Maulana", "major": "Statistika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "20%", "Quality Time": "15%", "Acts of Service": "10%", "Receiving Gifts": "5%", "Physical Touch": "50%" } },
    { "npm": "2306208031", "name": "Siti Nurhaliza", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "35%", "Acts of Service": "25%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2406358371", "name": "Bagas Saputra", "major": "Matematika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "30%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "10%" } },
    { "npm": "2306230874", "name": "Dinda Putri", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "15%", "Physical Touch": "0%" } },
    { "npm": "2306230981", "name": "Aditya Pratama", "major": "Matematika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "20%", "Quality Time": "20%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "40%" } },
    { "npm": "2406359146", "name": "Rini Anggraini", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "15%", "Physical Touch": "0%" } },
    { "npm": "2306214150", "name": "Siti Aisyah", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "35%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2306154134", "name": "Rizky Ramadhan", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "25%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "10%" } },
    { "npm": "2406359260", "name": "Putri Ayu", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2206082735", "name": "Fajar Hidayat", "major": "Statistika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "20%", "Quality Time": "25%", "Acts of Service": "40%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2206030913", "name": "Fadhil Pratama", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "35%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2406357482", "name": "Siti Nurul", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2206081511", "name": "Rizky Hidayat", "major": "Statistika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "15%", "Quality Time": "20%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "45%" } },
    { "npm": "2306214472", "name": "Nadia Safira", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306230924", "name": "Aditya Nugraha", "major": "Aktuaria", "type": "Acts of Service", "percentages": { "Words of Affirmation": "20%", "Quality Time": "25%", "Acts of Service": "35%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2306211016", "name": "Muhammad Fadli", "major": "Matematika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "25%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "10%" } },
    { "npm": "2406359033", "name": "Rizky Saputra", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "45%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306220781", "name": "Siti Rahma", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "35%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2306214226", "name": "Farhan Saputra", "major": "Aktuaria", "type": "Physical Touch", "percentages": { "Words of Affirmation": "20%", "Quality Time": "15%", "Acts of Service": "10%", "Receiving Gifts": "5%", "Physical Touch": "50%" } },
    { "npm": "2306224312", "name": "Nabilah Safira", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2406358384", "name": "Bagas Pratama", "major": "Statistika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "30%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "10%" } },
    { "npm": "2406359152", "name": "Rini Safira", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306211035", "name": "Muhammad Rizky", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "20%", "Quality Time": "25%", "Acts of Service": "40%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2206082546", "name": "Siti Fatimah", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "50%", "Acts of Service": "15%", "Receiving Gifts": "15%", "Physical Touch": "0%" } },
    { "npm": "2406359273", "name": "Putri Safira", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306230994", "name": "Fauzan Saputra", "major": "Aktuaria", "type": "Physical Touch", "percentages": { "Words of Affirmation": "15%", "Quality Time": "20%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "45%" } },
    { "npm": "2306161991", "name": "Annisa Rahma", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2406359065", "name": "Rizky Nugraha", "major": "Statistika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "20%", "Quality Time": "25%", "Acts of Service": "40%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306227661", "name": "Raditya Pratama", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "35%", "Acts of Service": "20%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2206030926", "name": "Fadhil Nugraha", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "35%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2406357495", "name": "Siti Rahayu", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2206081524", "name": "Rizky Maulana", "major": "Aktuaria", "type": "Physical Touch", "percentages": { "Words of Affirmation": "15%", "Quality Time": "20%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "45%" } },
    { "npm": "2306214466", "name": "Nadia Rahma", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306230930", "name": "Aditya Saputra", "major": "Statistika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "20%", "Quality Time": "25%", "Acts of Service": "35%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2306211041", "name": "Muhammad Fajar", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "25%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "10%" } },
    { "npm": "2406359027", "name": "Rizky Ananda", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "45%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306220775", "name": "Siti Zahra", "major": "Statistika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "35%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2306214232", "name": "Farhan Pratama", "major": "Aktuaria", "type": "Physical Touch", "percentages": { "Words of Affirmation": "20%", "Quality Time": "15%", "Acts of Service": "10%", "Receiving Gifts": "5%", "Physical Touch": "50%" } },
    { "npm": "2306224306", "name": "Nabilah Rahma", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2406358359", "name": "Bagas Nugraha", "major": "Statistika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "30%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "10%" } },
    { "npm": "2406359165", "name": "Rini Rahma", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306211054", "name": "Muhammad Aditya", "major": "Matematika", "type": "Acts of Service", "percentages": { "Words of Affirmation": "20%", "Quality Time": "25%", "Acts of Service": "40%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2206082552", "name": "Siti Aulia", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "50%", "Acts of Service": "15%", "Receiving Gifts": "15%", "Physical Touch": "0%" } },
    { "npm": "2406359254", "name": "Putri Rahma", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306230962", "name": "Fauzan Pratama", "major": "Matematika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "15%", "Quality Time": "20%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "45%" } },
    { "npm": "2306161972", "name": "Annisa Safira", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2406359014", "name": "Rizky Pratama", "major": "Aktuaria", "type": "Acts of Service", "percentages": { "Words of Affirmation": "20%", "Quality Time": "25%", "Acts of Service": "40%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306227642", "name": "Raditya Nugraha", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "35%", "Acts of Service": "20%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2206030932", "name": "Fadhil Maulana", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "35%", "Acts of Service": "25%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2406357463", "name": "Siti Rahmawati", "major": "Aktuaria", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2206081530", "name": "Rizky Saputra", "major": "Matematika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "15%", "Quality Time": "20%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "45%" } },
    { "npm": "2306214453", "name": "Nadia Aulia", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306230943", "name": "Aditya Maulana", "major": "Aktuaria", "type": "Acts of Service", "percentages": { "Words of Affirmation": "20%", "Quality Time": "25%", "Acts of Service": "35%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2306211060", "name": "Muhammad Rizky", "major": "Matematika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "25%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "10%" } },
    { "npm": "2406359001", "name": "Rizky Ramadhan", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "45%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2306220762", "name": "Siti Nurjanah", "major": "Aktuaria", "type": "Acts of Service", "percentages": { "Words of Affirmation": "25%", "Quality Time": "20%", "Acts of Service": "35%", "Receiving Gifts": "15%", "Physical Touch": "5%" } },
    { "npm": "2306214213", "name": "Farhan Nugraha", "major": "Matematika", "type": "Physical Touch", "percentages": { "Words of Affirmation": "20%", "Quality Time": "15%", "Acts of Service": "10%", "Receiving Gifts": "5%", "Physical Touch": "50%" } },
    { "npm": "2306224293", "name": "Nabilah Aulia", "major": "Statistika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "40%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2406358346", "name": "Bagas Maulana", "major": "Aktuaria", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "35%", "Quality Time": "30%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "10%" } },
    { "npm": "2406359171", "name": "Rini Aulia", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "25%", "Quality Time": "45%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2506640736", "name": "Arriza Hadiny", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "20%", "Quality Time": "60%", "Acts of Service": "15%", "Receiving Gifts": "5%", "Physical Touch": "0%" } },
    { "npm": "2506642792", "name": "Najmi Shafiyya", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "15%", "Quality Time": "50%", "Acts of Service": "25%", "Receiving Gifts": "10%", "Physical Touch": "0%" } },
    { "npm": "2406402990", "name": "Naura Faiza Purnomoputri", "major": "Aktuaria", "type": "Acts of Service", "percentages": { "Words of Affirmation": "5%", "Quality Time": "15%", "Acts of Service": "45%", "Receiving Gifts": "5%", "Physical Touch": "30%" } },
    { "npm": "2406405153", "name": "Saefudin Ilham", "major": "Matematika", "type": "Quality Time", "percentages": { "Words of Affirmation": "0%", "Quality Time": "100%", "Acts of Service": "0%", "Receiving Gifts": "0%", "Physical Touch": "0%" } },
    { "npm": "2506641120", "name": "Darian Muhammad Raihan", "major": "Matematika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "45%", "Quality Time": "25%", "Acts of Service": "15%", "Receiving Gifts": "10%", "Physical Touch": "5%" } },
    { "npm": "2406439753", "name": "Ratu Ayunda Chelsea", "major": "Matematika", "type": "Words of Affirmation", "percentages": { "Words of Affirmation": "55%", "Quality Time": "15%", "Acts of Service": "20%", "Receiving Gifts": "10%", "Physical Touch": "0%" } }
];

// --- LOGIC ---
const searchBtn = document.getElementById('searchBtn');
const npmInput = document.getElementById('npmInput');
const resultContainer = document.getElementById('resultContainer');
const dashboardContainer = document.getElementById('dashboardContainer');

// Init Dashboard on Load
document.addEventListener('DOMContentLoaded', renderDashboard);
searchBtn.addEventListener('click', findStudent);
npmInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') findStudent(); });

function findStudent() {
    // 1. Ambil input dan bersihkan spasi di awal/akhir
    const inputNpm = npmInput.value.trim();
    
    // 2. Bersihkan container hasil
    resultContainer.innerHTML = '';

    if (!inputNpm) {
        alert("Mohon masukkan NPM!");
        return;
    }

    // 3. LOGIC BARU: Pencarian yang lebih fleksibel
    // Kita pastikan data NPM di database & input sama-sama dianggap String
    const student = students.find(s => String(s.npm).trim() === String(inputNpm));

    if (student) {
        // --- KODE SAMA SEPERTI SEBELUMNYA ---
        // Gunakan logika fallback jika tipe love language tidak persis sama huruf besar/kecilnya
        let typeKey = student.type;
        // Cek apakah key ada di llData, jika tidak, cari yang mirip atau default
        if (!llData[typeKey]) {
            // Coba cari case-insensitive
            const foundKey = Object.keys(llData).find(k => k.toLowerCase() === typeKey.toLowerCase());
            typeKey = foundKey || "Quality Time"; // Default ke Quality Time jika error
        }

        const content = llData[typeKey]; 
        
        // Generate Progress Bars
        const percentagesHTML = Object.entries(student.percentages).map(([key, val]) => `
            <div class="progress-item">
                <div class="progress-label">
                    <span>${key}</span>
                    <span>${val}</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${val}; background-color: var(--primary-color);"></div>
                </div>
            </div>
        `).join('');

        // Generate Details
        const needsList = content.needs.map(item => `<li>${item}</li>`).join('');
        const recList = content.recommendations.map(item => `<li>${item}</li>`).join('');

        resultContainer.innerHTML = `
            <div class="card">
                <div class="student-info">
                    <h2>${student.name}</h2>
                    <span class="major">${student.major}</span>
                </div>
                
                <h2 class="ll-title">${content.title}</h2>
                <p style="text-align:center; color:#666; margin-bottom:20px;">Dominant Love Language</p>

                <div class="progress-section">
                    ${percentagesHTML}
                </div>

                <div class="section-block">
                    <h3>Gambaran Umum</h3>
                    <p>${content.overview}</p>
                </div>

                <div class="section-block">
                    <h3>Yang Kamu Butuhkan</h3>
                    <ul>${needsList}</ul>
                </div>

                <div class="section-block">
                    <h3>Rekomendasi</h3>
                    <ul>${recList}</ul>
                </div>
            </div>
        `;
        
        // Fitur Tambahan: Scroll otomatis ke hasil (bagus untuk HP)
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } else {
        resultContainer.innerHTML = `<p class="error-msg">NPM <strong>${inputNpm}</strong> tidak ditemukan. Coba periksa kembali.</p>`;
    }
}

function renderDashboard() {
    // 1. Group Data by Major and Love Language
    const stats = {};
    
    students.forEach(s => {
        if (!stats[s.major]) stats[s.major] = {};
        if (!stats[s.major][s.type]) stats[s.major][s.type] = 0;
        stats[s.major][s.type]++;
    });

    // 2. Build HTML Grid
    let html = '<h2 class="dashboard-title">📊 Statistik Love Language per Jurusan</h2><div class="stats-grid">';
    
    for (const [major, counts] of Object.entries(stats)) {
        // Sort counts: Highest first
        const sortedCounts = Object.entries(counts).sort((a,b) => b[1] - a[1]);
        const topLL = sortedCounts[0]; 

        const listItems = sortedCounts.slice(1, 4).map(item => 
            `<li>${item[0]}: <strong>${item[1]}</strong></li>`
        ).join('');

        html += `
            <div class="stat-card">
                <h3>${major}</h3>
                <div class="stat-highlight">
                    <span>Dominan:</span>
                    <strong>${topLL[0]}</strong>
                    <span class="count">(${topLL[1]} mahasiswa)</span>
                </div>
                <ul class="stat-list">
                    ${listItems}
                </ul>
            </div>
        `;
    }
    html += '</div>';
    dashboardContainer.innerHTML = html;

}
