document.getElementById("btn").onclick = function () {
  alert("اشتغل 🔥");
};
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    alert("تم إرسال الرسالة بنجاح!");
    form.reset();
});
