const User = require('../models/uesrmodel')

exports.add_user = async (req, res) => {
    let query = await User.create(req.body)
    res.send(query)
}

exports.get_all_users = async (req, res) => {
    User.find({}, (err, user)=> {
        if(user) res.status(200).send(user)
        else res.status(500).send(err)
    })
}