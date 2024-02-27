

import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()


/*
async function getUsers() {
    const allUsers = await prisma.usuario.findMany();
    console.log(allUsers)
}

getUsers()
    .catch(err => {
        throw err
    })
    .finally(async () => { 
        await prisma.$disconnect()
    });


const users = [
    {id: 1, name: "Will_Gispiela", password: '1642'},
    {id: 2, name: "Will_Comnisky", password: '1212'},
    {id: 3, name: "Will_03", password: '3030'}
] 


//const getUsers = () => {     return users }

const searchUserId = (id: number) => {
    return users.find(user => user.id == id)
}

const searchUserIndex = (id: number) => {
    return users.findIndex(user => user.id == id)
}

const getUserByName = (name: string) => {
    return users.find(user => user.name === name)
}


export {getUsers, searchUserId,searchUserIndex, getUserByName}
*/