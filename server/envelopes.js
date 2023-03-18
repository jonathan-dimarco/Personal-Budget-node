const envelopesRouter = require('express').Router();
const envelopes = require("./db");

const e = require('cors');
const { getAllEnvelopes, addEnvelope, getEnvelopeById }= require('./controllers');



envelopesRouter.get('/', (req, res, next) => {
    const database = getAllEnvelopes();
    res.status(200).send(database);
})

envelopesRouter.get('/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const envelope = getEnvelopeById(envelopes, id);
    if(envelope) {
    res.status(200).send(envelope);
    } else {
        res.status(404).send('Envelope not Found!');
    }

})


envelopesRouter.post("/", (req, res, next) => {
    const newEnvelope = req.body;
    console.log(newEnvelope);
    const envelopeToAdd = addEnvelope(newEnvelope);
    res.send(newEnvelope);
});






module.exports = envelopesRouter;