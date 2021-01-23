const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/author_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // True by default. Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify().
    useFindAndModify: false
})
    .then(() => console.log("Established a connection to the database author_db"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
