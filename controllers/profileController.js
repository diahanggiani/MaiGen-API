// logic profile pengguna setelah login

// mengimpor model users untuk berinteraksi dengan tabel users di database
const users = require("../database/models/users");
const jwt = require('jsonwebtoken');

// memeriksa ketersediaan token
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            status: 'Fail',
            message: 'No token provided or malformed token'
        });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log('Decoded JWT:', decoded); // log hasil dekode JWT
        req.user = decoded; // simpan data pengguna di req.user
        next();
    } catch (error) {
        return res.status(401).json({
            status: 'Fail',
            message: 'Invalid token'
        });
    }
};

// melihat data pengguna (profile)
const getProfile = async (req, res, next) => {
    try {
        // mencari user berdasarkan id
        const user = await users.findByPk(req.user.id, {
            attributes: ['username', 'email', 'password']
        });

        if (!user) {
            return res.status(404).json({
                status: 'Fail',
                message: 'User not found'
            });
        }

        // mengirim data profil (username, email, password)
        const result = user.toJSON();
        return res.status(200).json({
            status: 'Success',
            data: result
        });
    } catch (error) {
        console.error('Error fetching user profile:', error); // log error
        return res.status(500).json({
            status: 'Error',
            message: 'Something went wrong'
        });
    }
};


module.exports = {
    authenticate,
    getProfile
};