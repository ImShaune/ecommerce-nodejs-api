const router = require('express').Router();

router.get("/usertest", (req, res) => {
    res.send("User Test is successfull");  
});


router.post('/userposttest', (req, res) => {
    const username = req.body.username;
    res.send("your suername is: " + username);
});

module.exports = router;