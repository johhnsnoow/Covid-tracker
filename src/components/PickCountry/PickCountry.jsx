import React ,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './PickCountry.module.css';
import {fetchCountries} from '../../api';
const PickCountry = ({handleCountryChange}) => {
    const [fetchedCountries,setFetchedCountries] = useState([]);
    useEffect(()=> {
        const fetchapi = async () => {
           setFetchedCountries(await fetchCountries());
        }

        fetchapi();
        
    },[setFetchedCountries]);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default PickCountry;