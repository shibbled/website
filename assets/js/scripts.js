/*============================================================
  JSON
============================================================*/
const content = {
  "language": {
    "en": {
      "buttons": {
        "cornish": "Cornish",
        "english": "English"
      },
      "intro": "Hi, I'm <b>Siobhan!</b> \nI'm a professional web developer and a undergraduate BSc robotics student."
    },
    "kw": {
      "buttons": {
        "cornish": "Kernewek",
        "english": "Sowsnek"
      },
      "intro": "Yew, <b>Siobhan!</b> ov vy!"
    }
  }
}


/*============================================================
  Content
============================================================*/

/* Language
======================================== */
const language = localStorage.getItem('lang');

// Set default language
if (!language) {
  localStorage.setItem("lang", "kw");
}



// Get Lang and add content
let currentLang = localStorage.getItem('lang');
const template = document.createElement('template');

// console.log(typeof currentLang);
// console.log(typeof content.language[currentLang]);

for (const [key, value] of Object.entries(content.language[currentLang])) {

  // Add Buttons
  if (key == "buttons") {
    const langButtons = document.querySelector('.lang');
    for (const [k, v] of Object.entries(value)) {
      template.innerHTML = `
        <button>${v}</button>
      `;
      langButtons.appendChild(template.content);
    }
  }

  // Add intro
  if (key == "intro") {
    const intro = document.querySelector('.intro');
    template.innerHTML = value;
    intro.appendChild(template.content);
  }
}


// Change Language
