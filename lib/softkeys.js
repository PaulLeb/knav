class softKeys {
    constructor(sfLeft=null, sfCenter=null, sfRight=null) {
        this.sfLeft = {
            type:sfLeft.getAttribute("data-type"),
            link:sfLeft.getAttribute("data-link")
        };
        this.sfCenter = {
            type:sfCenter.getAttribute("data-type"),
            link:sfCenter.getAttribute("data-link")
        };
        this.sfRight = {
            type:sfRight.getAttribute("data-type"),
            link:sfRight.getAttribute("data-link")
        };
    }


    nav(){
        document.addEventListener("keydown", (e)=>{
            // console.log(e.key)
            switch(e.key){
                case "SoftLeft":
                    softKeys.checkType(this.sfLeft)
                    break;

                case "Enter":
                    softKeys.checkType(this.sfCenter)
                    break;

                case "SoftRight":
                    softKeys.checkType(this.sfRight)
                    break
            }
        })
    }

    static checkType(sk){
        if(sk.type == "view"){
            softKeys.changeView(sk)
        }else if(sk.type == "panel"){

        }else if(sk.type == "custom"){

        }
    }

    static changeView(sk){
        document.location = "../views/"+sk.link
    }

    setLink(softkey, link){
        switch(softkey){
            case "center":
                this.sfCenter.link = link;
                break;
            case "left":
                this.sfLeft.link = link;
                break;
            case "right":
                this.sfRight.link = link;
                break;
        }
    }
}



