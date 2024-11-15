
import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import ArtWorkRouter from "./router.js";
dotenv.config();

const app = new express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
const artworkRouter= new ArtWorkRouter();
app.use("/artworks" , artworkRouter.registrateRouter());

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
});


export default app; 

