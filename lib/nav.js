class ArrowNavigation {

    navigate(){
        document.addEventListener('keydown', (e)=>{
            switch(e.key) {
                case 'ArrowUp':
                    ArrowNavigation.nav(-1);
                    break;
                case 'ArrowDown':
                    console.log("down !")
                    ArrowNavigation.nav(1);
                    break;
                case 'ArrowRight':
                    ArrowNavigation.nav(1);
                    break;
                case 'ArrowLeft': 
                    ArrowNavigation.nav(-1);
                    break;
            }
        });
    }
        
    static nav(move) {
        let actif = document.activeElement
        var currentIndex = parseInt(actif.getAttribute("tabIndex"))
        var next = currentIndex + move;
        currentIndex = next
        var items = document.querySelectorAll('.items');
        var targetElement = items[next];
        targetElement.focus();
    }
}