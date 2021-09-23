import React, {useEffect, useState} from 'react';
import Loader from "react-loader-spinner";
import './App.css';
import axios from "axios";
import {baseApiUrl} from '../../const';

function App(){

    const [someData, setSomeData] = useState(null);
    const [loadingStatus, setLoadingStatus] = useState(false);
    const url = `${baseApiUrl}/test-route`;

    useEffect(() => {
        if(!someData){
            setLoadingStatus(true);
            axios.get(url)
                .then(data => {
                    const {data : respondedData} = data;
                    console.log('response on url', data);
                    setSomeData(respondedData);
                })
                .catch(e => {console.error(e)})
                .finally(() => {
                    setLoadingStatus(false);
                })
        }
    },[someData])

    return (
        <> 
            {loadingStatus ? <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={40}
                width={40}
            /> : someData && <div>{someData.message}</div>}
        </>
    );
}

export default App;
