
// Menghitung Biaya Parkir
function hitungBiayaParkir(){
    let jamMasuk = document.getElementById('jam_masuk').value
    let jamKeluar = document.getElementById('jam_keluar').value
    let lamaParkir = jamKeluar - jamMasuk
    console.log(lamaParkir)

    //Biaya 2 jam pertama
    let biayaParkir = 3000
    lamaParkir -= 2

    //hitung sisa jam
    if (lamaParkir > 0 ){
        biayaParkir = biayaParkir +(lamaParkir * 1000)
    }

    console.log(biayaParkir)
    document.getElementById('biaya_parkir').innerHTML = biayaParkir

}