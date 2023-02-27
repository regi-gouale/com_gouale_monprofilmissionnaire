import { questionsJson } from "./js/questions.js";

const survey = new Survey.Model(questionsJson);

function alertResults(sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

survey.onComplete.add(alertResults);

$(function () {
    $("#surveyContainer").Survey({
        model: survey
    });
});