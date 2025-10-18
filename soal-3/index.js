"use strict";

function findMissingNumbers(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input harus berupa array dengan minimal 1 elemen");
  }

  let min = Infinity;
  let max = -Infinity;
  const seen = new Set();

  for (const value of numbers) {
    if (!Number.isInteger(value)) {
      throw new Error("Semua elemen array harus berupa bilangan bulat");
    }
    if (value < min) min = value;
    if (value > max) max = value;
    seen.add(value);
  }

  const missingList = [];
  for (let v = min; v <= max; v++) {
    if (!seen.has(v)) missingList.push(v);
  }

  return missingList;
}

module.exports = { findMissingNumbers };

if (require.main === module) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const numbers = [];

  function ask(q) {
    return new Promise((resolve) => rl.question(q, resolve));
  }

  async function loop() {
    console.log(
      "Mode interaktif: masukkan angka untuk membentuk array, lalu hitung."
    );
    while (true) {
      console.log(`\nArray saat ini: [${numbers.join(", ")}]`);
      console.log("1. Tambah input");
      console.log("2. Hitung outputnya");
      const choice = (await ask("Pilih (1/2): ")).trim();

      if (choice === "1") {
        const s = (await ask("Masukkan angka (bilangan bulat): ")).trim();
        const n = Number(s);
        if (!Number.isInteger(n)) {
          console.log("Input tidak valid. Masukkan bilangan bulat.");
          continue;
        }
        numbers.push(n);
      } else if (choice === "2") {
        if (numbers.length < 2) {
          console.log("Minimal 2 angka diperlukan untuk menghitung.");
          continue;
        }
        try {
          const list = findMissingNumbers(numbers);
          if (list.length === 0) {
            console.log(
              "\nTidak ada angka yang hilang dalam rentang saat ini."
            );
          } else {
            console.log(
              `\nOutput (angka-angka yang hilang): ${list.join(", ")}`
            );
          }
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
        rl.close();
        break;
      } else {
        console.log("Pilihan tidak dikenal. Pilih 1 atau 2.");
      }
    }
  }

  loop();
}
