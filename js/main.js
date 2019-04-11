(function(){

    console.log("fired");

    var button = document.querySelector("#button");
    var burgerMenu = document.querySelector("#burgerMenu");
    var topNav = document.querySelector(".topNav"),
        blackBar = document.querySelector("nav"),
        closeBtn = document.querySelector("span");
// function for adding the side menu on button press
    function hamburgerMenu() {
        burgerMenu.classList.add("toggleOn");
        topNav.classList.add("toggleOn");
        blackBar.classList.remove("blackBar");
    };

    button.addEventListener("click", hamburgerMenu, false);
    // function for closing the side menu and revealing the full screen if needed.
    function closeMenu() {
        burgerMenu.classList.remove("toggleOn");
        topNav.classList.remove("toggleOn");
        blackBar.classList.add("blackBar");
    }

    closeBtn.addEventListener("click", closeMenu);
})();