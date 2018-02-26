const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    res.send({"This": "Works"});
    //res.send().json();  
});

module.exports = router;