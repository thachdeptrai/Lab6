const mongoose = require('mongoose');
// code 4/4/2024
const local = "mongodb+srv://quyenvuong1408:zQTjJ76ek7B3Ours@cluster0.jhfb0.mongodb.net/lab5_md19304";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
