// Birthday page scripts

// Animation GSAP timeline on load event

const typeWriter = (element, speed = 35) => {

  const text = element.dataset.text;

  element.innerHTML = "";

  element.classList.add("typing");

  let i = 0;

  const typing = setInterval(() => {

    element.innerHTML += text.charAt(i);

    i++;

    if(i >= text.length){

      clearInterval(typing);

      element.classList.remove("typing");

    }

  },speed);

};
window.addEventListener("load", () => {
 Swal.fire({
    title: "mau putar musik ga?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "iya",
    cancelButtonText: "ga",
  }).then((result) => {
    if (result.isConfirmed) {
     const music=document.querySelector(".song");

music.volume=0;

music.play();

let volume=0;

const fade=setInterval(()=>{

volume+=0.02;

music.volume=volume;

if(volume>=1){

clearInterval(fade);

}

},120);
      animationTimeline();
    } else {
      animationTimeline();
      setTimeout(() => {

const six=document.querySelector(".six");

six.style.transition="opacity .8s";

six.style.opacity="0";

},1);
    }
  });
});

const animationTimeline = () => {
  // split chars that needs  to be animted individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewY: "-15deg",
  };

  // animation timeline
  const tl = new TimelineMax();

  tl.to(".container", 0.6, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      1.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .call(() => {

const chat=document.querySelector(".hbd-chatbox");

typeWriter(chat,18);

})
    .to(
      ".fake-btn",
      0.1,
      {
        backgroundColor: "rgb(127, 206, 248)",
      },
      "+=4"
    )
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.1,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1.5"
    )
    .staggerFromTo(
      ".ballons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".profile-picture",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .call(() => {

birthdayConfetti();
fireworks();

})
    .from(
      ".wish h5",
      0.5,
      
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .call(()=>{

const wish=document.querySelector(".wish-text");

typeWriter(wish,30);

})

.call(() => {

setTimeout(() => {

gsap.to(".profile-picture",{

opacity:0,

scale:0.8,

y:-20,

duration:.8

});

},1000);

})
    .staggerTo(
      ".eight svg",
      1,
      {
        visibility: "visible",
        opacity: 0,
        scale: 60,
        repeat: 3,
        repeatDelay: 0.8,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.4,
      {
        rotation:90,
      },
      "+=0.2"
)

.to(".letter-section",0.6,{

opacity:1,

y:-40

});

  // restart animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4
    },
    size: {
      value: 4
    },
    move: {
      enable: true,
      speed: 1
    },
    line_linked: {
      enable: false
    }
  }
});

function birthdayConfetti(){

confetti({

particleCount:250,

spread:180,

origin:{y:.55}

});

}

function fireworks(){

const duration=3000;

const animationEnd=Date.now()+duration;

const interval=setInterval(()=>{

if(Date.now()>animationEnd){

clearInterval(interval);

return;

}

confetti({

particleCount:3,

angle:60,

spread:60,

origin:{x:0}

});

confetti({

particleCount:3,

angle:120,

spread:60,

origin:{x:1}

});

},150);

}

const letter = document.getElementById("openLetter");

const modal = document.getElementById("letterModal");

const close = document.getElementById("closeLetter");

const closeBottom = document.getElementById("closeLetterBottom");

letter.addEventListener("click",()=>{

modal.classList.add("show");

});

close.addEventListener("click", () => {

    modal.classList.remove("show");

    document.querySelector(".memory-section").style.display = "block";

});

closeBottom.addEventListener("click",()=>{

    modal.classList.remove("show");

    document.querySelector(".memory-section").style.display="block";

});

const photos=[

"./img/memory1.jpg",

"./img/memory2.jpg",

"./img/memory3.jpg"

];

const captions=[

"foto pertama kita bareng ❤️",
  "aku waktu botak, dan kamu masi tetep cinta ✨",
  "makasih buat setiap momennya ❤️"

];

let photoIndex=0;

const gallery=document.getElementById("galleryModal");

const image=document.getElementById("galleryImage");

const caption=document.getElementById("galleryCaption");

const counter=document.getElementById("currentPhoto");

function updateGallery(){

image.src=photos[photoIndex];

caption.innerHTML=captions[photoIndex];

counter.innerHTML=photoIndex+1;

}

document.getElementById("openGallery").onclick=()=>{

gallery.classList.add("show");

updateGallery();

};

document.getElementById("closeGallery").onclick=()=>{

    gallery.classList.remove("show");

    document.querySelector(".ending-screen").classList.add("show");

};

document.getElementById("nextPhoto").onclick=()=>{

photoIndex++;

if(photoIndex>=photos.length){

photoIndex=0;

}

updateGallery();

};

document.getElementById("prevPhoto").onclick=()=>{

photoIndex--;

if(photoIndex<0){

photoIndex=photos.length-1;

}

updateGallery();

};