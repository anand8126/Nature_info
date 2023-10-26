 const express=require('express');

 const router=express.Router();

const detail=require("../model/details.js");

const slider = require('../model/slider.js');
const service = require('../model/services.js');
const contact=require('../model/contact.js')

 router.get("/", async(req, res) =>{
   const details=await detail.findOne({"_id":"653358709280541baad95270"});
   const sliders=await slider.find();
   const services=await service.find();
   console.log(services);
  //  console.log(sliders);
  //  console.log(details);
    res.render("index",{
      details:details,
      sliders:sliders,
      services:services,
    });
 })



 router.get("/gallery", async(req, res) =>{
  const details=await detail.findOne({"_id":"653358709280541baad95270"});
    res.render("gallery",{
      details:details
    })
 });


 router.post("/process-contact-form", async(req, res) => {
  console.log("form submitted!");
  console.log(req.body);
  try{

    const data=await contact.create(req.body);
    console.log(data);
    res.redirect("/");

  }catch(error){
    console.log(error);
    res.redirect("/");
  }
 })


 module.exports=router;