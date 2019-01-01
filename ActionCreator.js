// Action Creator 
console.clear();
//All Action Creators return a JS Object
// People droping off a form (Action Creators)

// Action Creator no.1
const createPolicy = (name, amount) => {
  return {
    // returns an Action
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

// Action Creator no.1b
const deletePolicy = name => {
  return {
    type: 'DELETE_POLICY',
    payload: { name, name }
  };
};
// Action Creator no.2
const createClaim = (name, amountOfClaim) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfClaim: amountOfClaim
    }
  };
};
