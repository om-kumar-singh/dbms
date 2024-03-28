let signup = document.querySelector(".sign-up");
let mainpage = document.querySelector(".main-page");
let openpage = document.querySelector(".open");
let body = document.querySelector("body");
let content = document.querySelector(".content");
let modeBtn = document.querySelector(".modeBtn");
let sidebar = document.querySelector(".sidebar");
let boxes = document.querySelectorAll('.box');
let sidebarLinks = document.querySelectorAll('.sidebar a');

//open-close login form
function openlogin() {
    document.getElementById("loginContainer").style.display = "block";
    [home,bestseller, account, cart, deal,product1].forEach(function(elements) {
        elements.forEach(function(element) {
            element.style.display = "none"; 
        });
    });
}

function closeLogin() {
    document.getElementById("loginContainer").style.display = "none";
    [home].forEach(function(elements) {
        elements.forEach(function(element) {
            element.style.display = "block"; 
        });
    });
}

//start the page
function START() {
    openpage.style.display = "none";
    mainpage.style.display = "block";
}

//open and close the sidebar
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
}

//change the theme
//  event listener functions 
function onSidebarLinkEnter() {
    this.style.color = "black";
}

function onSidebarLinkLeave() {
    this.style.color = ""; 
}

function changeMode() {
    sidebar.classList.toggle("light-mode");
    content.classList.toggle("light-mode");
    mainpage.classList.toggle("light-mode");
    
    if (content.classList.contains("light-mode")) {
        modeBtn.style.backgroundColor = "#f1f1f1";
        modeBtn.style.border = "2px solid #252424";
        
        sidebarLinks.forEach(link => {
            link.addEventListener('mouseenter', onSidebarLinkEnter);
            link.addEventListener('mouseleave', onSidebarLinkLeave);
        });
    } else {
        modeBtn.style.backgroundColor = "#333";
        modeBtn.style.border = "1px solid white";
        
        sidebarLinks.forEach(link => {
            link.removeEventListener('mouseenter', onSidebarLinkEnter);
            link.removeEventListener('mouseleave', onSidebarLinkLeave);
            
            link.style.color = "";
        });
    }
}

//function to close side bar for each link
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

//functions of the navbar
let home = document.querySelectorAll(".home");
let bestseller = document.querySelectorAll(".bestSellers");
let account = document.querySelectorAll(".account");
let cart = document.querySelectorAll(".cart");
let deal = document.querySelectorAll(".todaysdeal");
let form = document.querySelectorAll(".form-container");
function openHome() {
    home.forEach(function(element) {
        element.style.display = "block";
    });
    
    [bestseller, account, cart, deal,form,product1].forEach(function(elements) {
        elements.forEach(function(element) {
            element.style.display = "none"; 
        });
    });
}

function openSellers() {
    bestseller.forEach(function(element) {
        element.style.display = "block";
    });
    
    [home, account, cart, deal,form,product1].forEach(function(elements) {
        elements.forEach(function(element) {
            element.style.display = "none"; 
        });
    });
}

function openDeals() {
    deal.forEach(function(element) {
        element.style.display = "block";
    });
    
    [home, bestseller, account, cart,form,product1].forEach(function(elements) {
        elements.forEach(function(element) {
            element.style.display = "none"; 
        });
    });
}

function openCart() {
    cart.forEach(function(element) {
        element.style.display = "block";
    });
    
    [home, bestseller, account, deal,form,product1].forEach(function(elements) {
        elements.forEach(function(element) {
            element.style.display = "none"; 
        });
    });
}

// about product 
let product1 = document.querySelectorAll(".product1");
function aboutProduct() {
    // let product1 = document.querySelectorAll(".product1");

    product1.forEach(function(element) {
        element.style.display = "block"; 
    });

    mainpage.style.overflow = "hidden"; 

    
    let elements = [home, bestseller, account, deal, form, cart]; 

    elements.forEach(function(elementArray) {
        elementArray.forEach(function(element) {
            element.style.display = "none"; 
        });
    });
}
