let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with run model

let Run = require('../models/run')

module.exports.displayRuns = (req,res,next)=>{
    Run.find((err, runs)=>{
      if(err)
      {
        return console.error(err);      
    }
    else
    {
        res.render('run/list',{
            title: 'Running Records', 
            Runs: runs
        });
    }  
    });
};
/*CRUD operations*/

/*Add operation*/
/*get route to display the new add-page - create operation*/
module.exports.displayAdd = (req,res,next)=>{

    res.render('run/add',{title:'Add Run'});

};

/*Post route for processing the add-page - create opertion*/
module.exports.processAdd = (req,res,next)=>{

    let newRun =  Run ({
        Day: req.body.Day,
        Name: req.body.Name,
        Distance: req.body.Distance,
        Time: req.body.Time,
        Speed: req.body.Speed
    });
    Run.create(newRun, (err, Run) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/runs');
        }
    })

};

/* Edit operation*/
/* Get route for displaying the edit operation - update operation*/
module.exports.displayEdit = (req,res,next)=>{
    let id = req.params.id;
    Run.findById(id,(err, runToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('run/edit',{title:'Edit Run', run:runToEdit});
        }
    });
    
};

/* Post route for displaying the edit operation - */
module.exports.processEdit = (req,res,next)=>{
    let id = req.params.id;
    let updateRun = Run({
        "_id":id,
        Day: req.body.Day,
        Name: req.body.Name,
        Distance: req.body.Distance,
        Time: req.body.Time,
        Speed: req.body.Speed
    });
    Run.updateOne({_id:id}, updateRun,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/runs');
        }
    });

    
};

/*Delete operation */
/*Get to perform delete Operation - deletion*/
module.exports.Delete = (req,res,next)=>{
    let id = req.params.id;
    Run.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/runs');
        }
    });
};
