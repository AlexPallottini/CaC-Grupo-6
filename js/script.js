function onLoad()
{
    // alert("Page loaded")
    let nav = document.getElementById("main-nav");
    nav.firstElementChild.className = "nav-item nav-item-active";

    let children = nav.children;
    for (let index = 0; index < children.length; index++) 
    {
        children[index].addEventListener("click", onNavButtonSelected);
    }
}

function onNavButtonSelected(e)
{
    let previous = document.getElementsByClassName("nav-item-active");

    if (previous.length > 0) {
        previous[0].className = previous[0].className.replace(" nav-item-active", "");
    }

    e.target.className += " nav-item-active";
}

