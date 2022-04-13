var token = "<AddTelegramBot:TokenHere>";
var telegramUrl = "https://api.telegram.org/bot" + token;
var GroupId = "<AddTelegramGroupIdHere>"

function sendMessage(id, text) {
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(id),
      text: text,
      parse_mode: "HTML",

    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}

function myFunction() {
    var form = FormApp.getActiveForm();
    var allResponses = form.getResponses();
    var latestResponse = allResponses[allResponses.length - 1];
    var response = latestResponse.getItemResponses();
    var text = "New Forms Submission:\n";
    for (var i = 0; i < response.length; i++) {
        var question = response[i].getItem().getTitle();
        var answer = response[i].getResponse();
        text += ${question}\n${answer}\n\n
    }
  sendMessage(GroupId, text)
};
