
import {PrismaClient} from "@prisma/client"
 
 const prisma =new PrismaClient()
 
export default class ArtWorkService {

    async getAll(){
       
        try {
         return prisma.artwork.findMany();
         
        } 
        catch (error) {
             throw new Error(error);
        }   
     }


    async create(_data) {
        try {
            return prisma.artwork.create({
                data: _data
            });
        }
         catch (error) {
            throw new Error(error);
        }
    }

   
    async get(id){
        try {
            return prisma.artwork.findUnique({
                where: { id },
            })
           
        } 
        catch (error) {
            throw new Error(error);
        }
    }

    async update(_id, _data){
        try {
            const updatedAwrt = await prisma.artwork.update({
            where: { id: parseInt(_id) },
            data: _data,
        });
        return updatedAwrt;

        } 
        catch (error) {
            throw new Error(error);
        }
    }

    async delete(_id){
        try {
            const deletedArtwork = await prisma.artwork.delete({
            where: { id: parseInt(_id) },
            });
            return deletedArtwork;
        } 
        catch (error) {
            throw new Error(error);
        }
    }

    async filter(query) {
        return prisma.artwork.findMany({ where: {
                 type: query.type ,
                 year: query.year ,
                 artist: query.artist ,
            
        } });
      }

}

  

   

