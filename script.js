// --- DATABASE 1: DESKRIPSI LOVE LANGUAGE (FORMAT BARU DENGAN SUB-JUDUL) ---
const llData = {
    "Words of Affirmation": {
        title: "🌟 Words of Affirmation",
        description: `
            <div style="text-align: center; font-weight: 600; margin-bottom: 25px; color: #D63384; font-size: 1.1rem;">
                Kamu adalah orang yang membutuhkan kata-kata positif dari orang terdekat untuk tetap semangat menjalani hari!
            </div>
            
            <h3 style="color: #333; font-size: 1rem; margin-bottom: 8px; border-left: 4px solid #FF8FAB; padding-left: 10px;">What You Need</h3>
            <p style="margin-bottom: 20px;">
                Kata-kata penyemangat dari orang terdekat adalah salah satu kekuatan untuk menghadapi keterpurukan kamu. Ketika kamu berhasil menyelesaikan suatu pekerjaan atau berhasil mencapai sesuatu, pujian dari teman terdekat akan membuat kamu semakin bersemangat.
            </p>

            <h3 style="color: #333; font-size: 1rem; margin-bottom: 8px; border-left: 4px solid #FF8FAB; padding-left: 10px;">Recommendation for You</h3>
            <p>
                Selalu optimis dengan kata-kata afirmatif ketika mengerjakan tugas bersama teman akan sangat mendorong semangat kamu dan orang terdekat kamu!
            </p>
        `
    },
    "Quality Time": {
        title: "⏰ Quality Time",
        description: `
            <div style="text-align: center; font-weight: 600; margin-bottom: 25px; color: #D63384; font-size: 1.1rem;">
                Kamu adalah orang yang butuh kehadiran penuh dan perhatian yang tidak terbagi dari orang terdekat dalam suatu interaksi!
            </div>

            <h3 style="color: #333; font-size: 1rem; margin-bottom: 8px; border-left: 4px solid #FF8FAB; padding-left: 10px;">What You Need</h3>
            <p style="margin-bottom: 20px;">
                Menyusun rencana bepergian dengan teman terdekat adalah salah satu sumber kesenanganmu. Tak hanya itu, sebatas obrolan santai dengan cerita kamu didengar secara saksama oleh teman terdekat akan membuat kamu merasa sangat dihargai.
            </p>

            <h3 style="color: #333; font-size: 1rem; margin-bottom: 8px; border-left: 4px solid #FF8FAB; padding-left: 10px;">Recommendation for You</h3>
            <p>
                Belajar bersama dan menyelesaikan tugas bersama teman terdekat akan sangat menyenangkan untuk kamu lakukan!
            </p>
        `
    },
    "Acts of Service": {
        title: "🤝 Acts of Service",
        description: `
            <div style="text-align: center; font-weight: 600; margin-bottom: 25px; color: #D63384; font-size: 1.1rem;">
                Kamu adalah orang yang merasa dihargai ketika ada orang terdekat yang menolong kamu saat kesulitan!
            </div>

            <h3 style="color: #333; font-size: 1rem; margin-bottom: 8px; border-left: 4px solid #FF8FAB; padding-left: 10px;">What You Need</h3>
            <p style="margin-bottom: 20px;">
                Ketika sedang kesulitan dalam belajar, kamu akan merasa sangat senang jika ada teman terdekat yang membantu menjelaskan materi kepada kamu. Begitu pun juga saat mengerjakan tugas kelompok atau project, kontribusi nyata teman yang inisiatif dan solutif akan membuat kamu merasa dihargai.
            </p>

            <h3 style="color: #333; font-size: 1rem; margin-bottom: 8px; border-left: 4px solid #FF8FAB; padding-left: 10px;">Recommendation for You</h3>
            <p>
                Usaha kamu dalam membantu teman kamu yang sedang kesulitan akan mempererat hubungan pertemanan kamu untuk jangka waktu panjang!
            </p>
        `
    },
    "Receiving Gifts": {
        title: "🎁 Receiving Gifts",
        description: `
            <div style="text-align: center; font-weight: 600; margin-bottom: 25px; color: #D63384; font-size: 1.1rem;">
                Kamu adalah orang yang merasa disayangi ketika ada orang terdekat yang memberikan hadiah atau kenangan kecil kepada kamu!
            </div>

            <h3 style="color: #333; font-size: 1rem; margin-bottom: 8px; border-left: 4px solid #FF8FAB; padding-left: 10px;">What You Need</h3>
            <p style="margin-bottom: 20px;">
                Kamu merasa senang ketika mendapat hadiah dari teman terdekat untuk disimpan dan dikenang di kemudian hari. Kejutan kecil yang disiapkan oleh teman terdekat ketika hari spesial kamu juga berkesan untuk kamu.
            </p>

            <h3 style="color: #333; font-size: 1rem; margin-bottom: 8px; border-left: 4px solid #FF8FAB; padding-left: 10px;">Recommendation for You</h3>
            <p>
                Teman terdekat kamu akan sangat senang dan termovitasi saat diberi pernak-pernik atau aksesoris oleh kamu untuk digunakan setiap hari!
            </p>
        `
    },
    "Physical Touch": {
        title: "🤍 Physical Touch",
        description: `
            <div style="text-align: center; font-weight: 600; margin-bottom: 25px; color: #D63384; font-size: 1.1rem;">
                Kamu adalah orang yang merasa disayangi ketika mendapat dukungan sentuhan fisik yang hangat dari orang terdekat!
            </div>

            <h3 style="color: #333; font-size: 1rem; margin-bottom: 8px; border-left: 4px solid #FF8FAB; padding-left: 10px;">What You Need</h3>
            <p style="margin-bottom: 20px;">
                Pelukan hangat dari orang terdekat ketika kamu sedang terpuruk adalah suatu hal yang kamu butuhkan. Ketika berhasil menyelesaikan suatu pekerjaan, tepukan bahu atau jabat tangan dari teman terdekat adalah salah satu cara kamu merasa dihargai.
            </p>

            <h3 style="color: #333; font-size: 1rem; margin-bottom: 8px; border-left: 4px solid #FF8FAB; padding-left: 10px;">Recommendation for You</h3>
            <p>
                Mungkin tidak semuanya nyaman untuk melakukan kontak fisik, tetapi sentuhan kecil seperti tos akan membuat orang sekitar kamu merasa dihargai!
            </p>
        `
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

// --- LOGIC UTAMA (FINAL RESPONSIVE) ---
const searchBtn = document.getElementById('searchBtn');
const npmInput = document.getElementById('npmInput');
const resultContainer = document.getElementById('resultContainer');
const majorTabs = document.getElementById('majorTabs');

let dashboardChart = null; 
let userPieChart = null;
let currentMajor = "";
let currentData = {};
let currentMode = "dominan"; // Lock to dominan mode only

document.addEventListener('DOMContentLoaded', () => {
    initDashboard(); 

    // --- PAGE SWITCH LOGIC ---
    const navButtons = document.querySelectorAll('.nav-btn');
    const homePage = document.getElementById('homePage');
    const finderPage = document.getElementById('finderPage');

    // ensure initial visibility: show home by default
    if (homePage && finderPage) {
        // show home initially (matches HTML default)
        homePage.style.display = 'block';
        finderPage.style.display = 'none';
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const page = btn.dataset.page;
            if (page === 'home') {
                if (homePage && finderPage) {
                    homePage.style.display = 'block';
                    finderPage.style.display = 'none';
                }
            } else {
                if (homePage && finderPage) {
                    homePage.style.display = 'none';
                    finderPage.style.display = 'block';
                }
            }
        });
    });

    // Chart is fixed to Bar only (radar removed per request)

    // --- LOGO PREVIEW / DEFAULT LOGO ---
    const logoImg1 = document.getElementById('logoImg1');
    const logoImg2 = document.getElementById('logoImg2');
    const logoUpload1 = document.getElementById('logoUpload1');
    const logoUpload2 = document.getElementById('logoUpload2');

    // Set default image for logo 1 if the file exists in project root
    try {
        if (logoImg1) {
            logoImg1.src = 'LOGO HD-removebg-preview.jpg';
            logoImg1.style.width = '100%';
            logoImg1.style.height = '100%';
            logoImg1.style.objectFit = 'contain';
        }
        if (logoImg2) {
            logoImg2.src = 'Logo Biro Variansi.png';
            logoImg2.style.width = '100%';
            logoImg2.style.height = '100%';
            logoImg2.style.objectFit = 'contain';
        }
    } catch (e) {
        // ignore if image cannot be loaded
        console.warn('Logo preview init error', e);
    }

    // When user selects a file, show preview in the placeholder
    if (logoUpload1 && logoImg1) {
        logoUpload1.addEventListener('change', (ev) => {
            const f = ev.target.files && ev.target.files[0];
            if (f) logoImg1.src = URL.createObjectURL(f);
        });
    }
    if (logoUpload2 && logoImg2) {
        logoUpload2.addEventListener('change', (ev) => {
            const f = ev.target.files && ev.target.files[0];
            if (f) logoImg2.src = URL.createObjectURL(f);
        });
    }


});

searchBtn.addEventListener('click', findStudent);
npmInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') findStudent(); });

// --- 1. FUNGSI PENCARIAN (PIE CHART RESPONSIVE) ---
// ... (Biarkan const students = [...] TETAP ADA DI SINI, JANGAN DIHAPUS) ...


// --- LOGIC UTAMA (UPDATE TAMPILAN) ---
// ... (Kode elemen DOM tetap sama) ...

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
        
        // Inject HTML
        // Perhatikan bagian ${content.description} tidak lagi dibungkus <p>
        // karena di dalam datanya sudah ada tag HTML sendiri.
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

                <div class="section-block description-text">
                    ${content.description}
                </div>
            </div>
        `;
        
        renderUserPieChart(student.percentages);
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } else {
        resultContainer.innerHTML = `<p class="error-msg">NPM <strong>${inputNpm}</strong> tidak ditemukan.</p>`;
    }
}


function renderUserPieChart(percentages) {
    const ctx = document.getElementById('userLoveChart').getContext('2d');
    const isMobile = window.innerWidth < 480; // Deteksi HP

    // Create array of {label, value} and sort by value descending
    const dataArray = Object.entries(percentages).map(([key, val]) => ({
        label: key,
        value: parseInt(val.replace('%', ''))
    })).sort((a, b) => b.value - a.value);

    const labels = dataArray.map(d => d.label);
    const dataValues = dataArray.map(d => d.value);

    // Pink shades from darkest to lightest
    const pinkShades = ['#D63384', '#E667A0', '#FF8FAB', '#FFC2D1', '#FFE7F0'];
    const backgroundColor = dataValues.map((val, idx) => pinkShades[idx % pinkShades.length]);

    if (userPieChart) userPieChart.destroy();

    userPieChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Persentase (%)',
                data: dataValues,
                backgroundColor: backgroundColor,
                borderColor: '#fff',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            indexAxis: 'y', // Horizontal bar
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        font: { size: isMobile ? 10 : 12, family: "'Poppins', sans-serif" },
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: { color: "rgba(0,0,0,0.05)" }
                },
                y: {
                    ticks: {
                        font: { size: isMobile ? 9 : 12, family: "'Poppins', sans-serif", weight: '500' },
                        padding: isMobile ? 8 : 12
                    },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.raw}%`;
                        }
                    },
                    bodyFont: { size: isMobile ? 11 : 13 },
                    padding: 10,
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }
            }
        }
    });
}

/* Animated counter helper */
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;
    const range = end - start;
    if (range === 0) { obj.textContent = end; return; }
    const increment = end > start ? 1 : -1;
    const stepTime = Math.max(Math.floor(duration / Math.abs(range)), 12);
    let current = start;
    const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) clearInterval(timer);
    }, stepTime);
}

/* Generate simple insight from data object */
function generateInsight(dataObj, majorName, mode = "dominan") {
    if (!dataObj || Object.keys(dataObj).length === 0) return 'Tidak ada data untuk menghasilkan insight.';

    let maxKey = Object.keys(dataObj).reduce((a,b) => dataObj[a] >= dataObj[b] ? a : b);
    let minKey = Object.keys(dataObj).reduce((a,b) => dataObj[a] <= dataObj[b] ? a : b);
    let maxVal = dataObj[maxKey];
    let minVal = dataObj[minKey];

    if (majorName === "Semua") {
        return `Secara keseluruhan mahasiswa Departemen Matematika FMIPA UI cenderung memiliki dominasi '<strong>${maxKey}</strong>' dengan ${maxVal} mahasiswa, sementara '<strong>${minKey}</strong>' paling sedikit dimiliki.`;
    }

    return `Mahasiswa/i jurusan ${getDisplayName(majorName)} cenderung memiliki dominasi '<strong>${maxKey}</strong>' dengan ${maxVal} mahasiswa, sementara '<strong>${minKey}</strong>' paling sedikit dimiliki.`;
}

/* Display name mapping for majors */
function getDisplayName(major) {
    const displayMap = {
        "Aktuaria": "Ilmu Aktuaria",
        "Statistika": "Statistika",
        "Matematika": "Matematika"
    };
    return displayMap[major] || major;
}

// --- 2. FUNGSI DASHBOARD (BAR CHART RESPONSIVE) ---
function initDashboard() {
    const stats = {};
    const globalStats = { "Words of Affirmation": 0, "Quality Time": 0, "Acts of Service": 0, "Receiving Gifts": 0, "Physical Touch": 0 };
    const allMajors = [];

    students.forEach(s => {
        const major = s.major;
        const type = s.type;
        
        if (!stats[major]) {
            stats[major] = { "Words of Affirmation": 0, "Quality Time": 0, "Acts of Service": 0, "Receiving Gifts": 0, "Physical Touch": 0 };
            allMajors.push(major);
        }
        
        let cleanType = Object.keys(stats[major]).find(k => k.toLowerCase() === type.toLowerCase());
        if(cleanType) {
            stats[major][cleanType]++;     
            globalStats[cleanType]++;      
        }
    });

    const uniqueMajors = [...new Set(allMajors)].sort();

    const btnGlobal = document.createElement('button');
    btnGlobal.innerText = "Semua Jurusan";
    btnGlobal.className = 'tab-btn active'; 
    btnGlobal.onclick = () => { switchTab(btnGlobal, "Semua", globalStats); };
    majorTabs.appendChild(btnGlobal);

    uniqueMajors.forEach(major => {
        const btn = document.createElement('button');
        btn.innerText = getDisplayName(major);
        btn.className = 'tab-btn';
        btn.onclick = () => { switchTab(btn, major, stats[major]); };
        majorTabs.appendChild(btn);
    });

    updateDashboardChart("Semua", globalStats);
}

function switchTab(btnElement, title, data) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    currentData = data;
    updateDashboardChart(title, data);
}

/* Error Bar Plugin for 95% Confidence Interval */


function updateDashboardChart(majorName, dataObj) {
    currentMajor = majorName;
    currentData = dataObj;

    const ctx = document.getElementById('llChart').getContext('2d');
    const isMobile = window.innerWidth < 768;
    const fontSize = isMobile ? 9 : 12;

    let labels = Object.keys(dataObj);
    let dataValues = Object.values(dataObj);
    
    const responsiveLabels = labels.map(label => {
        if (!isMobile) return label;
        if (label === "Words of Affirmation") return ["Words of", "Affirmation"];
        if (label === "Quality Time") return ["Quality", "Time"];
        if (label === "Acts of Service") return ["Acts of", "Service"];
        if (label === "Receiving Gifts") return ["Receiving", "Gifts"];
        if (label === "Physical Touch") return ["Physical", "Touch"];
        return label.split(" ");
    });
    labels = responsiveLabels;

    if (dashboardChart) dashboardChart.destroy();

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "#D63384");
    gradient.addColorStop(1, "#FF8FAB");

    dashboardChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: "Jumlah Mahasiswa",
                data: dataValues,
                backgroundColor: gradient,
                borderColor: '#FFC2D1',
                borderWidth: 2,
                borderRadius: isMobile ? 4 : 8,
                barPercentage: isMobile ? 0.7 : 0.6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { 
                    ticks: { 
                        font: { size: fontSize, family: "'Poppins', sans-serif" },
                        maxRotation: 0,
                        minRotation: 0
                    },
                    grid: { display: false }
                },
                y: { 
                    beginAtZero: true, 
                    ticks: { stepSize: 1, font: { size: fontSize } },
                    grid: { color: "rgba(0,0,0,0.05)" }
                }
            },
            plugins: {
                legend: { display: false }, 
                tooltip: {
                    titleFont: { size: 14 },
                    bodyFont: { size: 14 },
                    padding: 10
                },
                title: {
                    display: true,
                    text: `Dominan Love Language: ${majorName === "Semua" ? "Semua Jurusan" : getDisplayName(majorName)}`,
                    font: { size: isMobile ? 14 : 18, family: "'Poppins', sans-serif", weight: '600' },
                    color: '#D63384',
                    padding: { bottom: 20 }
                }
            }
        }
    });

    const insightBox = document.getElementById("insightBox");
    if (insightBox) {
        insightBox.innerHTML = `<strong>Insight:</strong> ${generateInsight(dataObj, majorName, currentMode)}`;
    }

    // Populate calculation box
    const calcDetails = generateCalculationDetails(majorName, dataObj, currentMode);
    document.getElementById("calculationBox").innerHTML = calcDetails;
}

// Auto Resize Listener (Menyesuaikan ulang saat HP diputar/layar berubah)
window.addEventListener('resize', () => {
    // Reload pie chart user jika ada data student yang sedang aktif
    const inputNpm = document.getElementById('npmInput').value.trim();
    if(inputNpm && students.find(s => s.npm === inputNpm)) {
        // Kita biarkan user mencari ulang untuk refresh pie chart agar tidak glitchy,
        // atau biarkan responsif bawaan chart.js bekerja.
    }
    
    // Reload dashboard chart
    if (currentMajor && currentData) updateDashboardChart(currentMajor, currentData);
});

/* Toggle Calculation Box */
function toggleCalculation() {
    const box = document.getElementById("calculationBox");
    const btn = document.getElementById("calcToggleBtn");
    if (box.style.display === "none") {
        box.style.display = "block";
        btn.textContent = "📊 Hide Calculation";
    } else {
        box.style.display = "none";
        btn.textContent = "📊 Show Calculation";
    }
}

/* Generate Calculation Details */
function generateCalculationDetails(majorName, dataObj, mode) {
    return generateDominanCalculation(majorName, dataObj);
}

/* Generate Dominan Mode Calculation */
function generateDominanCalculation(majorName, dataObj) {
    const total = Object.values(dataObj).reduce((a, b) => a + b, 0);
    const dominantCat = Object.keys(dataObj).reduce((a, b) => dataObj[a] > dataObj[b] ? a : b);
    const dominantCount = dataObj[dominantCat];
    const dominantPercent = ((dominantCount / total) * 100).toFixed(1);

    let html = `
        <h3>📌 Mode (Kategori Dominan)</h3>
        <div class="calculation-formula">
            Mode = kategori dengan frekuensi tertinggi
        </div>
        <p><strong>Definition:</strong> The love language preferred by most students in this group.</p>
        <div class="calculation-example">
            <strong>Distribution by category:</strong><br>
    `;

    Object.entries(dataObj).forEach(([cat, count]) => {
        const pct = ((count / total) * 100).toFixed(1);
        const highlight = cat === dominantCat ? ' <strong style="color: #D63384;">← DOMINANT</strong>' : '';
        html += `${cat}: ${count} (${pct}%)${highlight}<br>`;
    });

    html += `
            <br><strong>Result:</strong> ${dominantCat} is most preferred (${dominantCount}/${total} = ${dominantPercent}%)
        </div>
    `;

    return html;
}

// Initialize card detail buttons: toggle description and expanded state
function initCardDetails() {
    document.querySelectorAll('.card-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.simple-card');
            if (!card) return;
            const desc = card.querySelector('.card-desc');
            const expanded = card.classList.toggle('expanded');
            if (desc) desc.hidden = !expanded;
            btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            btn.textContent = expanded ? 'Close' : 'Details';
        });
    });
}

function bindFinderCta() {
    const cta = document.querySelector('.finder-cta');
    const input = document.getElementById('npmInput');
    if (!cta || !input) return;

    cta.addEventListener('click', () => {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        input.focus({ preventScroll: true });
    });
}

// Ensure handlers attach after DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initCardDetails();
        bindFinderCta();
        // Add calculation toggle button listener
        const calcBtn = document.getElementById('calcToggleBtn');
        if (calcBtn) {
            calcBtn.addEventListener('click', toggleCalculation);
        }
    });
} else {
    initCardDetails();
    bindFinderCta();
    // Add calculation toggle button listener
    const calcBtn = document.getElementById('calcToggleBtn');
    if (calcBtn) {
        calcBtn.addEventListener('click', toggleCalculation);
    }
}
