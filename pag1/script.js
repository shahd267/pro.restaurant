// ===== سكرول ناعم عند الضغط على روابط التنقل =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== تأكيد عند إرسال الفورم =====
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // يمنع الإرسال الحقيقي للفورم
  alert("Thank you! Your message has been received.");
  form.reset(); // إعادة تعيين الحقول
});


window.addEventListener("DOMContentLoaded", function () {
  const toast = document.getElementById("welcome-message");

  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 400); // ننتظر انتهاء الـ animation
  }, 4000); // تختفي بعد 4 ثواني
});
