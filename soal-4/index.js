"use strict";

function findExpression(numbers, target) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input harus berupa array angka");
  }
  const items = numbers.map((n) => {
    if (!Number.isFinite(n)) {
      throw new Error("Semua elemen harus berupa angka");
    }
    if (!Number.isInteger(n)) {
      throw new Error("Semua elemen harus bilangan bulat");
    }
    return { value: n, expr: String(n) };
  });

  const seen = new Set();

  function keyOf(list) {
    const vals = list
      .map((x) => x.value)
      .slice()
      .sort((a, b) => a - b);
    return vals.join(",");
  }

  function solve(list) {
    if (list.length === 1) {
      return list[0].value === target ? list[0].expr : null;
    }

    const stateKey = keyOf(list);
    if (seen.has(stateKey)) return null;
    seen.add(stateKey);

    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const a = list[i];
        const b = list[j];

        const candidates = [];
        // a + b (komutatif)
        candidates.push({
          value: a.value + b.value,
          expr: `(${a.expr} + ${b.expr})`,
        });
        // a * b (komutatif)
        candidates.push({
          value: a.value * b.value,
          expr: `(${a.expr} * ${b.expr})`,
        });
        // a - b (tidak komutatif)
        candidates.push({
          value: a.value - b.value,
          expr: `(${a.expr} - ${b.expr})`,
        });
        // b - a
        candidates.push({
          value: b.value - a.value,
          expr: `(${b.expr} - ${a.expr})`,
        });

        for (const c of candidates) {
          const next = [];
          for (let k = 0; k < list.length; k++) {
            if (k !== i && k !== j) next.push(list[k]);
          }
          next.push(c);
          const res = solve(next);
          if (res !== null) return res;
        }
      }
    }
    return null;
  }

  return solve(items);
}

module.exports = { findExpression };

// Mode interaktif: jalankan `node soal-4/index.js`
if (require.main === module) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const numbers = [];
  let target = null;

  function ask(q) {
    return new Promise((resolve) => rl.question(q, resolve));
  }

  async function loop() {
    console.log(
      "Mode interaktif: tambah angka, atur target, lalu hitung ekspresi."
    );
    while (true) {
      console.log(
        `\nAngka: [${numbers.join(", ")}]  Target: ${
          target ?? "(belum diatur)"
        }`
      );
      console.log("1. Tambah angka");
      console.log("2. Atur target");
      console.log("3. Hitung ekspresi");
      const choice = (await ask("Pilih (1/2/3): ")).trim();

      if (choice === "1") {
        const s = (await ask("Masukkan angka (bilangan bulat): ")).trim();
        const n = Number(s);
        if (!Number.isInteger(n)) {
          console.log("Input tidak valid. Masukkan bilangan bulat.");
          continue;
        }
        numbers.push(n);
      } else if (choice === "2") {
        const s = (await ask("Masukkan target (bilangan bulat): ")).trim();
        const t = Number(s);
        if (!Number.isInteger(t)) {
          console.log("Target tidak valid. Masukkan bilangan bulat.");
          continue;
        }
        target = t;
      } else if (choice === "3") {
        if (numbers.length === 0) {
          console.log("Tambahkan minimal 1 angka terlebih dahulu.");
          continue;
        }
        if (!Number.isInteger(target)) {
          console.log("Atur target terlebih dahulu.");
          continue;
        }
        try {
          const expr = findExpression(numbers, target);
          if (expr) {
            console.log(`\nEkspresi ditemukan: ${expr}`);
          } else {
            console.log("\nTidak ada ekspresi yang cocok untuk target.");
          }
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
        rl.close();
        break;
      } else {
        console.log("Pilihan tidak dikenal. Pilih 1, 2, atau 3.");
      }
    }
  }

  loop();
}
