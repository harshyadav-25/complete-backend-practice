import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    image: String,
    email: String,
    name: String
});

const userModel = mongoose.model('User', userSchema);

export default userModel;