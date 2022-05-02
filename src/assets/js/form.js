import'../sass/style.scss';
import '../sass/form.scss';

const form = document.querySelector("form");
const errorElement = document.querySelector("#errors");
let errors = [];

form.addEventListener("submit", async event => {    
  //stop le refraiche page
  event.preventDefault();
  const formData = new FormData(form);
  const article = Object.fromEntries(formData.entries());
  if (formIsValid(article)) {
    const json = JSON.stringify(article);
    // Nous ferons la requête ici !
  }
});

const formIsValid = article => {
    errors = [];
    if (!article.author || !article.category || !article.content) {
      errors.push("Vous devez renseigner tous les champs");
    }
    if (article.content.length < 20) {
      errors.push("Le contenu de votre article est trop court !");
    }
    if (errors.length) {
      let errorHTML = "";
      errors.forEach(e => {
        errorHTML += `<li>${e}</li>`;
      });
      errorElement.innerHTML = errorHTML;
      return false;
    } else {
      errorElement.innerHTML = "";
      return true;
    }
};