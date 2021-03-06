// import express from express
const express = require('express');
// import bodyParser from 'body-parser'
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Student = require('./model/Students');
const Speciality = require('./model/Speciality');
const Matier = require('./model/Matier');
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());
// post => ajout des donnes  dans la base
// get => recuperation des donnes de la base 
// delete => supression des donnes  de la base 
// put => modification des donnes de la base
app.post('/students', async (req, res) => {
    //bch ta3ml  traitement pour ajouter dans la base
    // ki na3ml ism model.create yzid elemnt fi tableau student eli mawjoud fi base des donnes 
    // req.body feha les inputs 
    const student = await Student.create(req.body);
    // jv asychrone ki te5ou wa9t yfout ligne w yet3eda eli ba3dou meyestenewich khatrou ye5ou wa9tt
    // b await y9olou esteneh w metet3eda ligne eli ba3dha ken metekml ligne eli 9belha
    // res.json pour returner le resultat apres le traitement 
    return res.json({ message: "ok", student, status: 200 }).status(200);
})

app.get('/students', async (req, res) => {
    //bch ta3ml  traitement pour recuper  de la base
    // ki na3ml ism model.find yjib students eli mawjoudin fi base des donnes 

    const students = await Student.find();

    return res.json({ message: "okkkkkkkk", students, status: 200 }).status(200);

})

app.delete('/students/:id', async (req, res) => {
    //bch ta3ml  traitement pour supprimer de la base
    // ismModel.remove tfassakh mel base ki nheb nfassa5 7ed mo3eyen neb3eth el id 
    // w ba3ed n9oul fi remove ({ _id: req.params.id})
    // kol traitement m3a base de donnes lezmik tzid el await 
    await Student.remove({ _id: req.params.id });
    return res.json({ message: "ok", id: req.params.id, status: 200 }).status(200);
})

app.post('/specialities', async (req, res) => {
    const speciality = await Speciality.create(req.body);
    return res.json({ message: "ok", speciality, status: 200 }).status(200);
    // traitements enti bch te5dmou
})
app.get('/specialities', async (req, res) => {
    const specialities = await Speciality.find();

    return res.json({ message: "okkkk", specialities, status: 200 }).status(200);
})

app.delete('/specialities/:id', async (req, res) => {
    await Speciality.remove({ _id: req.params.id });
    return res.json({ message: "ok", id: req.params.id, status: 200 }).status(200);
})

app.get('/specialities/:id', async (req, res) => {
    const speciality = await Speciality.findOne({ _id: req.params.id });
    return res.json({ message: "ok", speciality, status: 200 }).status(200);
})

app.post('/matiers', async (req, res) => {
    const matier = await Matier.create(req.body);
    return res.json({ message: "ok", matier, status: 200 }).status(200);
})

app.get('/matiers', async (req, res) => {
    const matiers = await Matier.find();
    return res.json({ message: "okkkk", matiers, status: 200 }).status(200);
})
app.delete('/matiers/:id', async (req, res) => {
    await Matier.remove({ _id: req.params.id });
    return res.json({ message: "ok", id: req.params.id, status: 200 }).status(200);
})

// lancer notre application sur le port 4000
app.listen(4000, () => {
    // connexion a la base mongodb avec mongoose
    // students le nom de la base de donnes qui est lanc?? sur le prot 27017
    mongoose.connect(`mongodb://localhost:27017/students`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`???? application ready at 4000`);
});
  // pour lancer le projet node index.js
  // a chaque modification dans le code il faut relancer le projet


  // tzid model speciality // name 
  // add remove get specialties 

  // add w remove w get w get byid mte3 matier => les attributs name nombreHours cofficient
  // donc tzid model ismou Matier w ta3ml les fonctions w metensech bch tpushi el  5edma 
  // bisous felfoultii nhebek barchaaa :