// Use the useEffect() hook to fetch and display data from an API when the
// component mounts.
import React, { useEffect } from 'react'
import { useState } from 'react'
const FetchData = () => {
    
    const [data, setdata] = useState([])
    const url="https://fakestoreapi.com/products"
    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then(res=>setdata(res))
    },[url])
        

    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Discription</td>
                        <td>Category</td>
                        <td>Image</td>
                        <td>Rating</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((i,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{i.id}</td>
                                    <td>{i.title}</td>
                                    <td>{i.price}</td>
                                    <td>{i.description}</td>
                                    <td>{i.category}</td>
                                    <td><img src={i.image} alt="" height={50} width={50}/> </td>
                                    <td>{i.rating.rate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default FetchData
