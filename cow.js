//create cow image
function image() {
    //dynamically add an image and set its attribute
    var img = document.createElement("img");
    img.src = "images/cow.gif"
    img.id = "picture"
    img.width = 100;
    var parent = document.getElementById("cow");
    parent.appendChild(img);

    //position img
    img.style.position = 'absolute';
    img.style.left = ((window.innerWidth-img.width)) + "px";
    img.style.top = (random(0, 600)) + "px";

    return img
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
  
var Cow = function() {
    //create image
    this.img = image();
    //get intial x pos
    this.xpos = this.img.x;

    //move function
    this.move = function() {
        requestAnimationFrame(() => this.move());
        this.xpos -= 2;
        this.img.style.left = this.xpos + "px";
    }
}