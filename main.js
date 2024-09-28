// Menghitung Luas
var sisi = prompt('Masukan sisi');
var luas = sisi * sisi;
console.log('Luas persegi adalah ' + luas);

// Menghitung Keliling Lingkaran
var diagmram = prompt('Masukan angka');
var keliling = 3.14 * diagmram;
console.log('Keliling lingkaran adalah ' + keliling);

// Menghitung persegi panjang
var panjang = prompt('Masukan panjang');
var lebar = prompt('Masukan lebar');
var luas = panjang * lebar;
console.log('Luas persegi panjang adalah ' + luas);

// Menghitung Volume Kubus
var sisi = prompt('Masukan sisi');
var volume = sisi * sisi * sisi;
console.log('Volume kubus adalah ' + volume);

// Menghitung umur
var tahunLahir = prompt('Masukan tahun lahir');
const tahunSekarang = 2024;
var usia = tahunSekarang - tahunLahir;
console.log('Usia anda saat ini adalah ' + usia);

// Menampilkan suhu dalam Fahrenheit
var nama = prompt('Masukan nama anda');
var suhuCelc = prompt('Masukan suhu dalam celcius');

var fahrenheit = (suhuCelc * 9) / 5 + 32;
alert('Halo ' + nama + ' suhu anda dalam Fahrenheit adalah ' + fahrenheit);
console.log('Halo ' + nama + ' suhu anda dalam Fahrenheit adalah ' + fahrenheit);

// Menghitung uang kembalian
function hitungKembalian(jumlahTelur, totalBayar, uangDiBayarkan) {
  let hargaPerKG = 28000;
  let totalHarga = jumlahTelur * hargaPerKG;
  let uangKembalian = uangDiBayarkan - totalBayar;
  return { totalHarga, uangKembalian };
}

let jumlahTelur = 2.5;
let totalBayar = 70000;
let uangDiBayarkan = 100000;
let hasil = hitungKembalian(jumlahTelur, totalBayar, uangDiBayarkan);

console.log('Jumlah Telur (kg) : ' + jumlahTelur);
console.log('Total Bayar : ' + totalBayar);
console.log('Uang yang dibayarkan : ' + uangDiBayarkan);
console.log('Uang kembalian : ' + hasil.uangKembalian);
