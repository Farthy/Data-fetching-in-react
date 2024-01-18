import React, {useState, useEffect} from 'react'

const Fetch = () => {
    const [data, setData] = useState(null)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=> response.json())
        .then((data)=>{setData(data.message);
        
        
        });
    },[]);
    return (
    <div>

        <img width={300} src={data} alt='logo' />
    </div>
  )
}

export default Fetch;