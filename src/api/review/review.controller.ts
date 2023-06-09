import { Response , Request } from "express";
import {
    getAllReviews,
    createReview,
    getReviewById,
    deleteReview,
    updateReview
} from './review.service'


export async function handleGetAllReviews(req: Request, res: Response) {
    const reviews = await getAllReviews();
    return res.json(reviews);
}

export async function handleGetReviewById(req: Request, res: Response) {
    const { id } = req.params;
    const review = await getReviewById(id);
    return res.json(review);     
}

export async function handleCreateReview(req: Request, res: Response) {
    const data = req.body;
    const newReview = await createReview(data)
    return res.json(newReview);
}

export async function handleUpdateReview(req: Request, res: Response) {
    const data = req.body;
    const updatedReview = await updateReview(data);
    return res.json(updatedReview);
}

export async function handleDeleteReview(req: Request, res: Response) {
    const { id } = req.params;
    const deletedReview = await deleteReview(id);

    if(!deletedReview) return res.status(404).json({message: 'review not found'});
    return res.json(deletedReview);
}