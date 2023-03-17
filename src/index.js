import './style.css';
import home from './home.js';
const navBarItems = ["Home", "Menu", "Contact"];

const urlRegex = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
const creator = {
    name: "Eric Furrevig",
    Github: "https://github.com/efurrevig"
}


function createNavbar() {
    let navbar = document.createElement('div');
    navbar.classList.add('navbar');

    navBarItems.forEach(item => {
        let navItem = document.createElement('p');
        navItem.textContent = item;
        navbar.appendChild(navItem);
    });

    return navbar;
}


function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    for (const[key, value] of Object.entries(creator)) {
        if (typeof value === 'string' && urlRegex.test(value)) {
            let elem = document.createElement('a');
            elem.href = value;
            elem.textContent = key;
            footer.appendChild(elem);
        } else {
            let elem = document.createElement('p');
            elem.textContent = "Created by: " + value;
            footer.appendChild(elem);
        }
    };
    return footer;
}
document.body.appendChild(createNavbar());
const content = document.createElement('div');
content.appendChild(home());
document.body.appendChild(content);
document.body.appendChild(createFooter());