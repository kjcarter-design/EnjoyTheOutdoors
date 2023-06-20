import { useState, useEffect, useContext} from 'react'
import { NPS_API_KEY } from '../constants'
import {NPSContext} from '../DataProvider'
import axios from 'axios'

export default function useFetchNPS() {
    const { parks, setParks, mountains, setMountains, dispatch} = useContext(NPSContext)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            isLoading = true
            try {
                const response = await axios.get(
                    `https://developer.nps.gov/api/v1/parks`
                );
            }
            catch (err){
                setError(err.message)
            }
            finally{
                setIsLoading(false)
            }
        }
    
        return cleanUp = () => {
            
        }
    }, []);

    return {

    }
}
