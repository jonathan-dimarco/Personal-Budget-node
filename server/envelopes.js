const envelopesRouter = require('express').Router();
const envelopes = require("./db");

const e = require('cors');
const { getAllEnvelopes, addEnvelope, getEnvelopeById, updateEnvelope, deleteEnvelope, transferBudget }= require('./controllers');

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

envelopesRouter.put("/:id", (req, res, next) => {
const updatedEnvelope = updateEnvelope(envelopes, req.params.id, req.body);
console.log(updatedEnvelope);
if(!updatedEnvelope) {
    res.sendStatus(404);
} else {
    res.status(201).send(updatedEnvelope);
}
})

envelopesRouter.delete("/:id", (req, res, next) => {
    const updatedEnvelopes = deleteEnvelope(envelopes, req.params.id);
    if(updatedEnvelopes === "Invalid index"){
        res.status(500).send("Envelope Not Found!");
    } else {
    res.status(200).send(updatedEnvelopes);
    }
})

envelopesRouter.put("/transfer/:from/:to", (req, res, next) => {
    const transfer = transferBudget(envelopes, req.params.from, req.params.to, req.body);
    if(transfer === "Envelope Not Found") {
        res.status(404).send("Envelope Not Found");
    }
    if(transfer === "Amount to transfer exceeds envelope budget funds") {
        res.status(400).send("Amount to transfer exceeds envelope budget funds");
    }
    else {
        res.status(201).send(transfer);
    }
})




module.exports = envelopesRouter;