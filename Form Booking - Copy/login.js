// Simpan data pengguna yang diregistrasi
function registerAccount(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Ambil nilai dari input form
    const name = document.querySelector('input[name="name"]').value.trim();
    const username = document.querySelector('input[name="username"]').value.trim();
    const noTelp = document.querySelector('input[name="no_telp"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    // Validasi input
    if (!name || !username || !noTelp || !password) {
        alert('Semua field wajib diisi!');
        return;
    }

    if (password.length < 6) {
        alert('Password minimal harus 6 karakter!');
        return;
    }

    // Simpan data ke localStorage
    const user = {
        name,
        username,
        noTelp,
        password,
    };

    localStorage.setItem('registeredUser ', JSON.stringify(user)); // Tanpa spasi
    alert('Registrasi berhasil! Silakan login.');
    window.location.href = 'login.html'; // Redirect ke halaman login
}

// Validasi login
function ValidasiLogin() {
    let isValid = true;

    // Reset error messages
    document.getElementById('errUsername').textContent = '';
    document.getElementById('errPassword').textContent = '';

    // Get input values
    const username = document.querySelector('input[name="username"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    // Validate username
    if (!username || username.length > 20) {
        isValid = false;
        document.getElementById('errUsername').textContent = 'Username wajib diisi dan maksimal 20 karakter.';
    }

    // Validate password
    if (!password || password.length < 6) {
        isValid = false;
        document.getElementById('errPassword').textContent = 'Password wajib diisi dan minimal 6 karakter.';
    }

    return isValid; // Prevent form submission if invalid
}

// Proses login
function loginAccount(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Validasi input
    if (!ValidasiLogin()) {
        return; // Jika validasi gagal, hentikan eksekusi
    }

    // Ambil nilai dari input form
    const username = document.querySelector('input[name="username"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    // Ambil data pengguna dari localStorage
    const storedUser  = JSON.parse(localStorage.getItem('registeredUser ')); // Tanpa spasi

    if (!storedUser ) {
        alert('Belum ada akun yang terdaftar. Silakan registrasi terlebih dahulu.');
        return;
    }

    // Validasi login
    if (storedUser .username === username && storedUser .password === password) {
        alert('Login berhasil! Selamat datang, ' + storedUser .name);

        // Simpan status login ke localStorage
        localStorage.setItem('loggedInUser ', JSON.stringify(storedUser )); // Tanpa spasi

        // Redirect ke halaman utama
        window.location.href = 'index.html';
    } else {
        alert('Username atau password salah!');
    }
}

// Tambahkan event listener ke form register dan login
if (document.title === 'Register') {
    document.querySelector('form').addEventListener('submit', registerAccount);
} else if (document.title === 'Login') {
    document.querySelector('form').addEventListener('submit', loginAccount);
}

function logoutAccount() {
    // Hapus data login dari localStorage
    localStorage.removeItem('loggedInUser ');

    // Arahkan ke halaman login
    alert('Anda telah logout.');
    window.location.href = 'login.html';
}