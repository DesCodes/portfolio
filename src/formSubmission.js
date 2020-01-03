// proxy server
var request = require('superagent');

// extend with Request#proxy()
require('superagent-proxy')(request);

// HTTP, HTTPS, or SOCKS proxy to use
var proxy = process.env.http_proxy || 'http://168.63.43.102:3128';

request
  .get(process.argv[2] || 'https://encrypted.google.com/')
  .proxy(proxy)
  .end(onresponse);

function onresponse (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.status, res.headers);
    console.log(res.body);
  }
}






// API POST METHOD
const mailjet = require ('node-mailjet')
.connect('26b17e1db343be34441d7fb538455d07', 'c4707aa37fa4c2a9983eeb907b2b1601')
const requests = mailjet
.post("send", {'version': 'v3.1', 'proxyUrl': 'http://168.63.43.102:3128'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "desmond.yan.lai@gmail.com",
        "Name": "Desmond"
      },
      "To": [
        {
          "Email": "desmond.yan.lai@gmail.com",
          "Name": "Desmond"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
requests
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
