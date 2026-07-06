// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "septi" && password === "septi") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang Septi",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {

createLove();

celebrate();
});
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Coba cek lagi username sama passwordnya ya:)",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}

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

// ===================== LOADER =====================

const loader = document.getElementById("loader");

const progressBar = document.getElementById("progress-bar");

const loadingText = document.getElementById("loading-text");

let progress = 0;

const loadingMessages = [

"lagi loading...",
  "lagi nyiapin kejutan...",
  "lagi bungkus kado...",
  "bentar lagi siap...",
  "selamat datang ❤️"

];

const interval = setInterval(() => {

progress++;

progressBar.style.width = progress + "%";

if(progress < 20){

loadingText.innerHTML = loadingMessages[0];

}

else if(progress < 45){

loadingText.innerHTML = loadingMessages[1];

}

else if(progress < 70){

loadingText.innerHTML = loadingMessages[2];

}

else if(progress < 95){

loadingText.innerHTML = loadingMessages[3];

}

else{

loadingText.innerHTML = loadingMessages[4];

}

if(progress >=100){

clearInterval(interval);

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

}

},30);

const card = document.querySelector(".login_form");

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

card.style.setProperty("--x",(e.clientX-rect.left)+"px");

card.style.setProperty("--y",(e.clientY-rect.top)+"px");

});

const btn=document.getElementById("loginBtn");

btn.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

ripple.classList.add("ripple");

const rect=btn.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";

ripple.style.top=(e.clientY-rect.top)+"px";

btn.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

function createLove(){

for(let i=0;i<25;i++){

const love=document.createElement("div");

love.className="love";

love.innerHTML="❤️";

love.style.left=Math.random()*100+"vw";

love.style.top="100vh";

love.style.animationDuration=(1+Math.random()*2)+"s";

love.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(love);

setTimeout(()=>{

love.remove();

},3000);

}

}

function celebrate(){

const duration=1800;

const animationEnd=Date.now()+duration;

const defaults={

startVelocity:30,

spread:360,

ticks:60,

zIndex:1000

};

function randomInRange(min,max){

return Math.random()*(max-min)+min;

}

const interval=setInterval(function(){

const timeLeft=animationEnd-Date.now();

if(timeLeft<=0){

clearInterval(interval);

document.getElementById("transition-screen").style.opacity=1;

setTimeout(()=>{

window.location.href="birthday.html";

},900);

return;

}

const particleCount=50*timeLeft/duration;

confetti(Object.assign({},defaults,{

particleCount,

origin:{

x:randomInRange(0.1,0.3),

y:Math.random()-0.2

}

}));

confetti(Object.assign({},defaults,{

particleCount,

origin:{

x:randomInRange(0.7,0.9),

y:Math.random()-0.2

}

}));

},250);

}