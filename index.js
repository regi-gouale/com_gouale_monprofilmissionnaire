import { questionsJson } from "./js/questions.js";
import { Model } from "survey-core"

const survey = new Survey.Model(questionsJson);

survey.locale = "fr";

function alertResults(sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

function sendResultsToDatabase(sender, options) {
    options.showDataSaving();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "./html/results.html");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = xhr.onerror = function () {
        if (xhr.status == 200) {
          // Display the "Success" message (pass a string value to display a custom message)
          options.showDataSavingSuccess();
          // Alternatively, you can clear all messages:
          // options.showDataSavingClear();
        } else {
          // Display the "Error" message (pass a string value to display a custom message)
          options.showDataSavingError();
        }
      };
      xhr.send(JSON.stringify(sender.data));
}

survey.onComplete.add(sendResultsToDatabase);

$(function () {
    $("#surveyContainer").Survey({
        model: survey
    });
});

