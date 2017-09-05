import {} from 'mocha';
import * as mongoose from 'mongoose';
import {UserModel} from '../model/user';
import {fail}  from "assert";
import {isNull} from "util";

const url:string = "mongodb://127.0.0.1:27017/test";


describe("CRUD", function(){

    it("connect", function(done){

       mongoose.connect(url,{useMongoClient: true},function(err){// if use createConnection Instead of connect because don't using {useMongoClient: true}
            if(err){
               fail("Do npt connect");
            }else{
                console.log("connect to data base"+"\n");
                done();
            }
       });// createConnection

    });//it
    it("Delete Collection Data", function(done){
        UserModel.findOneAndRemove({name:"Shiva"},function(err, result){
            if(err){
                fail("No Delete User");
            }else{
                if(isNull(result)){
                    fail("Index of Collection is False ");
                }else{

                    console.log("Delete Users in collection and Result is :\n"+result);
                    done();
                }
            }
        })
    });



    it("Read collection", function(done){
        UserModel.find({},function(err, result){
            if(result.length == 0){
                fail("no exist user");
            }else{
                console.log("Result Collection is : \n"+result);
                done();
            }
        });// Read collection
    });// it


});//describe




