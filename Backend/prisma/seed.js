import { prisma } from "../config/prisma.js";
import fs from "fs";
const hobbies=JSON.parse(fs.readFileSync("data/hobbies.json", "utf-8"));

async function main() {
    console.log("seeding...");
    for(const hobby of hobbies){
        await prisma.hobby.create({
            data: {
                name: hobby.name,
                description: hobby.description,
                image: hobby.image,
                moods:{
                    connectOrCreate: hobby.moods.map((mood)=>({
                        where: { name: mood.name},
                        create: { name: mood.name }
                    }))
                }
            }
        });
    }
    console.log("✅ Database seeded successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });