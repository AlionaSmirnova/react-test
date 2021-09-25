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
          <p>Image Upload</p>
      <form method="post" action="api/pers" encType="multipart/form-data">
        <input type="text" name="nickname" defaultValue="Superman!" /><br/>
        <input type="text" name="realname" defaultValue="Clark Kent"/><br/>
        <input type="text" name="descrip"  defaultValue="he was born Kal-El on the planet Krypton..."/><br/>
        <input type="text" name="power" defaultValue="solar energy absorption and healing factor"/><br/>
        <input type="text" name="phrase" defaultValue="Look up in the sky, it's a bird, it's a plane, it's Superman!" /><br/>
        <input type="file" name="image"/><br/>
        <button type="submit" name="upload">Upload</button>
      </form>

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
