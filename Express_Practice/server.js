import express from 'express';
const app = express();
app.get("/",(req,res) => {
    res.send("Hello Harsh");
});
app.listen(3000, () => {
    console.log("Server started Buddy");
});