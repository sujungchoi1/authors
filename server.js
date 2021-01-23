const express = require("express");
const cors = require("cors");

const app = express();
const port = 8001;

// middleware - affects incoming requests
//use cors for all the incoming requests
app.use(cors());
//configure express to use json data
app.use(express.json());
//helps us read POST data and encode it into json data if we get it over the url
app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.configure');
// const router = require('./server/routes/routes');
// router(app);

require('./server/routes/author.routes')(app);


app.listen(port, () => console.log(`You are on port ${port}`));