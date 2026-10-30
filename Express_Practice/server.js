import express from 'express';
const app = express();
app.get("/",(req,res) => {
    res.send("Hello Harsh");
});

//Create GET Request

app.get("/create/:id", (req, res) => {
    res.json([
        {id: 1, name: "Harsh"}
    ]);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});