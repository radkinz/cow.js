//create cow image
function image(width, id) {
    //dynamically add an image and set its attribute
    var img = document.createElement("img");
    img.src = "/assets/cow.gif";
    img.width = width;
    var parent = document.getElementById(id);
    parent.appendChild(img);

    //position img
    img.style.position = 'absolute';
    img.style.left = ((window.innerWidth - img.width)) + "px";

    //100 as a buffer
    img.style.top = random(0, (parent.clientHeight-100)) + "px";

    return img
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.loop = true;
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

var Cow = function (options) {
    //add div css for cow image
    document.getElementById(options.id).style.position = "absolute";
    document.getElementById(options.id).style.top = 0;
    document.getElementById(options.id).style.left = 0;
    document.getElementById(options.id).style.right = 0;
    document.getElementById(options.id).style.bottom = 0;
    document.getElementById(options.id).style.zIndex = 1000;
    document.getElementById(options.id).style.overflow = "hidden";

    //set width
    this.width = 100;
    //create image
    this.img = image(this.width, options.id);
    //get intial x pos
    this.xpos = this.img.x;

    //start moo sound of cow
    this.moo = new sound("/assets/moo.mp3")
    this.moo.play();

    //move function
    this.move = function () {
        requestAnimationFrame(() => this.move());
        this.xpos -= 2;
        this.img.style.left = this.xpos + "px";

        //if go offscreen move back up front with some buffer
        if (this.xpos < -this.width) {
            this.xpos = window.innerWidth;
            
            //randomize y pos
            this.img.style.top = random(0, (document.getElementById(options.id).clientHeight-100)) + "px"; 
        }
    }
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default Cow;