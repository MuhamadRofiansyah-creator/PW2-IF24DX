import React from 'react'
import styles from './mahasiswa.module.css'

export default function page() {
//buat variabel (ts)
const jurusan = "Informatika";
const angkatan = 2024;
//angkatan = "2025";

// Template literal
  const jurusan_informatika = `Jurusan ${jurusan} Teknokrat`;

  // let → nilainya bisa berubah
  let fakultas = "";

  fakultas = "ftik";
  fakultas = "feb";
  fakultas = "fsip";

  // let informasi = "";  
  // if (angkatan === "2024") {
  //   informasi = "Ya";
  // }
  // else
  // {
  //   informasi = "Tidak";
  // }

  //ternary operator
  const informasi = angkatan === 2024 ? "Ya" : "Tidak";
  return (
    <>
      <div>
        <div>
            <div className="judul garis">Halaman Mahasiswa</div>
            <div className={styles["judul-satu"]}>{jurusan_informatika}</div>
            <div className={`${styles.sub_judul} ${styles.garis}`}> Angkatan: {angkatan}</div>
            <div>Fakultas: {fakultas}</div>
            <div>Informasi: {informasi}</div>
        </div>

        <div>
            <div className="m-20 bg-red-500">Halaman Mahasiswa</div>
        </div>

        </div>

        <button className="bg-red-700 border-4 border-amber-500 border border-amber-500 rounded-full w-56 py-">Login</button>
    </>
  );
}