function registerAccount(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const username = document.querySelector('input[name="username"]').value.trim();
    const noTelp = document.querySelector('input[name="no_telp"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (!name || !username || !noTelp || !password) {
        alert('Semua field wajib diisi!');
        return;
    }

    if (password.length < 6) {
        alert('Password minimal harus 6 karakter!');
        return;
    }

    const user = { name, username, noTelp, password };

    // Simpan data pengguna ke localStorage
    localStorage.setItem('registeredUser', JSON.stringify(user));
    alert('Registrasi berhasil! Silakan login.');
    window.location.href = 'login.html';
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
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (!username || !password) {
        alert('Username dan password wajib diisi!');
        return;
    }

    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!storedUser) {
        alert('Belum ada akun yang terdaftar. Silakan registrasi terlebih dahulu.');
        return;
    }

    if (storedUser.username === username && storedUser.password === password) {
        alert('Login berhasil! Selamat datang, ' + storedUser.name);
        localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
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
