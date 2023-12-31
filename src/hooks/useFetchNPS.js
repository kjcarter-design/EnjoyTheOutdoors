import { useState, useEffect, useContext } from 'react';
import { NPSContext } from '../DataProvider';
import axios from 'axios';

export default function useFetchNPS() {
    const { parks, setParks } = useContext(NPSContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // TODO: Fix hardcoding of api key
/*
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const options = {
                    method: 'GET',
                    url: 'https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks',
                    headers: {
                        'X-Api-Key': 'CWhhFeJRYd6ortLjtp6k9XZLHEJuLYirMZv1rfWD',
                        'X-RapidAPI-Key': '73d99d75e2msh095dfc413d2cb87p19ddacjsnef9652c08e69',
                        'X-RapidAPI-Host': 'jonahtaylor-national-park-service-v1.p.rapidapi.com'
                    }
                };

                const response = await axios.request(options);
                setParks(response.data.data);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [setParks]);
*/
    return {
        parks,
        isLoading,
        error
    }
}
