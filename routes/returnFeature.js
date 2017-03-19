var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function(req, res, next) {
    var url = req.body.url;

    var tldArray = [
        '.com',
        '.co.uk',
        '.uk',
        '.gov'
    ];

    var trustedTld = tldArray.some(function(tld) {
        if(url.includes(tld)) {
            return true;
        }
    });

    if(!trustedTld) {
      trustedTld = false;
    }

    res.send({trustedTld: trustedTld});
});

module.exports = router;
