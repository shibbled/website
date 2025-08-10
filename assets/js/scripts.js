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
      "intro": "Yew, <b>Siobhan</b> ov vy!"
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
    const lang = document.querySelector('.lang');
    for (const [k, v] of Object.entries(value)) {
      template.innerHTML = `
        <button data-lang="${v.code}">${v.text}</button>
      `;
      lang.appendChild(template.content);
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
const langButtons = document.querySelectorAll('.lang > button');
[].forEach.call(langButtons, el => {
  el.addEventListener('click', function() {
    localStorage.setItem('lang', el.getAttribute('data-lang'));

    // Add active styling to current language
    // [].forEach.call(langButtons, e => {
		// 	if (e !== this) {
    //     e.classList.remove('active');
    //   }
		// });
		// this.classList.add('active');

  });
});


// Refresh page after language change