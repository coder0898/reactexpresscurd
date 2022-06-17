import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import "./Home.css"

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
     getUserData();
  }, [])
  
 const getUserData = async ()=>{
     const response = await axios.get("http://localhost:5000/users");
     if(response.status === 200){
      setData(response.data);
    }
 }
 
 const onDeleteUser = async (id) =>{
   if(window.confirm("Are you sure wan6t to delete!!")){
      const response = await axios.delete(`http://localhost:5000/users/${id}`);
     if(response.status === 200){
      toast.success(response.data);
      getUserData();
    }
   }
 }

  console.log("data=>",data);

  return (
    <div>
       <table className='style-table'>
         <thead>
          <tr>
           <th>SNo.</th>
           <th>Name</th>
           <th>Email</th>
           <th>Contact</th>
           <th>Action</th>
          </tr>
         </thead>
         <tbody>
          { data && 
             data.map((item,index)=>{
                return(
                  <tr key={index}>
                     <th>{index+1}</th>
                     <td>{item.name}</td>
                     <td>{item.email}</td>
                     <td>{item.contact}</td> 
                     <td>
                        <Link to={`/edit/${item.id}`}>
                           <button className='btn btn-edit'>Edit</button>
                        </Link>
                        <button className='btn btn-delete' onClick={()=> onDeleteUser(item.id)}>Delete</button>
                        <Link to={`/view/${item.id}`}>
                           <button className='btn btn-view'>View</button>
                        </Link>
                     </td>
                  </tr>
                )
             })
          }
         </tbody>
       </table>
    </div>
  )
}

export default Home;