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
    const envelope = getEnvelopeById(arr, id);
    if (!envelope) {
      return false;
      } else {
    envelope.name = name;
    envelope.budget = budget;
    return envelope;
  }
};

const deleteEnvelope = (arr, id) => {
  const index = arr.findIndex(function (item) {
    return item.id === parseInt(id);
  });
  console.log(index);
  if (index === -1) {
    return "Invalid index";
  } else {
  arr.splice(index, 1);}
  return arr;

}

const transferBudget = (arr, fromId, toId, instance) => {
  const { budget} = instance;
		const originEnv = getEnvelopeById(arr, fromId);
		const destinationEnv = getEnvelopeById(arr, toId);

    if (!originEnv || !destinationEnv) {
      return  "Envelope Not Found";
		}
    
		if (originEnv.budget < budget) {
			return "Amount to transfer exceeds envelope budget funds"
		}
    else {
		originEnv.budget -= budget;
		destinationEnv.budget += budget;
    return arr;
    }
	}


module.exports = { getAllEnvelopes, addEnvelope, getEnvelopeById, updateEnvelope, deleteEnvelope, transferBudget };