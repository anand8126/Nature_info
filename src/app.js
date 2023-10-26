const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
const hbs=require('hbs')

const route=require("./routes/main.js");
const detail=require('./model/details.js');
const slider=require('./model/slider.js');
const services = require("./model/services.js");

app.use(bodyParser.urlencoded ({
    extended:true
}))

app.use("/static",express.static("public"))
app.use("", route);



// Template engine

app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials");


// DB Connections using call back Function
const  connection= async() => { 
    try{

        await mongoose.connect("mongodb://localhost:27017/NodeJS");
        console.log("Database Connected!");


        // services.create([
        //     {
        //         icon:'fab fa-accusoft',
        //         title:'Provide best courses',
        //         description:'We provide courses that helps our student in learning and in placements',
        //         linkText:'www.paryug.com',
        //         link:'Check'
        //     },
        //     {
        //         icon:'fab fa-accusoft',
        //         title:'Provide best courses',
        //         description:'We provide courses that helps our student in learning and in placements',
        //         linkText:'www.paryug.com',
        //         link:'Check'
        //     },
        //     {
        //         icon:'fab fa-affiliatetheme',
        //         title:'Learn Projects',
        //         description:'We provide courses that helps our student in learning and in placements',
        //         linkText:'www.paryug.com',
        //         link:'Learn more'
        //     },
        //     {
        //         icon:'fab fa-accusoft',
        //         title:'Provide best courses',
        //         description:'We provide courses that helps our student in learning and in placements',
        //         linkText:'www.paryug.com',
        //         link:'Check'
        //     },
        //     {
        //         icon:'fab fa-accusoft',
        //         title:'Provide best courses',
        //         description:'We provide courses that helps our student in learning and in placements',
        //         linkText:'www.paryug.com',
        //         link:'Check'
        //     },

        //     {
        //         icon:'fab fa-accusoft',
        //         title:'Provide best courses',
        //         description:'We provide courses that helps our student in learning and in placements',
        //         linkText:'www.paryug.com',
        //         link:'Check'
        //     },

        // ])

        // slider.create([
        //     {
        //         tittle:"learn Java in very easy manner",
        //         subTittle:"java is one of the most popular programming Languages",
        //         imagesUrl:"/static/images/s1.jpg",
        //         class:"active"
        //     },
        //     {
        //         tittle:"Node JS is Runtime Enviroments",
        //         subTittle:"Node JS is not a Languages ",
        //         imagesUrl:"/static/images/s2.jpeg"
        //     },
        //     {
        //         tittle:"Angular is FrameWork to used in Frontend Technology",
        //         subTittle:"Angualr is popular framework ",
        //         imagesUrl:"/static/images/s3.jpeg"
        //     }
        // ])

        // detail.create({
        //     brandName:"Node JS",
        //     brandIconUrl:"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
        //     links:[
        //         {
        //             label:"Home",
        //             url:"/"
        //         },
        //         {
        //             label:"Services",
        //             url:"/service"
        //         },
        //         {
        //             label:"Gallery",
        //             url:"/gallery"
        //         },
        //         {
        //             label:'About',
        //             url:"/about"
                    
        //         },
        //         {
        //             label:"Contact-Us",
        //             url:"/contact-us"
        //         }
        //     ]
        // })

    }catch(error){
        console.error("Erorr connection to MongoDB",error);
    }
}




app.listen(process.env.PORT | 3000, () => {
    console.log("Server is Started!")
    connection();
})