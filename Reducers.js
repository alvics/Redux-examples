console.clear();
// Reducers goal- take the existing data(oldListOfClaims) some (action), modify and return the existing data based upon the contents of the action.

// Actions no.1 & 1b / Create Policies
const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};

// Actions no.2 / Create Claim
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action form!
    return [...oldListOfClaims, action.payload]; // adding the payload to exsiting list.
  }

  // we don't care about the action form!
  return oldListOfClaims;
};

// Actions / accounting
const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfClaim;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

// -----------------------------------------------
// Using Redux to put it all together
const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

// Test actions
// Create
store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jack', 30));
store.dispatch(createPolicy('Bill', 40));
// Claim
store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Bill', 50));
// Delete
store.dispatch(deletePolicy('Alex'));

console.log(store.getState());
