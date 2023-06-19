import { createContext, useEffect, useReducer, useState } from 'react';

export const NPSContext = createContext();

const initialState = {
  parks: [],
  mountains: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PARKS':
      return { ...state, parks: action.payload };
    case 'SET_MOUNTAINS':
      return { ...state, mountains: action.payload };
    default:
      return state;
  }
}

export  const NPSContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [parks, setParks] = useState(
    JSON.parse(localStorage.getItem('parks')) || []
  );
  const [mountains, setMountains] = useState(
    JSON.parse(localStorage.getItem('Mountains')) || []
  );

  useEffect(() => {
    localStorage.setItem('parks', JSON.stringify(parks));
  }, [parks]);
  useEffect(() => {
    localStorage.setItem('mountains', JSON.stringify(mountains));
  }, [mountains]);

  return (
    <NPSContext.Provider value={{ state, dispatch, parks, setParks, mountains, setMountains }}>
      {children}
    </NPSContext.Provider>
  );
};
