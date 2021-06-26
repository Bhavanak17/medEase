const Response = require("../models/response");


exports.submitResponse = (req,res) => {
    console.log(req.user);
    const response = new Response ({
        name: req.user.name,
        location: req.user.location,
        queryName: req.body.queryName
    });
    response.save((error, response) => {
        if(error){
            return res.status(400).json({error});
        }
        return res.status(201).json({response});
    } )
};

exports.getResponse = (req, res) => {
    Response.find({})
    .exec((error, responses) => {
        if(error){
            return res.status(400).json({error});
        }
        if(responses){
            const responseList = [];
            for(let response of responses){
                responseList.push({
                    _id:response._id,
                    name: response.name,
                    location: response.location,
                    queryName: response.queryName
                });
            }
            return res.status(201).json({responseList});
        }
    })
}
