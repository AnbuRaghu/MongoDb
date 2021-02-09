const { json } = require('body-parser')
const City=require('../models/city')

// getCityList function to return all the location list for dropdown
exports.getCityList=(req,res,next)=>{
    City.find().then(result=>{
        res.status(200).json({message:'city fetches successfully',city:result})
    })
}

// addCityList to addlocation to Db
exports.addCityList=(req,res,next)=>{
    const name=req.body.name;
    const city_id=req.body.city_id
    const location_id=req.body.location_id
    const country_name=req.body.country_name
    const Cities=new City({name:name,city_id:city_id,location_id:location_id,country_name:country_name})
    Cities.save().then(result=>{
        res.status(200).json({message:'city added successfully'})
        console.log(Cities)
    }).catch(err=>{
        console.log(err)
    })
}