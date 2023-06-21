import { createContext, useEffect, useReducer, useState } from 'react';

/*
import * as nationalParksData from './assets/data/nationalparks.json';
import * as locationsData from './assets/data/locations.json';
import * as parkTypesData from './assets/data/parktypes.json';
import * as mountainsData from './assets/data/mountains.json';
*/

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
		const allParkTypes = parkTypesData.flat();
		const allLocations = parkLocationsData.flat();
		const allMountains = mountainsData.mountains.flat();
		setParks(allParks);
		setLocations(parkLocationsData);
		setParkTypes(parkTypesData);
		setMountains(allMountains);
	}, []);

	/*
  useEffect(() => {
    console.log(parks)
    console.log(locations)
    console.log(parkTypes)
    console.log(mountains)
  },[parks, locations, parkTypes, mountains])
*/

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
