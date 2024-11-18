The website represents a new clothing brand I wuold like to start with my logos but photos are copied from the brand Im trying to take example from, 
It shows a little clothing collection and I tried to make it look professional. The goal is to show the collection in minimalistic way and 
just focus only on clothing pieces.

The mouse over effect make a lot of sense here because I added the model picture on another side of the clothing piece picture so users going through website
can see how to style that piece right away. If u click on the peace you will be able to read what is it made from and other description details.

access the DOM,

Examples of DOM Access

1. Changing Image Source on Hover
$("img").on("mouseover", function () {
    const originalSrc = this.src; // Accessing the current image source
    let imgIndex = $("img").index(this); // Finding the index of the hovered image
    const hoverSrc = `images/essentials${imgIndex}f.webp`; // Creating the new source URL

    this.src = hoverSrc; // Setting the new image source

    $(this).on("mouseout", function () {
        this.src = originalSrc; // Restoring the original source
    });
});

DOM Access:
this.src accesses the src attribute of the <img> tag.
$("img").index(this) finds the index of the hovered image in the list of all <img> elements.
$(this) wraps the native DOM element into a jQuery object for further manipulation.
2. Appending a Description Line After an Image

const createText = (event) => {
    let imgId = event.target.id; 
    console.log(imgId);
    let descriptionLine = $(`<div class="DescriptionLine">
        <div class="crud_buttons">
            <button class="view">Read</button>
        </div>
        <div class="showInfo"></div>
    </div>`);

    $(event.target).after(descriptionLine); // Appending the description line after the clicked image

    let info = $(".showInfo:eq(" + imgId + ")"); // Selecting the corresponding .showInfo div
    console.log("INFO", info);

    info.html(`${pieces[imgId]}`); // Injecting content into the .showInfo div

    info.find(".close").on("click", () => { // Adding a click event to the .close button
        setTimeout(function () {
            info.html(""); // Clearing the content of .showInfo after 1 second
        }, 1000);
    });
};

DOM Access:
event.target.id accesses the id of the clicked image.
$(event.target).after(descriptionLine) adds new HTML after the clicked image.
$(".showInfo:eq(" + imgId + ")") selects the .showInfo element corresponding to the image ID.
info.html() injects dynamic content into the selected element.



use events: 

const createText = (event) => {
    let imgId = event.target.id;
    .....
const createDescr = (event) => {
  let imgId = parseInt(event.target.id);
  ....


create content dynamically

const createText = (event) => {
    let imgId = event.target.id;
    console.log(imgId)
    
    let descriptionLine = $(`<div class="DescriptionLine">
    <div class="crud_buttons">
    <button class ="view">Read</button>
    </div>
    <div class="showInfo"></div>`);
    $(event.target).after(descriptionLine);
    let info = $(".showInfo:eq(" + imgId + ")");
    console.log("INFO", info);   
    info.html(
        `${pieces[imgId]}`
      )
}
content was created as soon as button was clicked on


add styling (using jQuery)

const $footer = $("<footer>");
$footer.html("<h2>Unleash your potential with Volya apparel</h2><p>Stay stylish with Volya's essentials.</p>");
$("body").append($footer);

here I added some styilng using Jquery, I found it much more convinient to add through style.css file, but I am able to add some styling through jquery too

  let description = $(`<h3 class="white-text">${namestr}</h3>`);

let descriptionLine = $(`<div class="DescriptionLine">
    <div class="crud_buttons">
    <button class ="view">Read</button>
    </div>
    <div class="showInfo"></div>`);
    $(event.target).after(descriptionLine)
    
    $("img").on("mouseover", function () {
    const originalSrc = this.src;
    let imgIndex = $("img").index(this);
    const hoverSrc = `images/essentials${imgIndex}f.webp`
    this.src = hoverSrc;
    $(this).on("mouseout", function () {
        this.src = originalSrc;
    });
});;


