const header = document.querySelector("header")
const title = document.querySelector('title');
const excerpt = document.querySelector("#excerpt")
const profile_img = document.querySelector(".profile-img")
const names = document.querySelector("#name")
const date = document.querySelector("#date")
const animated_bgs = document.querySelector(".animated-bg")
const animated_bg_texts = document.querySelector('.animated-bg-text');


setTimeout(getData, 2500)
function getData() {
    header.innerHTML = "";
    'img src="https://source.unsplash.com/1600x900/?naturemwater"/>'
    title.innerHTML = 'google codewithrandom'
    excerpt.innerHTML = "okopkpokpokpokpokpok"
    profile_img.innerHTML = 
    'img src="https://source.unsplash.com/1600x900/?naturemwater" alt="" />'
    names.innerHTML = "CODEWITHRANDOM"
    date.innerHTML = "22jan 2021"
    animated_bgs.forEach((bg)=> bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
};  
