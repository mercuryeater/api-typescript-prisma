import { Request, Response } from 'express';

import {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} from './posts.service'

export async function handleGetAllPosts(req: Request, res: Response) {
    const posts = await getAllPosts();
    return res.json(posts);
}

export async function handleGetPostById(req: Request, res: Response) {
    const  id  = req.params.id;
    const post = await getPostById(id);
    if(!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    return res.json(post);
}

export async function handleCreatePost(req: Request, res: Response) {
    const data = req.body
    const post = await createPost(data);
    return res.json(post);
}

export async function handleUpdatePost(req: Request, res: Response) {
    const data = req.body;
    const updatedPost = await updatePost(data);
    return res.json(updatedPost);
}

export async function handleDeletePost(req: Request , res: Response) {
    const { id } = req.params;
    const deletedPost = await deletePost(id);
    return res.json(deletedPost);
}