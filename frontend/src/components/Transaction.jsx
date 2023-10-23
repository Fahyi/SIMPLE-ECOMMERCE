import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Transaction = () => {
    const {id} = useParams()
    const [InformationProduct, setInformationProduct] = useState([])
    

    useEffect(() => {
      const fetchData = async () => {
        await axios.get(`http://localhost:5000/api/transaction/${id}`)
            .then(({data}) => setInformationProduct(data.data))
      }
      fetchData()
    }, [])


  return (
    <div> 
        <p>Order ID #{InformationProduct._id}</p>
        <button onClick={() => console.log(InformationProduct.item.map(a => a))}>klik</button>
        {InformationProduct?.item?.map(a => (
          <div className='flex'>
            <ul className='list-none'>
              <li>{a.name}</li>
              <li>{a.quantity}</li>
              <li>{a.price}</li>
            </ul>
          </div>
        ))}   
        <p>Total Bayar {InformationProduct.total_price}</p> 
        <p>Status: {InformationProduct.status}</p>
        <p>Tanggal {InformationProduct.createdAt}</p>
    </div>
  )
}

export default Transaction
