function showPage(pageId) {
    document.getElementById('startPage').classList.add('hidden');
    document.getElementById('personPage').classList.add('hidden');
    document.getElementById('hasilPage').classList.add('hidden');
    document.getElementById(pageId).classList.remove('hidden');
}

if (document.getElementById('startBtn')) {
    document.getElementById('startBtn').addEventListener('click', () => {
        const jumlahOrang = document.getElementById('jumlahOrang').value.trim();
        const durasiWaktu = document.getElementById('durasiWaktu').value.trim();

        if (!jumlahOrang || isNaN(Number(jumlahOrang)) || Number(jumlahOrang) < 1) {
            alert('Masukkan jumlah orang yang valid (minimal 1).');
            return;
        }
        localStorage.setItem('jumlahOrang', jumlahOrang);
        localStorage.setItem('durasiWaktu', durasiWaktu);
        localStorage.setItem('personInputs', JSON.stringify([]));

        showPage('personPage');
        if (typeof setupPersonPage === "function") setupPersonPage();
    });
}

function setupPersonPage() {
    let jumlahOrang = Number(localStorage.getItem('jumlahOrang') || 1);
    let personInputs = JSON.parse(localStorage.getItem('personInputs') || '[]');
    let currentPerson = personInputs.length + 1;

    if (document.getElementById('personTitle')) {
        document.getElementById('personTitle').textContent = `Person ${currentPerson}`;
    }

    let selectedClassicNew = '';
    let selectedMood = '';

    document.querySelectorAll('.classicNewBtn').forEach(btn => {
        btn.classList.remove('selected');
        btn.onclick = function() {
            selectedClassicNew = this.dataset.value;
            document.querySelectorAll('.classicNewBtn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        };
    });

    document.querySelectorAll('.moodBtn').forEach(btn => {
        btn.classList.remove('selected');
        btn.onclick = function() {
            selectedMood = this.dataset.value;
            document.querySelectorAll('.moodBtn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        };
    });

    const nextBtn = document.getElementById('nextPersonBtn');
    if (currentPerson === jumlahOrang) {
        nextBtn.textContent = 'Start Recommendation';
    } else {
        nextBtn.textContent = 'Next';
    }

    nextBtn.onclick = () => {
        const favorite = document.getElementById('favorite').value.trim();
        const inputStr = [favorite, selectedClassicNew, selectedMood].filter(Boolean).join(' | ');
        personInputs.push(inputStr);
        localStorage.setItem('personInputs', JSON.stringify(personInputs));

        if (currentPerson < jumlahOrang) {
            // Bersihkan input & setup untuk orang berikutnya
            document.getElementById('favorite').value = "";
            selectedClassicNew = '';
            selectedMood = '';
            document.querySelectorAll('.classicNewBtn').forEach(b => b.classList.remove('selected'));
            document.querySelectorAll('.moodBtn').forEach(b => b.classList.remove('selected'));
            setupPersonPage(); // Refresh judul dan state
        } else {
            const durasiWaktu = localStorage.getItem('durasiWaktu') || '';
            const gabunganInput = [personInputs.join(' || '), durasiWaktu].filter(Boolean).join(' || ');
            sendInputToApi(gabunganInput);
        }
    };

    function sendInputToApi(keyword) {
        if (!keyword) {
            alert('Input kosong!');
            return;
        }
        fetch('https://mich-movie-rekom-backend.michp.workers.dev/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ keyword })
        })
        .then(async res => {
            const text = await res.text();
            try {
                const data = JSON.parse(text);
                if (data && Object.keys(data).length > 0) {
                    localStorage.setItem('movieRecommendation', JSON.stringify(data));
                    // Ganti ke showPage, bukan window.location
                    showPage('hasilPage');
                    if (typeof renderCard === "function") renderCard();
                } else {
                    alert('Rekomendasi tidak ditemukan. Silakan coba lagi.');
                }
            } catch (e) {
                alert('Gagal parsing response dari server. Cek response backend.');
            }
        })
        .catch(err => {
            alert('Gagal mendapatkan rekomendasi. Coba lagi.');
        });
    }
}

// --- LOGIKA PERSON PAGE: Otomatis setup jika masuk ke personPage ---
if (document.getElementById('personPage')) {
    setupPersonPage();
}

// --- LOGIKA HASIL PAGE dibiarkan di file HTML sesuai contoh sebelumnya ---