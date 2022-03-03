/* ***** ADA H&M Dress-Up Drag & Drop Script ***** */

var items = [];
var links = [
    "https://lp2.hm.com/hmgoepprod?set=source[/6f/f8/6ff859537c7b0748d9211f40769a6b7b3655baa7.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=source[/5d/96/5d962335366fe48afcaa488394b49bd6c0dcbb01.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    "https://lp2.hm.com/hmgoepprod?set=source[/b8/ed/b8ed5fbcd1909c99f964b77411aebf1c0ef99d19.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]"
];

/*import replaceColor from 'replace-color';

replaceColor({
  image: links[0],
  colors: {
    type: 'hex',
    targetColor: '#F1F1F1',
    replaceColor: '#00000000'
  },
  deltaE: 10
})
image('./output.png', 100, 100); */
/* Set-Up: Draggable Images */	
var item = null
/* Select Item */
document.querySelectorAll(".draggable").forEach(function (element) {
    element.addEventListener("mousedown", selectItem)
})
function selectItem(event) {
    item = event.target
}
/* Deselect Item */
document.addEventListener("mouseup", function () {
    item = null
})
/* Move Item */
document.addEventListener("mousemove", function (event) {
    if (item) {
        item.style.left = event.clientX -132 + "px"
        item.style.top = event.clientY -198 + "px"
    }
})