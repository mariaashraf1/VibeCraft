import { prisma } from "../config/prisma.js";

export const getAllHobbies = async () => {
    return await prisma.hobby.findMany({
        include: {
            moods: true
        }
    });
}
export const getAllHobbiesById=async(id)=>{
    return await prisma.hobby.findUnique({
        where:{id:parseInt(id)},
        include:{moods:true}
    })
} 

export const createHobby = async (data) => {
    return await prisma.hobby.create({
        data
    })
}
export const updateHobby = async (id, data) => {
    return await prisma.hobby.update({
        where: { id: parseInt(id) },
        data
    });
}