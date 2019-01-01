// Redux Cycle

/* 
----------------
Action Creators: 
----------------
 Any time we need to change state of our app, we call an Action Creator, calling and Action Creator is going to produce an Action Object. 

 -------
 Action:
 -------
 The Action Object described how we want to change the data inside the Object.

 ---------
 dispatch:
 ---------
  The Action object gets feed to the dispatch function and make copies of the Action Object and feed those copies objects t each of the differant Reducers.

  ---------
  Reducers:
  ---------
  Are going to process those actions modify there data and return some new data.
  
  ------
  State:
  ------
  The data returns in a new state Object, and wait until we need to update state again.
  */

/* --------------------
  Redux Libary Functions
  -----------------------
  calling Action Creators
  */
