const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log('Veritabanı Bağlantısı: Başarılı!')).catch((err) => {
	console.log(err);
});

app.use(cors());
app.use(express.json());
app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log('Servis Çalışıyor! -> http://localhost:' + process.env.PORT + '/');
});
