const mongoose=require('mongoose')
// initializing mongoose schema
const Schema=mongoose.Schema;

// registering the city schema
const CitySchema=new Schema({
    name:{
        type:String,
        required:true// here we say it is mandatory field
    },
    city_id:{
        type:String,
        required:true
    },
    location_id:{
        type:String,
        required:true
    },
    country_name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('City',CitySchema)// exporting the model mongoose package checks if we have the collection in the name of City in our db
