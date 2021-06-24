import homePage from './pages/homepage.js';
import contactUs from './pages/contact.js';
import menu from './pages/menu.js';
import Logo from './images/fry-shak.jpg';
import './style.css';

function initPage() {
    const btnHome = document.createElement('button');
    btnHome.innerHTML = "Home";
    btnHome.id = 'home';

    const btnMenu = document.createElement('button');
    btnMenu.innerHTML = "Menu";
    btnMenu.id = 'menu';

    const btnContact = document.createElement('button');
    btnContact.innerHTML = "Contact Us";
    btnContact.id = 'contact';

    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = "Neeyathan's Fry Shak";
    document.body.appendChild(restaurantName);
    document.body.appendChild(btnHome);
    document.body.appendChild(btnMenu);
    document.body.appendChild(btnContact);
}

const load = (() => {
    initPage();
    const content = document.createElement('div');
    content.id = "content";
    document.body.classList.add('content');
    content.classList.add('content');
    document.body.appendChild(content);
    homePage(Logo)
})();

const btnMenu = document.getElementById('menu');
const btnContact = document.getElementById('contact');
const btnHome = document.getElementById('home');

btnMenu.addEventListener('click', function () { menu(Logo) });
btnContact.addEventListener('click', function () { contactUs(Logo) });
btnHome.addEventListener('click', function () { homePage(Logo) });


//buttons
// const content = document.getElementById('content');
// content.innerHTML = "";

// const btnHome = document.createElement('button');
// btnHome.innerHTML = "Home";
// btnHome.id = 'home';

// const btnMenu = document.createElement('button');
// btnMenu.innerHTML = "Menu";
// btnMenu.id = 'menu';

// const btnContact = document.createElement('button');
// btnContact.innerHTML = "Contact Us";
// btnContact.id = 'contact';
// btnHome.disabled = true;

// content.appendChild(btnHome);
// content.appendChild(btnMenu);
// content.appendChild(btnContact);