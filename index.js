const langHTMLElement = document.getElementById("langu");

langHTMLElement.addEventListener("click", function ()
{
    let newLang;

    if (langHTMLElement.textContent === "ES")
        newLang = "EN";
    else
        newLang = "ES";

    langHTMLElement.textContent = newLang;
})

const burgerMenuHTMLElement = document.getElementById("burger");
const bodyHTMLElement = document.body;

burgerMenuHTMLElement.addEventListener("click", function ()
{
    let actualBodyOpacity = bodyHTMLElement.style.opacity;

    if (actualBodyOpacity == 0.6)
        bodyHTMLElement.style.opacity = "100%";
    else
        bodyHTMLElement.style.opacity = "60%";

});

$(function ()
{
    let count = 0;

    const wordsArray = ["Creatividad", "Experiencias", "Historias", "Wilddevs"];

    setInterval(function ()
    {
        count++;
        $("#word").fadeOut(500, function ()
        {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
        });
    }, 4000);
});