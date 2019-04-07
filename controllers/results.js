let skCenter = document.querySelector('#skCenter')
let skLeft = document.querySelector('#skLeft')
let skRight = document.querySelector('#skRight')
let resultList = document.querySelector('#resultList')

let sk = new softKeys(skLeft, skCenter, skRight)
sk.nav()

var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("search").replace(/ /g, "+");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        let address = JSON.parse(xhttp.responseText)
        let index = 0
        for(a of address){
            // console.log(a)
            let li = document.createElement('li')
            li.setAttribute("data-lat", a.lat)
            li.setAttribute("tabindex", index)
            li.setAttribute("data-long", a.lon)
            li.classList.add("items")

            let primary = document.createElement('p')
            let road = ((a.address.road === "undefined") ? " " : a.address.road)
            let primaryText = document.createTextNode(road)
            primary.appendChild(primaryText)
            primary.classList.add('primary')

            let secoundary = document.createElement('p')
            let postCode = a.address.postcode
            let city = (("city" in a.address) ? a.address.city : (("town" in a.address) ? a.address.town : a.address.village));
            let secoundaryText = document.createTextNode(postCode+" "+city+" ("+a.address.country+")")
            secoundary.appendChild(secoundaryText)
            secoundary.classList.add('secoundary')
            
            li.appendChild(primary)
            li.appendChild(secoundary)
            resultList.appendChild(li)

            index++
        }

        let items = resultList.childNodes
        items[0].focus();
        let nav = new ArrowNavigation()
        nav.navigate();
    }
};
xhttp.open("GET", "https://nominatim.openstreetmap.org/search?q="+c+"&format=json&addressdetails=1", true);
xhttp.send()

