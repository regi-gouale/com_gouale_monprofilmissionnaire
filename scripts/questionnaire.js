// Description: This file contains the code for the questionnaire page

var questions;
var responses;
var responsesType;
var sumOfUserAnswers = 0;

window.onload = function () {
    let b = document.body;
    let br = document.createElement('br');

    let header = document.createElement('header');
    let h1 = document.createElement('h1');
    h1.textContent = 'Découvrez votre appel missionnaire';
    header.appendChild(h1);
    b.insertBefore(header, b.firstChild);

    let form = document.createElement('form');
    form.setAttribute('onsubmit', 'return submitForm(this)');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'questionnaire');

    let mainSection = document.createElement('main');
    mainSection.setAttribute('id', 'mainSection');

    fetch('./data/questionnaire.json')
        .then(response => response.json())
        .then(data => {
            responsesType = data.reponses.type;
            responses = data.reponses.reponses;
            questions = data.questions;
            shuffle(questions);

            let id = 1;
            for (let question of questions) {
                question.id = id;
                id += 1;

                let newQuestionSection = document.createElement('section');
                let questionID = document.createElement('h2');
                questionID.textContent = 'Question ' + question.id;
                newQuestionSection.appendChild(questionID);

                let questionText = document.createElement('p');
                questionText.textContent = question.question;
                newQuestionSection.appendChild(questionText);

                for (let response of responses) {
                    let a = document.createElement('input');
                    a.setAttribute('type', responsesType);
                    a.setAttribute('name', 'q' + question.id);
                    a.setAttribute('value', response.texte);
                    a.setAttribute('id', 'q' + question.id + 'a' + response.texte);

                    newQuestionSection.appendChild(a);

                    let aLabel = document.createElement('label');
                    aLabel.setAttribute('for', 'q' + question.id + 'a' + response.texte);
                    aLabel.textContent = response.texte;

                    newQuestionSection.appendChild(aLabel);
                }
                mainSection.appendChild(newQuestionSection);
            }
        })
        .catch(error => console.log(error));

    let footer = document.createElement('footer');
    footer.appendChild(br);

    let resetInput = document.createElement('input');
    resetInput.setAttribute('type', 'reset');
    resetInput.setAttribute('value', 'Réinitialiser');
    footer.appendChild(resetInput);

    let submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Soumettre');
    footer.appendChild(submitInput);

    form.insertBefore(footer, form.lastChild);
    form.insertBefore(mainSection, form.lastChild);

    b.appendChild(form);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function submitForm(form) {
    let profiles = {
        "types": {
            "sedentaire": {
                "selected": 0,
                "total": 5
            },
            "itinerant": {
                "selected": 0,
                "total": 5
            }
        },
        "profils": {
            "gagneur-ames": {
                "selected": 0,
                "total": 25
            },
            "transformation-ames": {
                "selected": 0,
                "total": 30
            },
            "coordinateur-mission": {
                "selected": 0,
                "total": 26
            },
            "manifestation-compassion": {
                "selected": 0,
                "total": 25
            }
        }
    };

    let formData = new FormData(form);

    for (let pair of formData.entries()) {
        let id = parseInt(pair[0].split('q')[1]);
        if (pair[1] == responses[0].texte || pair[1] == responses[1].texte) {
            sumOfUserAnswers += 1;

            if (questions[id - 1].type === undefined) {
                profiles.profils[questions[id - 1].profile]["selected"] += 1;
            }
            else {
                profiles.types[questions[id - 1].type]["selected"] += 1;
            }
        }
    }

    // alert(JSON.stringify(profiles));
    
    let selectedType = profiles.types.sedentaire.selected > profiles.types.itinerant.selected ? "sedentaire" : "itinerant";
    let selectedProfile = Object.keys(profiles.profils).reduce((a, b) => profiles.profils[a].selected > profiles.profils[b].selected ? a : b);

    // alert(selectedType);
    // alert(selectedProfile);

    // callResultPage(selectedType, selectedProfile);
    form.action = './pages/results.html?type=' + selectedType + '&profile=' + selectedProfile;
}

function callResultPage(type, profile) {
    window.location.href = 'results.html?type=' + type + '&profile=' + profile;
}