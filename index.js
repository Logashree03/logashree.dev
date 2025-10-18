function openImage(imgSrc) {
  document.getElementById("imageModal").style.display = "block";
  document.getElementById("modalImg").src = imgSrc;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

// for Word Animation 
let i = 0;

const randomizeText = () => {
  const phrase = document.querySelector('.random-word');
  const compStyles = window.getComputedStyle(phrase);
  const animation = compStyles.getPropertyValue('animation');
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  
  const phrases = ['Font-End Developer', 'WordPress Front-End Developer',, 'Web Designer','Full Stack Web Developer','Font-End Developer', 'WordPress Front-End Developer', 'Web Designer','Full Stack Web Developer','Font-End Developer', 'WordPress Front-End Developer', 'Web Designer','Full Stack Web Developer',
    'Font-End Developer', 'WordPress Front-End Developer', 'Web Designer','Full Stack Web Developer','Font-End Developer', 'WordPress Front-End Developer', 'Web Designer','Full Stack Web Developer'];
  
  i = randomNum(i, phrases.length);
  const newPhrase = phrases[i];
  
  setTimeout(() => {
    phrase.textContent = newPhrase;
  }, 400); // time to allow opacity to hit 0 before changing word
}

const randomNum = (num, max) => {
  let j = Math.floor(Math.random() * max);
  
  // ensure diff num every time
  if (num === j) {
    return randomNum(i, max);
  } else {
    return j;
  }
}

const getAnimationTime = () => {
  const phrase = document.querySelector('.random-word');
  const compStyles = window.getComputedStyle(phrase);
  let animation = compStyles.getPropertyValue('animation');
  
  // firefox support for non-shorthand property
  animation != "" ? animation : animation = compStyles.getPropertyValue('-moz-animation-duration');
  
    // webkit support for non-shorthand property
  animation != "" ? animation : animation = compStyles.getPropertyValue('-webkit-animation-duration');
  
  
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  return animationTime;
}

randomizeText();
setInterval(randomizeText, getAnimationTime());

// --------End for Word Animation --------

// for backgorund
particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#72f6f2" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 1.5, direction: "none", out_mode: "out" }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });

