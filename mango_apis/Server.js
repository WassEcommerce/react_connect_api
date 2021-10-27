const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URL } = require('./config');

const app = express();

//connect to mango 

mongoose.connect(MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log('MangoDB connected'))
.catch(err => console.log(err));


/*app.get('/', (req, res) => {

	res.send('hello from node');
});*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));