var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3008;

var router = express.Router();

router.get('/users/111/transactions/call-details/111', function(req, res) {
    var resp = {
      "calldetail": {
        "id":111,
        "listingId":222,
        "advisorId":333,
        "advisorName":"AdvisorName",
        "consumerId":444,
        "consumerName":"ConsumerName",
        }
    };
    res.json(resp);
});

app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);