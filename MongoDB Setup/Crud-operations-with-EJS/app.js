import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userModel from './models/user.js'; // Import the user model

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


// Set EJS as the view engine
//what is the view engine?
// A view engine is a template engine that allows you to generate HTML dynamically on the server side. It enables you to create reusable templates and render data into those templates before sending the final HTML to the client. In this case, EJS (Embedded JavaScript) is being used as the view engine, which allows you to embed JavaScript code within your HTML templates.
app.set('view engine', 'ejs');
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory



// Routes
app.get('/', (req, res) =>{
    res.render("index");

});

app.get('/read', async (req, res) =>{
    let allusers = await userModel.find();
    res.render("read", { users: allusers });
});
//not edited help me to edit this code

app.get('/edit/:userid', async (req, res) =>{
    let user = await userModel.findById(req.params.userid);
    res.render("edit", { users: user });
});

app.post('/edit/:userid', async (req, res) =>{
    let {name, email, image} = req.body;
    let updatedUser = await userModel.findByIdAndUpdate(req.params.userid, {
        name,
        email,
        image
    }, { new: true });
    res.redirect('/read');
});

app.post('/create', async (req, res) =>{
    // Handle form submission and create a new record in the database
    let {name, email, image} = req.body;
    let createdUser = await userModel.create({
        name, 
        email, 
        image
    })
    res.send(createdUser);
});

app.listen(3000, () =>{
    console.log('Server is running on http://localhost:3000');
});
