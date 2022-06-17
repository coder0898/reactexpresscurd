import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const AddEdit = () => {

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: ""
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id])

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  }

  const navigate = useNavigate();

  const addContactUser = async (userData) => {
    const response = await axios.post("http://localhost:5000/user", userData);
    if (response.status === 200) {
      toast.success(response.data);
    }
  }

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const { name, email, contact } = state;

  const updateContactUser = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/users/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please add data !!!")
    } else {
      if (!id) {
        addContactUser(state);
      } else {
        updateContactUser(state, id);
      }
      navigate("/");
    }
  }

  return (
    <div className='mt-10 ml-96  border-4 border-dashed w-1/3  p-10'>
      <div className='-mt-10 -ml-10 -mr-10 mb-4 p-4 bg-orange-500'>
        <h1 className='text-center text-2xl text-white font-mono'>Add User Details</h1>
      </div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label className='text-xl mb-2 font-semibold ' htmlFor='name'>Name:</label>
        <input className='p-2 rounded mb-2 text-pink-500 border-2 border-indigo-600 hover:border-red-600 text-xl ' type="text" id='name' name='name' placeholder=' Enter your Name...' onChange={handleInputChange} value={state.name} />

        <label className='text-xl mb-2 font-semibold ' htmlFor='email'>Email:</label>
        <input className='p-2 rounded mb-2 text-pink-500 border-2 border-indigo-600 hover:border-red-600 text-xl' type="email" id='email' name='email' placeholder=' Enter your Email...' onChange={handleInputChange} value={state.email} />

        <label className='text-xl mb-2 font-semibold ' htmlFor='contact'>Contact:</label>
        <input className=' p-2 rounded mb-2 text-pink-500 border-2 border-indigo-600 hover:border-red-600 text-xl' type="number" id='contact' name='contact' placeholder=' Enter your Contact...' onChange={handleInputChange} value={state.contact} />
        <input className='text-xl text-white bg-green-500 rounded hover:bg-white hover:border-2 hover:border-green-500 hover:text-green-500 mt-2 -m-2' type="submit" value={id ? "Update" : "ADD"} />
      </form>
    </div>
  )
}

export default AddEdit;