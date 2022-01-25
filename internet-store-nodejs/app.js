const express = require('express');
const mongoose = require('mongoose');

const HomeRoutes = require('./routes/HomeRoutes');
const ProductsRoutes = require('./routes/ProductsRoutes');
const MegaNavRoutes = require('./routes/MegaNavRoutes');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// database connection
const dbURI = "mongodb+srv://Kostya:Slava_12345@cluster0.68vib.mongodb.net/InternetStoreDB?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(8080))
  .catch((err) => console.log(err));

// routes
app.use(HomeRoutes);
app.use(ProductsRoutes);
app.use(MegaNavRoutes);
