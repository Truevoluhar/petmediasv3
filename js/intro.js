const introText = document.querySelector('.intro-text-hldr')
let besedilo = [
 {text: 'Spletni kreativci.'},
 {text: 'Spletni razvijalci.'},
 {text: 'Spletni komunikatorji.'}
]

let n = 0
let m = 0

console.log(besedilo[0].text.length)
console.log(besedilo[1].text.length)
console.log(besedilo[2].text.length)

function text() {
 if (m < besedilo.length) {
  let b = besedilo[m].text
  let length = b.length - 1
  if (n <= length) {
   setTimeout(() => {
    console.log(b[n])
    let crka = document.createElement('h3')
    if (b[n] === " ") {
    crka.classList.add('x');
    let br = document.createElement('br')
    introText.appendChild(br)
    }
    crka.innerText = b[n]
    introText.appendChild(crka)
    n++
    text()
   }, 80)
  } else if (m < 2) {
   setTimeout(() => {
   n = 0
   introText.innerHTML =""
   m++
   text()
  }, 700)
  }
 }
 }
let active = true

const x = () => {setTimeout(text, 2000)
 if (active) {
 setTimeout(() => {
   setInterval(() => {
    n = 0;
    m = 0;
    introText.innerHTML = "";
    text()
   }, 6820)
  }, 2000);}
  else {
   n = 0
   m = 0
   introText.innerHTML = ""
  }
 }
x()

window.addEventListener('visibilitychange', () => {
 if (document.hidden) {
  location.reload()
 }
 else {
  location.reload()
 }
})

// binary animation //


