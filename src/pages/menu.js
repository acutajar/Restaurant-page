import toml from '../menu-items.toml';

function menuItem(tomlElement) {
    const pic = document.createElement('img');
    pic.src = tomlElement.photo;
    const name = document.createElement('div');
    name.innerHTML = tomlElement.name;
    const bio = document.createElement('div');
    bio.innerHTML = tomlElement.bio;
    const price = document.createElement('div');
    price.innerHTML = tomlElement.price;
    content.appendChild(pic);
    content.appendChild(name);
    content.appendChild(bio);
    content.appendChild(price);
}

export default function menu(myLogo) {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const logo = document.createElement('img');
    logo.src = myLogo;
    content.appendChild(logo);

    const header = document.createElement('h1');
    header.innerHTML = "The food we got:";
    content.appendChild(header);

    menuItem(toml.skrimp);
    menuItem(toml.oysties);
    menuItem(toml.chicken);
    menuItem(toml.pork);
    menuItem(toml.goldfish);
}
