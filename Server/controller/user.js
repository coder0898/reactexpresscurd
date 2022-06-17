import { v4 as uuid } from "uuid";

let users = [];

export const getUser = (req,res)=>{
    res.send(users);
}

export const createUser = (req,res)=>{
    const user = req.body;

    users.push({...user,id: uuid() });
    res.send("User Added Successfully");
    
}

export const getUsers = (req,res)=>{
    const singleUser = users.filter((user)=> user.id === req.params.id);
    res.send(singleUser);
}

export const deleteUsers = (req,res)=>{
     users = users.filter((user)=> user.id !== req.params.id);
    res.send("User Deleted Successfully");
}

export const updateUsers = (req,res)=>{
    const upUser = users.find((user)=> user.id === req.params.id);

    upUser.name = req.body.name;
    upUser.email = req.body.email;
    upUser.contact = req.body.contact;

    res.send("Update data Successfully");
}