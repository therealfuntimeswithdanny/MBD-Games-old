window.addEventListener('offline', function() {
    document.getElementById('offline-popup').style.display = 'block';
});

window.addEventListener('online', function() {
    document.getElementById('offline-popup').style.display = 'none';
});

function closePopup() {
    document.getElementById('offline-popup').style.display = 'none';
}


window.addEventListener('online', function() {
    document.getElementById('online-popup1').style.display = 'block';
});

function closePopup1() {
    document.getElementById('online-popup1').style.display = 'none';
}

function myFunction() {
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("myUL");
    const li = ul.getElementsByTagName('li');
  
    for (let i = 0; i < li.length; i++) {
      const a = li[i].getElementsByTagName("a")[0];
      const txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
    });

    // Set initial mode based on user's preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }
});
// Load the Google Translate API script
function loadGoogleTranslate() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
}

// Initialize the Google Translate element
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'es',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// Add event listener to the button
document.getElementById('translateButton').addEventListener('click', function() {
    loadGoogleTranslate();
    document.getElementById('google_translate_element').style.display = 'block';
});
function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'mvcs') {
        document.getElementById('passwordPopup').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('The Admin Password You Typed Is Worng. Please try again.');
    }
}
