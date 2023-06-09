import { Router } from 'express';
import {
    handleGetAllReviews,
    handleCreateReview,
    handleGetReviewById,
    handleDeleteReview,
    handleUpdateReview
} from './review.controller'

const router = Router();

router.get('/', handleGetAllReviews)

router.get('/:id', handleGetReviewById)

router.post('/', handleCreateReview)

router.patch('/:id', handleUpdateReview)

router.delete('/:id', handleDeleteReview)

export default router;