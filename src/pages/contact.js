import toml from '../contacts.toml';

function createEmployee(tomlElement) {
    const pic = document.createElement('img');
    pic.src = tomlElement.photo;
    const name = document.createElement('div');
    name.innerHTML = tomlElement.name;
    const bio = document.createElement('div');
    bio.innerHTML = tomlElement.bio;
    const number = document.createElement('div');
    number.innerHTML = tomlElement.phone;
    content.appendChild(pic);
    content.appendChild(name);
    content.appendChild(bio);
    content.appendChild(number);
}

export default function contactUs(myLogo) {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const logo = document.createElement('img');
    logo.src = myLogo;
    content.appendChild(logo);

    const header = document.createElement('h1');
    header.innerHTML = "Our Staff";
    content.appendChild(header);

    createEmployee(toml.owner);
    createEmployee(toml.manager);
}