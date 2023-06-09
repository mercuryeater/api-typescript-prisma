import { Router } from 'express';
import { 
    handleGetAllPosts,
    handleGetPostById, 
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost,
 } from './posts.controller';

const router = Router();

router.get('/', handleGetAllPosts); 

//getById
router.get('/:id', handleGetPostById)

//post
router.post('/', handleCreatePost);

//patch
router.patch('/:id', handleUpdatePost);

//delete
router.delete('/:id', handleDeletePost);


export default router;