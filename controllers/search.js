let searchInput = document.querySelector('#search')
let startSearch = document.querySelector('#startSearch')
let skCenter = document.querySelector('#skCenter')
let skLeft = document.querySelector('#skLeft')
let skRight = document.querySelector('#skRight')

searchInput.focus();
skCenter.style.display = "none";

let sk = new softKeys(skLeft, skCenter, skRight)
sk.nav()

let aNav = new ArrowNavigation();
aNav.navigate()

startSearch.addEventListener("focus", ()=>{
    skCenter.style.display = "block"
    var link = skCenter.getAttribute('data-link')
    sk.setLink("center", link+"?search="+searchInput.value)
});



// var oldLink = skCenter.getAttribute('data-link')
// searchInput.focus();
// var newLink = oldLink+"?"+

// searchInput.addEventListener('keyup', (e) => {
//     searchValue = searchInput.value;
//     // console.log(searchInput.value)
// })
