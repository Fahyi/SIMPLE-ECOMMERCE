import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ProductHistoryCard from "./ProductHistoryCard"

const History = () => {
    const [historyItem, setItem] = useState([])
    const [dum, setDum] = useState([])
    let item = historyItem.map(a => a.item)
    
    useEffect(async () => {
        await axios.get("http://localhost:5000/api/history")
            .then((data) => {
                setItem(data.data)
            })
    }, [])
    console.log(item.flat());
  return (
            
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold m   b-8">Product History</h1>
      <div className="flex justify-center flex-wrap">
        
        <ul>
            {item?.map( a => (
                <div className='flex justify-around'>
                <p>{a.name}</p>
                <p>{a.quantity}</p>
                </div>
            ))}
        </ul>
      </div>
    </div>

  )
}

export default History
