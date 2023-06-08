import { Prisma,  PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllUsers() {
    const users = await prisma.users.findMany();
    return users;
}

export async function getUserById(id: string) {
    const user = await prisma.users.findUnique({
        where: {
            id,
        }
    })
    return user;
}

export async function postUser(data: Prisma.usersCreateInput ) {
    const newUser = await prisma.users.create({
        data
    })
    return newUser;
}

export async function updateById(id: string , data: Prisma.usersCreateInput){
    const updateUser = await prisma.users.update({
        where: {
            id: id,
        },
        data,
    })
    return updateUser;
}

export async function deleteUser(id: string){
    const deletedUser = await prisma.users.delete({
        where: {
            id,
        }
    })
    return deletedUser;
}