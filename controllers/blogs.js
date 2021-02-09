// we have to import the models
const { modelName, db } = require('../models/blogs')
const Blog=require('../models/blogs')
exports.getBlogs=(req,res)=>{

    //modelName.methodname
    Blog.find()
    .then((result)=>{
       
        res.status(200).json({message:'Blogs fetched successfilly',blogs:result})
        
    }).catch(err=>{
        res.status(500).json({err:"error occured"})
    })
}

exports.getBlogById=(req,res)=>{
    //to capture an id from request
    const Id=req.params.blogid;//blogid this should be same name as the name where in route we defined /from routes file router.get("/getblogsbyid/:blogid", blogController.getBlogById);

    //modelName.methodname
    // Blog.find({_id:Id})
     Blog.findById(Id)// both functions works as same but parsing params is different

    .then(result=>{
        res.status(200).json({message:'Blogs fetched successfilly',blogs:result})
    }).catch(err=>{
        res.status(500).json({err:err})
    })
}

exports.getBlogbyUser=(req,res)=>{
        const userName=req.params.user
    //modelName.methodname
    Blog.find({user:userName}) //the keey name is same as the name in our Db (user)
    .then(result=>{
        res.status(200).json({message:'Blogs fetched successfilly',blogs:result})
    }).catch(err=>{
        res.status(500).json({err:err})
    })
}
exports.addBlog=(req,res)=>{
    const blogmsg=req.body.blogmsg
    const user=req.body.user
    const blogs=new Blog({blogmessage:blogmsg,user:user})
//modelName.methodname
Blog.save()
.then(result=>{
    res.status(200).json({message:'Blogs added successfilly',blogs:result})
}).catch(err=>{
    res.status(500).json({err:err})
})
}
