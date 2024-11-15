import fs from "fs/promises";
import {PrismaClient} from "@prisma/client";
// import fileurl from "node:url"
// import path from "node:path" 



const prisma =new PrismaClient()


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


// const current=fileurl.fileURLToPath(import.meta.url)
// console.log(current);
// const direName=path.direName(current)
// console.log(direName);
// const seed_file_path=direName+"/db_data_seed.json"
// async function seedRun(){
//   try {
//     const file=await fs.open(seed_file_path,'r');
//     const data = await file.readFile({encoding: 'utf-8'});
//     file.close();
//     const artworks=JSON.parse(data);
//     await prisma.artwork.createMany({data:artworks});
//   }
//   catch(error){
//     console.log(error);
//   }


//   seedRun().then((result)=>{
//     console.log("Base de données est bien remplie avec les données d'artwork.");})
//     .catch((e)=>{
//       console.log(e);})
//     .finally(async ()=>{
//       await prisma.$disconnect();
// });
//}
