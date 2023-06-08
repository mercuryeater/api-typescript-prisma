import { Router } from 'express';

import { 
    handleGetAllUsers,
    handleGetUserById, 
    handlePostUser, 
    handleUpdateById,
    handleDeleteUser, 
 } from './user.controller'

const router = Router();

router.get('/', handleGetAllUsers);

router.get('/:id', handleGetUserById)

router.post('/', handlePostUser)

router.patch('/:id', handleUpdateById)

router.delete('/:id', handleDeleteUser)

export default router;

