let sectionheight = document.querySelector("#topsection").offsetHeight;
console.log(sectionheight);
let sectionwidth = document.querySelector("#topsection").offsetWidth;
console.log(sectionwidth);
console.log(sectionheight/sectionwidth);
let blockheight = document.querySelector(".blocks").offsetHeight;
console.log(blockheight);
let blockwidth = document.querySelector(".blocks").offsetWidth;
console.log(blockwidth);
blockheight = (sectionheight/sectionwidth*5)+"vh";
console.log(blockheight);
blockwidth = "5vh";
console.log(blockwidth);


//Background Animation
const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
  for (var i=1; i<400; i++){
    banner.innerHTML += "<div class='blocks'></div>";
        const duration = Math.random()*2;
        blocks[i].style.animationDuration = 4+duration+'s';
        blocks[i].style.animationDelay = duration+'s';
        };

//NAME ANIMATION
let elop = "{elop}";
let rightwords = " Websites for your Venture!";
nametext = document.querySelector(".nametext");
righttag = document.querySelector(".righttag");

// Printing effect
function printChar(word, rightword, g) {
  let i = 0;
  nametext.innerHTML = "";
  let id = setInterval(() => {
    if (i >= word.length) {
      deleteChar();
      clearInterval(id);
    } else {
      nametext.innerHTML += word[i];
      i++;
    }
  }, 100);
  setTimeout(()=>{
    let x = 0;
  righttag.innerHTML = "";
  let id = setInterval(() => {
    if (x >= rightword.length) {
      deleteChar();
      clearInterval(id);
    } else {
      righttag.innerHTML += rightword[x];
      x++;
    }
  }, 100);
  },1000);
}

// Deleting effect
function deleteChar() {
    setTimeout(()=>{
  let word = nametext.innerHTML;
  let i = word.length - 1;
  let id = setInterval(() => {
   if (i >= 0) {
      nametext.innerHTML = nametext.innerHTML.substring(0, nametext.innerHTML.length - 1);
      i--;
    }  
  },100);
},3500);
}

//Initializing generator
setTimeout(()=>{
printChar(elop,rightwords);
},7300);

//Chnage profile pic
setTimeout(()=>{
    let fadeinO = 0;
    setInterval(()=>{
    if (fadeinO<1){
        fadeinO +=.05
        let oldpic = "rsz_1linkedin.jpg"
        document.querySelector("#profilepic").src= oldpic;
        document.querySelector("#profilepic").style.opacity = fadeinO;
        document.querySelector("#profilepic").style.border = "8px solid rgba(7, 82, 7, 0.7)";
    }
    else if(fadein0=0){
       
    }
    },200);
},12300);


//Background to profile pic staying desired shape
let width = document.querySelector("#div1piccontainer").offsetWidth;
let picbackground = document.querySelector("#picbackground");
let profilepic = document.querySelector("#profilepic");
let profilepicwidth = profilepic.offsetWidth;

let picbackgroundwidth = picbackground.offsetWidth;
let offsett = (width-profilepicwidth)/2;
picbackground.style.marginLeft = (offsett-7) + "px";
picbackground.style.marginRight = (offsett-7) + "px";

window.addEventListener("resize", function(){
    let width = document.querySelector("#div1piccontainer").offsetWidth;
    let profilepicwidth = profilepic.offsetWidth;
    let offsett = (width-profilepicwidth)/2;
    picbackground.style.marginLeft = (offsett-7) + "px";
    picbackground.style.marginRight = (offsett-7) + "px";
});

//Navigation buttons
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

let arrow1 = document.querySelector("#arrow1");
let arrow2 = document.querySelector("#arrow2");
let arrow3 = document.querySelector("#arrow3");
let arrow4 = document.querySelector("#arrow4");

arrow1.onclick = function(){
    btn1.click();
}

arrow2.onclick = function(){
    btn2.click();
}

arrow3.onclick = function(){
    btn3.click();
}

arrow4.onclick = function(){
    btn4.click();
}

//Smooth Scrolling between pages after clicking on navigation buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});