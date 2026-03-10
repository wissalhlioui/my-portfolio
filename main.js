

/*========Navbar scroll=======*/
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


/*======================*/
const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
if(menu && navLinks)
menu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

/*======Typing Animation========*/
document.addEventListener("DOMContentLoaded", () => {
  const textEl = document.querySelector(".text-typed");
  const phrases = [
    "Electronics Engineer",
  ];

  let idxPhrase = 0;
  let idxChar = 0;

  function typePhrase() {
    if (idxChar < phrases[idxPhrase].length) {
        textEl.textContent += phrases[idxPhrase][idxChar];
        idxChar++;
        setTimeout(typePhrase, 100);
    } else {
        setTimeout(erasePhrase, 1500);
    }
  }

  function erasePhrase() {
    if (idxChar > 0) {
        textEl.textContent = phrases[idxPhrase].slice(0, idxChar - 1);
        idxChar--;
        setTimeout(erasePhrase, 50);
    } else {
        idxPhrase = (idxPhrase + 1) % phrases.length;
        setTimeout(typePhrase, 500);
    }
  }

  typePhrase();
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        // Animation sections
        document.querySelectorAll('.section-animate').forEach(sec => {
            sec.classList.remove('active');
        });

        if(target){
            target.classList.add('active');

            target.scrollIntoView({
                behavior: "smooth"
            });

            setTimeout(() => {
                target.classList.remove('active');
            }, 1000);
        }
    });
});
