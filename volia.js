
$("img").on("mouseover", function () {
    const originalSrc = this.src;
    let imgIndex = $("img").index(this);
    const hoverSrc = `images/essentials${imgIndex}f.webp`

    this.src = hoverSrc;

    $(this).on("mouseout", function () {
        this.src = originalSrc;
    });
});


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
        info.find(".close").on("click", () => {
          setTimeout(function () {
            info.html("");
          }, 1000);
        });
}

const createDescr = (event) => {
  let imgId = parseInt(event.target.id);
  let namestr = pieces[1].description;
  let description = $(`<h3 class="white-text">${namestr}</h3>`);
  console.log(description)
  $(event.target).after(description);
}

$("body").on("click", ".view", createDescr);  
$("img").on("click", createText)
// $("body").on("click", ".view", createDescr);  


const $footer = $("<footer>");
$footer.html("<h2>Unleash your potential with Volya apparel</h2><p>Stay stylish with Volya's essentials.</p>");
$("body").append($footer);



