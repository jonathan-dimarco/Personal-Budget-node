const envelopes = require('./db');

const getAllEnvelopes =  () => {
return envelopes;
}

const addEnvelope =  (instance) => {
  const newEnvelope =  instance;
  envelopes.push(newEnvelope);
}



module.exports = { getAllEnvelopes, addEnvelope};