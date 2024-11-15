
import ArtWorkService from "./ArtWorkService.js";
import * as status from  "./constantes.js";
import bcrypt from 'bcryptjs';

import artworkDataValidator from "./utils.js"
export default class ArtWorkController {

    artWorkService ;
    constructor(){
        this.artWorkService = new ArtWorkService();
    }

    async create(req, res) {
        const data = req.body;
        const validData=artworkDataValidator(data);
        validData.type=data.type;
        validData.title=data.title;
        validData.year=data.year;
        try {
            console.log(data);
            const artwork = await this.artWorkService.create(validData);
            res.status(status.HTTP_STATUS_OK).json(artwork);  
        }
         catch (error) {
            console.log(error);
            res.status(status.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
                error: `${error}`
            });
        }

    }
 
    async getAll(req, res) {
        try {
            
            const artworks= await this.artWorkService.getAll()
            res.status(status.HTTP_STATUS_OK).json(artworks);
       } 
       catch (error) {
            console.log(error);
                res.status(status.HTTP_STATUS_INTERNAL_SERVER_ERROR).json();
       }
    }

    async update(req, res) {
        const id = parseInt(req.params.id);
        const data = req.body;
        const validData=artworkDataValidator(data);
       try {
        
        const artwork = await this.artWorkService.update(validData,id)
        res.status(status.HTTP_STATUS_OK).json(artwork);
       }
        catch (error) {
            console.log(error);
            res.status(status.HTTP_STATUS_INTERNAL_SERVER_ERROR).json();
            }
    }

    async delete(req, res) {
        const id = parseInt(req.params.id);
        try {
            
            const artwork= await this.artWorkService.delete(id)
            res.status(status.HTTP_STATUS_OK).json(artwork);
        }
        catch (error) {
            console.log(error);
            res.status(status.HTTP_STATUS_INTERNAL_SERVER_ERROR).json();
            }
    }


    async get(req,res){
        const id = parseInt(req.params.id);
        console.log(id);
        try {
        
        const artwork= await this.artWorkService.get(id)
        res.status(status.HTTP_STATUS_OK).json(artwork);
        }
        catch (error) {
            console.log(error);
            res.status(status.HTTP_STATUS_INTERNAL_SERVER_ERROR).json();
            }
    }

    async filter(req, res) {
        const { type, year, artist } = req.query;
        console.log("oui");
        const query = {};
        if (type) query.type = type;
        if (year) query.year = parseInt(year, 10);
        if (artist) query.artist = artist;
        try {
            const artworks = await this.artWorkService.filter(query);
        res.status(status.HTTP_STATUS_OK).json(artworks);
        } 
        catch (error) {
            console.log(error);
            res.send("incorrect")
        }
        
    }
        


    }

  






    



   
    

    

       
        
         
    
         
           
        
    

