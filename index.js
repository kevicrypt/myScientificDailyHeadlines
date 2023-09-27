import express from "express";
import axios from "axios";


const app = express();
const port = 3000;

const apiKey = ""; // Enter your API key here. You can get it from https://newsapi.org

app.use(express.static("public"))



app.get("/", async(req,res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${apiKey}`);
        const result = response.data;
        res.render("index.ejs", { 
            articles: result.articles,
         });
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
})

app.get("/album",(req,res) => {
  res.render("index.ejs",{})
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
