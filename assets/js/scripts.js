/*============================================================
  JSON
============================================================*/
const content = {
  "language": {
    "en": {
      "buttons": {
        "cornish": {
          "code": "kw",
          "text": "Cornish"
        },
        "english": {
          "code": "en",
          "text": "English"
        }
      },
      "intro": "Hi, I'm <b>Siobhan!</b><br/>I'm a professional web developer and a undergraduate BSc robotics student."
    },
    "kw": {
      "buttons": {
        "cornish": {
          "code": "kw",
          "text": "Kernewek"
        },
        "english": {
          "code": "en",
          "text": "Sowsnek"
        }
      },
      "intro": "Yew, <b>Siobhan</b> ov vy!<br/>gwias ha studhyores robotek ov vy."
    }
  }
}


/*============================================================
  Content
============================================================*/

// Variables
let currentLang = localStorage.getItem('lang');
const template = document.createElement('template');
const lang = document.querySelector('.lang');
const intro = document.querySelector('.intro');

/* Language
======================================== */
const language = localStorage.getItem('lang');

// Initialize language
if (!language) {
  localStorage.setItem("lang", "kw");
}

// Render body content
body(content.language[currentLang]);

// Change Language
let langButtons = document.querySelectorAll('.lang > button');

[].forEach.call(langButtons, el => {
  el.addEventListener('click', function() {

    currentLang = el.getAttribute('data-lang');
    localStorage.setItem('lang', el.getAttribute('data-lang'));
    console.log(`Language now set to: ${currentLang}`);

    // Clear previous content
    lang.innerHTML = '';
    intro.innerHTML = '';

    // Render content with updated language
    body(content.language[currentLang]);

    // Add active styling to current language
    // [].forEach.call(langButtons, e => {
		// 	if (e !== this) {
    //     e.classList.remove('active');
    //   }
		// });
		// this.classList.add('active');

  });
});


/* FUNCTION : Body Content
======================================== */
function body(chosenLang) {
  for (const [key, value] of Object.entries(chosenLang)) {

    // Add Buttons
    if (key == "buttons") {
      for (const v of Object.values(value)) {
        template.innerHTML = `
          <button data-lang="${v.code}">${v.text}</button>
        `;
        lang.appendChild(template.content);
      }
    }

    // Add intro
    if (key == "intro") {
      template.innerHTML = value;
      intro.appendChild(template.content);
    }

  }
}