import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function getAllReviews() {
    const reviews = await prisma.reviews.findMany();
    return reviews;
}

export async function getReviewById(id: string) {
    const review = await prisma.reviews.findFirst({
        where:{
            id: id,
        }
    })
    return review;
}

export async function createReview(data: Prisma.reviewsCreateInput) {
    const newReview = await prisma.reviews.create({
        data
    })
    return newReview;
}

export async function updateReview(data: Prisma.reviewsCreateInput) {
    const editedReview = await prisma.reviews.update({
        where:{
            id: data.id,
        },
        data
    })
}

export async function deleteReview(id: string) {
    const deletedReview = await prisma.reviews.delete({
        where:{
            id: id,
        }
    })
    return deletedReview;
}