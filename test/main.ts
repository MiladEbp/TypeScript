import {} from 'mocha';
import  promise = require('q');
import * as mongoose from 'mongoose';
import {fail}  from "assert";

const url:string = "mongodb://127.0.0.1:27017/test";




describe("CRUD", function(){

    it("connect", function(done){

       mongoose.createConnection(url,function(err){// if use createConnection Instead of connect because don't using {useMongoClient: true}
            if(err){
               fail("Do npt connect");
            }else{
                console.log("connect to data base");
                done();
            }
       });// createConnection

    });//it

    it("Read collection", function(){

    });


});//describe




