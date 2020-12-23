const users = [
    { 
        id: 1,
        name: 'Greg'
    },
    {
        id: 2,
        name: 'Elsa'
    },
    {
        id: 3,
        name: 'Julien'
    },
    {
        id: 4,
        name: 'Raoul'
    }
]

exports.list_user = (req, res, next)=> {
    res.status(200).json({users:users})
}

exports.detail_user = (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    const user = users.filter(user => user.id == id);
    res.status(200).json({user: user})
    res.status(200).json({user: user})
}

exports.add_user = (req, res, next)=> {
    const newUser = req.body;
    users.push(newUser)
    res.status(200).json({message:'user added'})
}
