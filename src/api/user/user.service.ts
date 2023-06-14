import { Prisma,  PrismaClient } from "@prisma/client";
import { usersCreateData } from './user.type';
import bcrypt from "bcrypt";

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

export async function postUser(input: usersCreateData) {

    if (!input.password) {
        throw new Error("Please enter password");
    }

    //Hash password
    //1. salt, tiene un costo, el standard es 12
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(input.password, salt)

    const newUser = await prisma.users.create({
        data: input,
    })
    return newUser;
}

export async function updateById(id: string , data:  usersCreateData){
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