import React,{useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "./Home.css"

const View = () => {

  const {id} = useParams();
  
  const [user, setUser] = useState([]);

 useEffect(() => {
   if(id){
      getSingleUser(id);
   }
 }, [id])
 
 const getSingleUser = async (id)=>{
  const response = await axios.get(`http://localhost:5000/users/${id}`);
  if(response.status === 200){
   setUser({ ...response.data[0]});
 }
 }

  return (
    <div className='mt-20 ml-96  border-4 border-dashed w-max p-8  item-center'>
      <div className='-mt-8 -ml-8 -mr-8 mb-4 p-4 bg-green-800'>
        <h1 className='text-center text-2xl text-white font-mono'>View User Details</h1>
      </div>
      <div className='flex mb-4'>
        <strong className='text-xl mr-2'>ID:</strong>
        <div className='text-xl'>{id}</div>
      </div>
      <div className='flex mb-4'>
        <strong className='text-xl mr-2'>Name:</strong>
        <div className='text-xl'>{user && user.name}</div>
      </div>
      <div className='flex mb-4'>
        <strong className='text-xl mr-2'>Email:</strong>
        <div className='text-xl'>{user && user.email}</div>
      </div>
      <div className='flex mb-4'>
        <strong className='text-xl mr-2'>Contact:</strong>
        <div className='text-xl'>{user && user.contact}</div>
      </div>
      <div className='text-center'>  
      <Link to="/">
        <button className='btn btn-view' >Go Back</button>
      </Link>
      </div>
    </div>
  )
}

export default View;