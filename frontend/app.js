//css desde el JS
require('./styles/main.css');

//imagenes que voy a usar en el sitio
import "./static/avatar1.png";
import "./static/avatar2.png";
import "./static/avatar3.png";
import "./static/background.jpg";
import "./static/educativo.png";
import "./static/empresa.png";
import "./static/img1.jpg";
import "./static/img2.jpg";
import "./static/img3.jpg";
import "./static/img4.jpg";
import "./static/instagram_icon.png";
import "./static/linkedin_icon.png";
import "./static/twitter_icon.png";
import "./static/whatsapp_icon.png";

//archivo JS de User Interface
import "./UI";

//archivo JS de requests para el backend
import FormRequire from "./requests";


//eventos form submit
document.getElementById("contact__form").addEventListener("submit", function(e){
  
  e.preventDefault();

  const email = document.getElementById("email__form").value;
  const name = document.getElementById("name__form").value;


  //form js. le appendeo los datos captados en el submit
  const formData = new FormData();
  formData.append("email", email);
  formData.append("name", name);

  //modulo creado para mandar datos al backend en requests.js
  const formRequest = new FormRequire();
  formRequest.postForm(formData);

});





