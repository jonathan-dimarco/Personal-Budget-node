const envelopesdb = require("./db");
const idCounter = require("./db");

const addToDatabase = async (req, res) => {
    try {
      const name = req.body
      const budget = req.body
      const envelopesdb = await envelopesdb;
      const newId = idCounter++;
      const newEnvelope = {
        id: 8,
        name: name,
        budget: budget,
      };
      envelopesdb.push(newEnvelope);
      res.status(201).send(newEnvelope);
    } catch (err) {
      res.status(500).send(err);
    }
  };

module.exports = { addToDatabase };