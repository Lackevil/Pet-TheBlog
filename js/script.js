document.getElementById("burger").addEventListener("click", function() {
   document.querySelector("header").classList.toggle("active")
   document.querySelector("body").classList.toggle("overflow")
})

// let headerLink = document.getElementsByClassName("header__link")

// for (let i = 0; i < headerLink.length; i++) {
//    headerLink[i].addEventListener("click", function() {
//       document.querySelector("header").classList.remove("active")
//       document.querySelector("body").classList.remove("overflow")
//    })
// }