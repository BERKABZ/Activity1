import { imgfun } from "./img.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('section1')
let sec2 = document.getElementById('section2')

let obj1 = {
    title   : "Lami ya ? Ali nga on ta!!",
    par     : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eius fugit facilis odit voluptatem provident, fuga asperiores possimus perferendis deserunt perspiciatis, architecto mollitia atque! Debitis, saepe! Sint inventore incidunt sequi.",
    button  : "Contact me",
    img     : "./images/rere.png"
}

const { title, par, button, img } = obj1

let obj2 = {
    image   : "./images/Ardunio.jpg",
    desc    : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eius fugit facilis odit voluptatem provident, fuga asperiores possimus perferendis deserunt perspiciatis, architecto mollitia atque! Debitis, saepe! Sint inventore incidunt sequi.",
    button1 : "learn more",
    title2  : "PROJECT COMPLETED"
}

const { image, desc, button1, title2 } = obj2

section1.append(infofunc(title, par, button))
section1.append(imgfun(img))
section3.append(infofunc2(title2))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))