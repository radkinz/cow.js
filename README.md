# cows.js
`Cows.js` is a stand alone javascript library that adds random cows to the web.  

### Installation
`npm i cows.js -- save`

### JS
The setup to run `cows.js` is fairly simple. You will have to create a new instance of a `Cow`, and pass it an element id of a div or other container. The library will automatially set the css of the element you pass, so that it contains the entire webpage. This is so the cow can spawn and walk across any location. 

```html
<div id="cow"></div>

<script type="module">
//import the Snow module
import * as Cow from '/node_modules/cows.js/cow.js'

// Snow script included on the page, already.
window.onload = function () {
    var cow = new Cow.default({
        id: 'cow'
    });

    //will call the cow to walk
    cow.move();
}
</script>
```