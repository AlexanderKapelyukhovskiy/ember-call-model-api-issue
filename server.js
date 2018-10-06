var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3008;

var router = express.Router();

router.get('/users/111/transactions/call-details/111', function(req, res) {
    var resp = {"calldetail":{"id":111,"type":"call","listingId":222,"advisorId":333,"advisorName":"AdvisorName","consumerId":444,"consumerName":"ConsumerName","startDate":"7/18/2018 12:50 PM","endDate":"7/18/2018 1:02 PM","totalTime":12,"offerTime":1,"rate":5.99,"platformFee":4.4,"commission":50.48,"balanceUsed":10,"offerDescription":"1 Free minute of the offer \"Talk for Free Minutes from Mike Pace\"","feedbackRating":5,"feedbackComment":"Thank you Mike! I appreciate your honest, accurate readings!","bonus":true,"seamlessPayDetails":[{"payDate":"7/18/2018 1:02 PM","payType":"pay","payAmount":65.89,"cardType":"amex","cardNumberLast4Digits":"0545"},{"payDate":"7/18/2018 1:02 PM","payType":"pay","payAmount":65.89,"cardType":"amex","cardNumberLast4Digits":"0545"},{"payDate":"7/18/2018 1:02 PM","payType":"refund","payAmount":65.89,"cardType":"amex","cardNumberLast4Digits":"0545"}],"chargesDetails":[{"payDate":"7/18/2018 1:02 PM","payType":"pay","payAmount":65.89,"cardType":"master","cardNumberLast4Digits":"3032"}]}};
    res.json(resp);
});

var corsSettings = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-EpcApi-ID, X-Domain-ID");

    next();
};
app.use(corsSettings);
app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);