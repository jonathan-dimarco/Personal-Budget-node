const envelopes = require('./db');

const createId = (envelopes) => {
  const id = envelopes.length + 1;
  return id;
}

const getAllEnvelopes =  () => {
return envelopes;
}

const addEnvelope = (instance) => {
  const { name, budget } = instance;
  const newId = createId(envelopes);
  const newEnvelope = {
    id: newId,
    name: name,
    budget: budget
  };
  envelopes.push(newEnvelope);
}

module.exports = { getAllEnvelopes, addEnvelope};