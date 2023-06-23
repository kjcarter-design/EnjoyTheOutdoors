import { createContext, useEffect, useReducer, useState } from 'react';

const nationalParksData = require('./assets/data/nationalparks.json');
const parkLocationsData = require('./assets/data/locations.json');
const parkTypesData = require('./assets/data/parktypes.json');
const mountainsData = require('./assets/data/mountains.json');

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

export const NPSContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
	const [parks, setParks] = useState([]);
	const [locations, setLocations] = useState([]);
	const [parkTypes, setParkTypes] = useState([]);
	const [mountains, setMountains] = useState([]);

	useEffect(() => {
		const allParks = nationalParksData.parks.flat();
		// const allParkTypes = parkTypesData.flat();
		// const allLocations = parkLocationsData.flat();
		const allMountains = mountainsData.mountains.flat();
		setParks(allParks);
		setLocations(parkLocationsData);
		setParkTypes(parkTypesData);
		setMountains(allMountains);
	}, []);
	

	return (
		<NPSContext.Provider
			value={{
				state,
				dispatch,
				parks,
				setParks,
				locations,
				setLocations,
				parkTypes,
				setParkTypes,
				mountains,
        setMountains,
			}}
		>
			{children}
		</NPSContext.Provider>
	);
};
