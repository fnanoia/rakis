let contact = document.getElementById("contact__info");
let contactBtn = document.getElementById("contact__btn");
contactBtn.addEventListener("click", ()=>{

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(contact.innerHTML= `<button class="btn btn-dark" disabled>Enviado</button>`);
}, 3000);
})
.then(contact.innerHTML = `<div class="spinner-border" role="status">
<span class="visually-hidden">Loading...</span>
</div>`);
});