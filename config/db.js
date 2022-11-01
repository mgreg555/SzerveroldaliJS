const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DYR5N1', { useNewUrlParser: true });

module.exports = mongoose;