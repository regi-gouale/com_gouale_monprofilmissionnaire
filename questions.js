// Description: This file contains the questions and answers for the questionnaire

var questions;
var answers;
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
    form.setAttribute('onsubmit', 'return setAction(this)');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'questionnaire');

    let mainSection = document.createElement('main');
    mainSection.setAttribute('id', 'mainSection');

    fetch('./questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data.questions;
            answers = data.answers;
            for (let question of questions) {
                let newQuestionSection = document.createElement('section');
                let questionID = document.createElement('h2');
                questionID.textContent = 'Question ' + question.id;
                newQuestionSection.appendChild(questionID);

                let questionText = document.createElement('p');
                questionText.textContent = question.question;
                newQuestionSection.appendChild(questionText);

                for (let answer of answers) {
                    let a = document.createElement('input');
                    a.setAttribute('type', answer.type);
                    a.setAttribute('name', 'q' + question.id);
                    a.setAttribute('value', answer.value);
                    // a.setAttribute('required', 'required');
                    a.setAttribute('id', 'q' + question.id + 'a' + answer.value);

                    newQuestionSection.appendChild(a);

                    let aLabel = document.createElement('label');
                    aLabel.setAttribute('for', 'q' + question.id + 'a' + answer.value);
                    aLabel.textContent = answer.value;

                    newQuestionSection.appendChild(aLabel);
                }

                mainSection.appendChild(newQuestionSection);
            }

        })
        .catch(error => console.log(error));


    let footer = document.createElement('footer');
    footer.appendChild(br);

    let reset = document.createElement('input');
    reset.setAttribute('type', 'reset');
    reset.setAttribute('value', 'Réinitialiser');
    footer.appendChild(reset);

    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Soumettre');
    submit.setAttribute('id', 'submit');
    submit.setAttribute('action', 'results.html');

    footer.appendChild(submit);

    form.insertBefore(footer, form.lastChild);
    form.insertBefore(mainSection, form.lastChild);

    b.appendChild(form);
}

// Path: result.js
function setAction(form) {
    form.action = 'results.html';
    console.log(answers);

    profiles = {
        "Samaritaine": 0,
        "Jean Baptiste": 0,
        "Paul": 0,
        "Barnabas": 0,
        "Jean": 0,
        "Philippe et Nathanaël": 0,
        "Thimothée": 0,
        "Philippe": 0
    };

    var formData = new FormData(form);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
        let id = parseInt(pair[0].split('q')[1]);
        if (pair[1] == answers[0].value || pair[1] == answers[1].value) {
            profiles[questions[id-1].profile] += 1;
            sumOfUserAnswers += 1;
        }
        
    }

    // alert(JSON.stringify(profiles));
    const sortedObject = Object.fromEntries(
        Object.entries(profiles).sort(([, a], [, b]) => b - a)
    );
    alert(JSON.stringify(sortedObject));
    alert(sumOfUserAnswers);
    
    return true;
}