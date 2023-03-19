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

const getEnvelopeById = (arr, searchId) => {
  const id = Number(searchId);
  const envelope = arr.find((item) => item.id === id);
  if(!envelope) {
    console.log("Envelope not Found!")
  } else {
  return envelope;
}
}

const updateEnvelope = (arr, id, instance) => {
    const { name, budget } = instance;
    const envelope = getEnvelopeById(envelopes, id);
    if (!envelope) {
      return false;
      } else {
    envelope.name = name;
    envelope.budget = budget;
    return envelope;
  }
};




module.exports = { getAllEnvelopes, addEnvelope, getEnvelopeById, updateEnvelope };