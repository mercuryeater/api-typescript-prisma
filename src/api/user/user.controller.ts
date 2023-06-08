import { Request, Response } from "express";
import {
    getAllUsers,
    getUserById,
    postUser,
    updateById,
    deleteUser
    } from './user.service'

export async function handleGetAllUsers(req: Request, res: Response) {
    const users = await getAllUsers();
    return res.json(users);
}

export async function handleGetUserById(req: Request, res: Response) {
    const id = req.params.id;
    const user = await getUserById(id);

    if(!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
}

export async function handlePostUser(req: Request, res: Response) {
    const data = req.body;

    const newUser = await postUser(data); 
    return res.json(newUser);
}

export async function handleUpdateById(req: Request, res: Response) {
    const id = req.params.id;
    const data = req.body;
    const updateUser = await updateById(id , data);

    return res.json(updateUser);
}

export async function handleDeleteUser(req: Request, res: Response) {
    const id = req.params.id;
    const user = await deleteUser(id);
    if(!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.json({message: `deleted user with id: ${id}`});
}