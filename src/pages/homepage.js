export default function homePage(myLogo) {
    const content = document.getElementById('content');
    content.innerHTML = ""

    const logo = document.createElement('img');
    logo.src = myLogo;

    const restaurantBlurb = document.createElement('div');
    restaurantBlurb.innerHTML = "Neeyathan's Fry Shak is known locally as \"THE\" place for all of your fried needs. We gots fried skrimp, fried oysties, fried chicken, fried steak, and our famous fried porkchops. Stop on in for some food that\'s so good it\'ll make your heart stop."

    content.appendChild(logo);
    content.appendChild(restaurantBlurb);
};