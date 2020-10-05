const User = require('../models/User');
const { sequelize } = require('../db/sqliteDB');

module.exports = {
    createUser: async (req, res) => {
        try {
            await sequelize.sync();
            const { email, userName, password, dob, credit } = req.body;
            const newUser = await User.create({ email, userName, password, dob, credit });
            res.json({ success: true, data: newUser }).status(200);

        } catch (e) {
            console.log(e);
            res.json({ success: false, message: 'Failed to create a new user' }).status(500);
        }
    },
    getAllUsers: async (req, res) => {
        try {
            await sequelize.sync();
            const users = await User.findAll();
            res.json({ success: true, data: users }).status(200);

        } catch (e) {
            console.log(e);
            res.json({ success: false, message: 'Failed to find users' }).status(500);
        }
    },
    getAUser: async (req, res) => {
        try {
            await sequelize.sync();
            const user = await User.findAll({
                where: {
                    id: req.params.id
                }
            });
            if (user.length) {
                res.json({ success: true, data: user }).status(200);
            } else {
                res.json({ success: false, message: 'Failed to find user' }).status(404);
            }

        } catch (e) {
            console.log(e);
            res.json({ success: false, message: 'Failed to find user' }).status(500);
        }
    },
    deleteAUser: async (req, res) => {
        try {
            await sequelize.sync();
            const user = await User.destroy({
                where: {
                    id: req.params.id
                }
            });
            if (user.length) {
                res.json({ success: true, message: 'User deleted!' }).status(204);
            } else {
                res.json({ success: false, message: 'Failed to find user' }).status(404);
            }

        } catch (e) {
            console.log(e);
            res.json({ success: false, message: 'Failed to delete user' }).status(500);
        }
    },
    updateAUser: async (req, res) => {
        try {
            await sequelize.sync();
            const user = await User.update({ ...req.body }, {
                where: {
                    id: req.params.id
                }
            });
            if (user.length) {
                res.json({ success: true, message: 'User updated!', data: user }).status(204);
            } else {
                res.json({ success: false, message: 'Failed to find user' }).status(404);
            }

        } catch (e) {
            console.log(e);
            res.json({ success: false, message: 'Failed to update user' }).status(500);
        }
    }
}