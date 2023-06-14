import { PrismaClient , Prisma } from "@prisma/client";
import { postsCreateData } from "./posts.type";

const prisma = new PrismaClient();

export async function getAllPosts() {
    const posts = await prisma.posts.findMany();
    return posts;
} 

export async function getPostById(id: string) {
    const post = await prisma.posts.findFirst({
        where: {
            id:id
        }
    })
    return post;
}

export async function createPost(data:  postsCreateData ) {
    const post = await prisma.posts.create({
        data
    })
    return post;
}


//Por que funciona postsCreateInput pero no postsUpdateInput??
export async function updatePost(data:  postsCreateData) {
    const updatedPost = await prisma.posts.update({
        where: {
            id: data.id
        },
        data
    })
    return updatedPost;
}


export async function deletePost(id: string) {
    const toDeletePost = await prisma.posts.delete({
        where: {
            id,
        }
    })
    return toDeletePost;
}