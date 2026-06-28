exports.login = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    res.json({
        success: true,
        message: "Login Successful"
    });

};

exports.signup = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    res.json({
        success: true,
        message: "Signup Successful"
    });

};
