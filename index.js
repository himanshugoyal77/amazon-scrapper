import axios from "axios";
import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;
const apiKey = "3ee6f556892fd262728a6cc659bcb5a3"
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

 app.use(express.json());

 app.get('/', (req, res)=> {
    res.send("hi from lemon")
 })

 //get product details
 app.get('/product/:productId', async (req, res)=> {
    const {productId} = req.params;

    try{
         const response = await axios.get(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
         res.json(response.data)
         console.log(response)
    } catch(err){
        console.log(err.message)
    }
 })

 //get product Reviews
 app.get('/product/:productId/reviews', async (req, res)=> {
    const {productId} = req.params;

    try{
         const response = await axios.get(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);
         res.json(response.data)
         console.log(response)
    } catch(err){
        console.log(err.message)
    }
 })

 //get product offers
 app.get('/product/:productId/offers', async (req, res)=> {
    const {productId} = req.params;

    try{
         const response = await axios.get(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
         res.json(response.data)
         console.log(response)
    } catch(err){
        console.log(err.message)
    }
 })
 
 //get search results
 app.get('/search/:searchQuery', async (req, res)=> {
    const {searchQuery} = req.params;

    try{
         const response = await axios.get(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`);
         res.json(response.data)
         console.log(response)
    } catch(err){
        console.log(err.message)
    }
 })



app.listen(PORT, ()=> {
    console.log("server running on port")
})