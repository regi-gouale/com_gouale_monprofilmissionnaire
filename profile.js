// Description: This file contains the code for the profile page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const profile = urlParams.get('profile');
const profileType = urlParams.get('profileType');

window.onload = function () {
    // document.getElementById('profile').innerHTML = profile;

    let b = document.body;
    let br = document.createElement('br');

    let profileTitle = document.createElement('h1');
    profileTitle.textContent = 'Profil Missionnaire : ' + profile.toUpperCase() + ' - Type ' + profileType.toUpperCase();
    b.appendChild(profileTitle);

    // fetch('../json/results.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         resultProfile = data[profile];
    //         document.title = resultProfile.name + ' - ' + type;

    //         let header = document.createElement('header');
    //         let h1 = document.createElement('h1');
    //         h1.textContent = 'Profil Missionnaire : ' + resultProfile.name.toUpperCase() + ' - Type ' + type.toUpperCase();
    //         header.appendChild(h1);
    //         b.insertBefore(header, b.firstChild);

    //         let mainSection = document.createElement('main');
    //         mainSection.setAttribute('id', 'mainSection');

    //         let profilDescription = document.createElement('p');
    //         profilDescription.textContent = resultProfile.description;
    //         mainSection.appendChild(profilDescription);

    //         let profilTraitsTitle = document.createElement('h2');
    //         profilTraitsTitle.textContent = 'Traits majeurs de son caractère';
    //         mainSection.appendChild(profilTraitsTitle);

    //         let profilTraits = document.createElement('ul');
    //         for (let trait of resultProfile.traits) {
    //             let profilTrait = document.createElement('li');
    //             profilTrait.textContent = trait;
    //             profilTraits.appendChild(profilTrait);
    //         }
    //         mainSection.appendChild(profilTraits);

    //         let profilDefisTitle = document.createElement('h2');
    //         profilDefisTitle.textContent = 'Défis majeurs';
    //         mainSection.appendChild(profilDefisTitle);

    //         let profilDefis = document.createElement('ul');
    //         for (let defi of resultProfile.defis) {
    //             let profilDefi = document.createElement('li');
    //             profilDefi.textContent = defi;
    //             profilDefis.appendChild(profilDefi);
    //         }
    //         mainSection.appendChild(profilDefis);

    //         b.appendChild(mainSection);
    //     })
    //     .catch(error => console.log(error));
}