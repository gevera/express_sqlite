"use strict";

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const { db } = require('./db/sqliteDB');
const userRoutes = require('./routes/userRoutes');


db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', userRoutes);


app.listen(PORT, () => {
    console.log('Yup. Its working!');
})