function initialisation() 
{
    const images = document.querySelectorAll('.preview');

for(let i=0; i< images.length; i++)
{
    images[i].setAttribute("tabindex","0");
    images[i].onfocus = function () 
    {
        upDate(images[i]);
    };

    images[i].onblur = function () 
    {
        unDo();
    };
}
}
function upDate(previewPic)
{
    console.log("Image Source: " + previewPic.src);
    console.log("Image Alt Text: " + previewPic.alt);
    let x=document.getElementById('image');
    x.style.backgroundImage='url("' + previewPic.src + '")';
    x.innerHTML=previewPic.alt;
     
}
function unDo()
{
    console.log("Resetting background image to empty URL");
    console.log("Resetting text to original");
    let x=document.getElementById('image');
    x.style.backgroundImage='url("")';
    x.innerHTML='Hover over an image below to display here';
}