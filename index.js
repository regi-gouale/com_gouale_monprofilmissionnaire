// import db from './firebaseConf.js';

const survey = new Survey.Model(surveyJson);

survey.locale = "fr";

survey.onComplete.add(showProfilePageAndSaveResults);

$(function () {
    $("#surveyContainer").Survey({ model: survey });
});

function showProfilePageAndSaveResults(sender) {
    const profile = determineProfile(sender.data);
    showProfilePage(profile);
    saveProfileResults(sender.data, profile);
    // alert(JSON.stringify(profile));
};

function determineProfile(data) {
    let entries = Object.entries(data);

    entries.forEach(function (entry) {
        const p = entry[0].split('-')[0];

        if (profiles[p] !== undefined) {
            profiles[p]['points'] += entry[1];
        }
        if (profileTypes[p] !== undefined) {
            profileTypes[p]['points'] += entry[1];
        }
    });

    for (p in profiles) {
        profiles[p]["average"] = profiles[p]['points'] / profiles[p]['nbQuestions']
    }
    for (p in profileTypes) {
        profileTypes[p]["average"] = profileTypes[p]['points'] / profileTypes[p]['nbQuestions']
    }

    let profileType = Object.keys(profileTypes).reduce((a, b) => profileTypes[a]['average'] > profileTypes[b]['average'] ? a : b);
    let profile = Object.keys(profiles).reduce((a, b) => profiles[a]['average'] > profiles[b]['average'] ? a : b);

    return profile + '-' + profileType;
}

function showProfilePage(profileAndType) {
    const profile = profileAndType.split('-')[0];
    const profileType = profileAndType.split('-')[1];

    // Show the profile
    $.ajax({
        url: 'profile.html',
        dataType: 'html',
        success: function (data) {
            $('#surveyContainer').html('');
            $('#profileTitle').html("<h1>Profil Missionnaire : " + profiles[profile]['name'].toUpperCase() + " - Type " + profileType.toUpperCase() + "</h1>");
            $('#profileDescription').html("<p>" + profiles[profile]['description'] + "</p>");
            $('#profileStrength').html("<h2>Traits majeurs de son caractère</h2><ul><li>" + profiles[profile]['strength'].join('</li><li>') + "</li></ul>");
            $('#profileWeakness').html("<h2>Défis majeurs</h2><ul><li>" + profiles[profile]['weakness'].join('</li><li>') + "</li></ul>");
        }
    });
}
function saveProfileResults(data, profileAndType) {
    const profile = profileAndType.split('-')[0];
    const profileType = profileAndType.split('-')[1];
    // Save the results to firebase
    const db = window.db;
    const collection = window.collection;
    const addDoc = window.addDoc;
    const uuid = uuidv4();

    try {
        const docRef = addDoc(collection(db, "profiles"), {
            id: uuid,
            profile: profile,
            profileType: profileType,
            username: data.username,
            email: data.email,
        });
        console.log("Document written with ID: ", docRef.id);
    }catch (e) {
        console.error("Error adding document: ", e);
    }
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
