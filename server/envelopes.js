const envelopesRouter = require('express').Router();
const envelopes = require("./db");

const e = require('cors');
const { getAllEnvelopes, addEnvelope }= require('./controllers');



envelopesRouter.get('/', (req, res, next) => {
    const database = getAllEnvelopes();
    res.status(200).send(database);
})


envelopesRouter.post("/", (req, res, next) => {
    const newEnvelope = req.body;
    console.log(newEnvelope);
    const envelopeToAdd = addEnvelope(newEnvelope);
    res.send(newEnvelope);
});






module.exports = envelopesRouter;