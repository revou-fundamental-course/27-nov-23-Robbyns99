function HalamanUtama() {
    document.getElementById('Utama').style.display = 'block';
    document.getElementById('Luas').style.display = 'none';
    document.getElementById('Keliling').style.display = 'none';
}

function Tampilan1() {
    document.getElementById('Utama').style.display = 'none';
    document.getElementById('Luas').style.display = 'block';
    document.getElementById('Keliling').style.display = 'none';
}

function Tampilan2() {
    document.getElementById('Utama').style.display = 'none';
    document.getElementById('Luas').style.display = 'none';
    document.getElementById('Keliling').style.display = 'block';
}

function luasSegitiga() {
    // Ambil nilai alas dan tinggi
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;


    if (alas !== "" && tinggi !== "") {
        // Hitung luas segitiga
        var luas = 0.5 * alas * tinggi;

        // Tampilkan hasil di input dengan id 'result'
        document.getElementById("L1").innerText = "Luas = 1/2 x a x t";
        document.getElementById("L2").innerText = "Luas = " + "1/2" + " x " + alas + " x " + tinggi;
        document.getElementById("L3").innerText = "Luas = " + luas;
    }
}

function kelilingSegitiga() {
    // Ambil nilai alas dan tinggi
    var sisi1 = document.getElementById('sisi1').value;
    var sisi2 = document.getElementById('sisi2').value;
    var sisi3 = document.getElementById('sisi3').value;


    if (sisi1 !== "" && sisi2 !== "" && sisi3 !== "") {
        // Hitung keliling segitiga
        var keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);

        // Tampilkan hasil di input dengan id 'result'
        document.getElementById("K1").innerText = "Keliling = S1 + S2 + S3";
        document.getElementById("K2").innerText = "Keliling = " + sisi1 + " + " + sisi2 + " + " + sisi3;
        document.getElementById("K3").innerText = "Keliling = " + keliling;
    }
}



// Fungsi Reset
function resetinput1() {
    document.getElementById('alas').value = "";
    document.getElementById('tinggi').value = "";
    document.getElementById('result').innerText = "";
    document.getElementById("L1").innerText = "";
    document.getElementById("L2").innerText = "";
    document.getElementById("L3").innerText = "";
}

function resetinput2() {
    document.getElementById('sisi1').value = "";
    document.getElementById('sisi2').value = "";
    document.getElementById('sisi3').value = "";
    document.getElementById('result').innerText = "";
    document.getElementById("K1").innerText = "";
    document.getElementById("K2").innerText = "";
    document.getElementById("K3").innerText = "";
}