const form = document.getElementById('form-validasi');
const namaPelanggan = document.getElementById('nama-pelanggan');
const email = document.getElementById('email');
const jamKeberangkatan = document.getElementById('jam-keberangkatan');
const tujuanKeberangkatan = document.getElementById('tujuan-keberangkatan');
const jumlahTiket = document.getElementById('jumlah-tiket');
const hasilValidasi = document.getElementById('hasil-validasi');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const namaPelangganValue = namaPelanggan.value.trim();
    const emailValue = email.value.trim();
    const jamKeberangkatanValue = jamKeberangkatan.value.trim();
    const tujuanKeberangkatanValue = tujuanKeberangkatan.value.trim();
    const jumlahTiketValue = jumlahTiket.value.trim();

    let error = false;

    if (namaPelangganValue.length === 0 || namaPelangganValue.length > 30) {
        document.getElementById('error-nama-pelanggan').innerText = 'Nama pelanggan harus diisi dan tidak lebih dari 30 karakter';
        error = true;
    } else {
        document.getElementById('error-nama-pelanggan').innerText = '';
    }

    if (!emailValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById('error-email').innerText = 'Email harus diisi dengan format yang benar';
        error = true;
    } else {
        document.getElementById('error-email').innerText = '';
    }

    if (!jamKeberangkatanValue.match(/^([01][0-9]|2[0-3]):[0-5][0-9]$/)) {
        document.getElementById('error-jam-keberangkatan').innerText = 'Jam keberangkatan harus diisi dengan format HH.mm';
        error = true;
    } else {
        document.getElementById('error-jam-keberangkatan').innerText = '';
    }

    if (tujuanKeberangkatanValue.length === 0) {
        document.getElementById('error-tujuan-keberangkatan').innerText = '';
    }
}
)