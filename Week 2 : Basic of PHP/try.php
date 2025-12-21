<?php

$name = "Hilmi Musyafa";
$umur = 21;
$uangKalian = 10000;
$sudahMakanBelum = false;
$Hobi = ["Membaca Buku", "Bersepeda"]; 

echo "Namaku adalah " . $name . "<br>\n";
echo "Umurku adalah " . $umur . " tahun<br>\n";
echo "Sisa uangku adalah " . $uangKalian . " rupiah<br>\n";

if ($sudahMakanBelum) {
    echo "Aku sudah makan<br>\n";
} else {
    echo "Aku belum makan<br>\n";
}

foreach ($Hobi as $index => $hobi) {
    echo "Hobiku ke " . ($index + 1) . " adalah " . $hobi . "<br>\n";
}

?>
