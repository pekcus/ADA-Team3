/* ***** ADA H&M Dress-Up Drag & Drop Script ***** */

/*  ***** Transparent Images *****
    The following code (commented out) is a quick example of how the replace-color
    library would take the background colour of an image and make it transparent.
    Selected image links could be passed to the script, which could then loop through
    the array of links, make them all transparent, and make a new array of transparent images
    to use with the drag-and-drop!
*/
/*
var items = [];
var links = [
    "https://lp2.hm.com/hmgoepprod?set=source[/6f/f8/6ff859537c7b0748d9211f40769a6b7b3655baa7.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=source[/5d/96/5d962335366fe48afcaa488394b49bd6c0dcbb01.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=source[/b8/ed/b8ed5fbcd1909c99f964b77411aebf1c0ef99d19.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]"
];

import replaceColor from 'replace-color';

replaceColor({
  image: links[0],
  colors: {
    type: 'hex',
    targetColor: '#F1F1F1',
    replaceColor: '#00000000'
  },
  deltaE: 10
})
image('./output.png', 100, 100);
*/

/* Set-Up: Draggable Images */	
var item = null
/* Select Item */
cX = 0
document.querySelectorAll(".draggable").forEach(function (element) {
    element.addEventListener("mousedown", selectItem)
	element.style.left = 40 + cX + "px"
	element.style.top = 60 + "px"
	cX += 40
})
function selectItem(event) {
    item = event.target
    item.style.zIndex = 1
    document.querySelectorAll(".draggable").forEach(function (element) {
        element.style.zIndex -= 1
    })
}
/* Deselect Item */
document.addEventListener("mouseup", function () {
    item = null
})
/* Move Item */
document.addEventListener("mousemove", function (event) {
    if (item) {
		rect = item.getBoundingClientRect()
        item.style.left = (event.clientX -(rect.width)/2) + "px"
        item.style.top = (event.clientY -(rect.height)/2) + "px"
        
    }
})