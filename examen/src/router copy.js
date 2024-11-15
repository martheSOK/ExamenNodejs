import express from "express";
import ArtWorkController from "./ArtWorkController.js";

export default class Router{
    router
    artWorkController

    constructor(){
        this.router = express.Router();
        this.artWorkController = new ArtWorkController();
        this.routes();
    }



    routes(){
    this.router.post('/', this.artWorkController .create.bind(this.artWorkController));
    this.router.get('/', this.artWorkController.getAll.bind(this.artWorkController));
    this.router.put('/:id',this.artWorkController.update.bind(this.artWorkController));
    this.router.delete('/:id', this.artWorkController.delete.bind(this.artWorkController));
    this.router.get('/filter', this.artWorkController.filter.bind(this.artWorkController));
    
    }

    getRoute(){
        this.router;
    }
}




