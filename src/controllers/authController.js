const authService = require("../services/authService");

const register = async (req, res) => {
    try {
        const result = await authService.register(req.body);

        const user = result.user.toObject();

        delete user.password;

        res.status(201).json({
            message: "User registered successfully",
            user,
            token: result.token,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);

        const user = result.user.toObject();

        delete user.password;

        res.status(200).json({
            message: "Login successful",
            user,
            token: result.token,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports = {
    register,
    login,
};