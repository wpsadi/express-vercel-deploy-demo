import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use((req,res,next)=>{
    console.log(req.url)
    console.log("Request received");
    // console.log(req.query);
    console.log(req.params );
    next();
})

app.use("/hi/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
  });
  


app.use((req,res,next)=>{
    res.status(404).send("Not found")
})

app.listen(3001, () => console.log("Server ready on port 3000."));


export default app;