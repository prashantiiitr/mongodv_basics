const moongose=require('mongoose');
const twwetSchema=new moongose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,


    },
    comments:[
        {   
            type:moongose.Schema.Types.ObjectId,
            ref:'comment'
        }

    ]
},{timestamps:true});
const Tweet=moongose.model('Tweet',twwetSchema);
module.exports=Tweet;