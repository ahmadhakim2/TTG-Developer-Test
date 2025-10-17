document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const successMessage = document.getElementById("successMessage");

  function setError(inputEl, message) {
    const errorId = inputEl.id + "Error";
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      errorEl.textContent = message;
    }
    inputEl.classList.add("input-error");
    inputEl.setAttribute("aria-invalid", "true");
  }

  function clearError(inputEl) {
    const errorId = inputEl.id + "Error";
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      errorEl.textContent = "";
    }
    inputEl.classList.remove("input-error");
    inputEl.removeAttribute("aria-invalid");
  }

  function isValidEmail(value) {
    // Pola sederhana yang cukup baik untuk validasi email umum
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return emailPattern.test(String(value).trim());
  }

  function validate() {
    let isValid = true;

    // Reset pesan sukses saat validasi ulang
    successMessage.hidden = true;

    // Nama lengkap (wajib diisi)
    const fullName = fullNameInput.value.trim();
    if (fullName.length === 0) {
      setError(fullNameInput, "Nama lengkap wajib diisi.");
      isValid = false;
    } else {
      clearError(fullNameInput);
    }

    // Email valid
    const email = emailInput.value.trim();
    if (email.length === 0) {
      setError(emailInput, "Email wajib diisi.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setError(emailInput, "Format email tidak valid.");
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Password minimal 8 karakter
    const password = passwordInput.value;
    if (password.length < 8) {
      setError(passwordInput, "Password minimal 8 karakter.");
      isValid = false;
    } else {
      clearError(passwordInput);
    }

    // Konfirmasi password sama
    const confirmPassword = confirmPasswordInput.value;
    if (confirmPassword !== password || confirmPassword.length === 0) {
      setError(confirmPasswordInput, "Konfirmasi password harus sama.");
      isValid = false;
    } else {
      clearError(confirmPasswordInput);
    }

    return isValid;
  }

  // Validasi saat submit
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const ok = validate();
    if (ok) {
      successMessage.hidden = false;
      successMessage.textContent = "Pendaftaran Berhasil";
      // Optional: reset form setelah sukses
      form.reset();
    }
  });

  // Validasi ringan saat pengguna mengetik
  [fullNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(
    function (el) {
      el.addEventListener("input", function () {
        // Hanya bersihkan error saat input berubah; validasi lengkap saat submit
        clearError(el);
      });
    }
  );
});
