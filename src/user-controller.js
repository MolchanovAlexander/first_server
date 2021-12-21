const users = [
    { id: 1, name: 'guf' },
    { id: 2, name: 'dniwe' }
]

const getUsers = (req, res) => {
    if (req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    }
    res.send(users);
}
const createUser = (req, res) => {
    const user = req.body;
    console.log(user);
    users.push(user)
    res.send(users);

}
module.exports = {
    getUsers,
    createUser
}