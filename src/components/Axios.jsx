import React,{useState, useEffect} from 'react'
import axios from 'axios';
const Axios = () => {
    const [ data , setData] = useState(null);
    // Fetching Data From API
    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/image/random").then((resp)=>{
           setData(resp.data.message);
        });



    },[]);
  return (
    <div>
        <img  width={300} src={data} alt="data" />
    </div>
  )
}

export default Axios