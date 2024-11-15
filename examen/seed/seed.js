import fs from "fs/promises";
import {PrismaClient} from "@prisma/client";
 



const prisma =new PrismaClient()
const data = require('./data_seed.json');

 async function seedRun() {

  const file = await (fs.open('./seed/db_data_seed.json', 'r'))
  const data = await file.readFile({encoding: 'utf-8'});
  file.close();
  const artworks=JSON.parse(data);
    await prisma.artwork.createMany({data:artworks});
       
 }
 
 seedRun().then((result)=>{
    console.log("Base de données est bien remplie avec les données d'artwork.");})
    .catch((e)=>{
      console.log(e);})
    .finally(async ()=>{
      await prisma.$disconnect();
});


