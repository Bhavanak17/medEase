const Query = require("../models/query");

exports.addQuery = (req, res) => {
    console.log(req.user);
    const queryObj = {
        queryName: req.body.queryName,
        userName: req.user.name,
        askedBy: req.user._id
    };

    if(req.file){
        queryObj.queryPicture = "http://localhost:5000/public"+req.file.filename;
    }

    const newQuery = new Query(queryObj);
    newQuery.save((error, query)=>{
        if(error){
            res.status(400).json({error});

        }
        if(query){
            res.status(201).json({query});
        }
    });
}

exports.getAllQuery = (req, res) => {
    Query.find({})
    .exec((error, queries)=>{
        if(error){
            return res.status(400).json({error});

        }
        if(queries){
            const queryList = [];
            for(let query of queries){
                queryList.push({
                    _id: query._id,
                    queryName: query.queryName

                });
            }
            return res.status(201).json({queryList});
        }
    });
}