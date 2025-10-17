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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return emailPattern.test(String(value).trim());
  }

  function validate() {
    let isValid = true;

    successMessage.hidden = true;

    const fullName = fullNameInput.value.trim();
    if (fullName.length === 0) {
      setError(fullNameInput, "Nama lengkap wajib diisi.");
      isValid = false;
    } else {
      clearError(fullNameInput);
    }

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

    const password = passwordInput.value;
    if (password.length < 8) {
      setError(passwordInput, "Password minimal 8 karakter.");
      isValid = false;
    } else {
      clearError(passwordInput);
    }

    const confirmPassword = confirmPasswordInput.value;
    if (confirmPassword !== password || confirmPassword.length === 0) {
      setError(confirmPasswordInput, "Konfirmasi password harus sama.");
      isValid = false;
    } else {
      clearError(confirmPasswordInput);
    }

    return isValid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const ok = validate();
    if (ok) {
      successMessage.hidden = false;
      successMessage.textContent = "Pendaftaran Berhasil";
      form.reset();
    }
  });

  [fullNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(
    function (el) {
      el.addEventListener("input", function () {
        clearError(el);
      });
    }
  );
});
