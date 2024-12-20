function validateForm() {
    // Mengambil elemen form
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const time = document.getElementById("time");
    const destination = document.getElementById("destination");
    const ticketCount = document.getElementById("ticketCount");

    // Mengambil elemen error
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const timeError = document.getElementById("timeError");
    const destinationError = document.getElementById("destinationError");
    const ticketCountError = document.getElementById("ticketCountError");

    // Mengambil elemen output
    const formOutput = document.getElementById("formOutput");

    // Reset error dan validasi status
    let isValid = true;
    [nameError, emailError, timeError, destinationError, ticketCountError].forEach((error) => {
        error.textContent = "";
    });
    [name, email, time, destination, ticketCount].forEach((field) => {
        field.classList.remove("invalid", "valid");
    });

    // Validasi Nama
    if (name.value.trim() === "" || name.value.length > 30) {
        nameError.textContent = "Nama harus diisi dan maksimal 30 karakter.";
        name.classList.add("invalid");
        isValid = false;
    } else {
        name.classList.add("valid");
    }

    // Validasi Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Format email tidak valid.";
        email.classList.add("invalid");
        isValid = false;
    } else {
        email.classList.add("valid");
    }

    // Validasi Jam Keberangkatan
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timePattern.test(time.value)) {
        timeError.textContent = "Jam harus dalam format HH:MM (00.00 - 23.59).";
        time.classList.add("invalid");
        isValid = false;
    } else {
        time.classList.add("valid");
    }

    // Validasi Tujuan Keberangkatan
    if (destination.value.trim() === "") {
        destinationError.textContent = "Tujuan keberangkatan harus diisi.";
        destination.classList.add("invalid");
        isValid = false;
    } else {
        destination.classList.add("valid");
    }

    // Validasi Jumlah Tiket
    const ticketValue = parseInt(ticketCount.value, 10);
    if (isNaN(ticketValue) || ticketValue < 1 || ticketValue > 10) {
        ticketCountError.textContent = "Jumlah tiket harus bilangan bulat antara 1 - 10.";
        ticketCount.classList.add("invalid");
        isValid = false;
    } else {
        ticketCount.classList.add("valid");
    }

    // Menampilkan hasil jika valid
    if (isValid) {
        formOutput.innerHTML = `
            <h3>Data Form</h3>
            <p>Nama Pelanggan: ${name.value}</p>
            <p>Email: ${email.value}</p>
            <p>Jam Keberangkatan: ${time.value}</p>
            <p>Tujuan Keberangkatan: ${destination.value}</p>
            <p>Jumlah Tiket: ${ticketCount.value}</p>
        `;
        formOutput.style.color = "green";
    } else {
        formOutput.innerHTML = "";
    }
}
