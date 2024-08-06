
class UserController {
    async findAll(req, res) {
        return res.json(["user1", "user2", "user3"]);
    }
}

module.exports = new UserController()  // Instantiate