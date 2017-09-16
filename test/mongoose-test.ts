import {} from 'mocha';
import * as mongoose from 'mongoose';
import {UserModel} from '../model/user';
import {fail}  from "assert";
import {isNull} from "util";

const url:string = "mongodb://127.0.0.1:27017/test";


describe("CRUD", function(){

    it("connect", function(done){
        mongoose.Promise = global.Promise;
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
    });// it


    it("Insert in Collection", function(done){
        var objSave = new UserModel({
            name: "Nader",
            lastName:"Nadery"
        });
        UserModel.findOne({name: objSave['name']}, function(err, result){
            if(err){
                fail("Insert Function is Failed");
            }else{
                if(result){
                    fail("Insert is Failed");
                }else{
                    objSave.save(function(err, result){
                        if(err){
                            fail("Inseet is Failed");
                        }else{
                            console.log(result);
                            done();
                        }
                    }); // save
                }// else
            }
        });

    });



    it("Update", function(done){
        var index = " milad",
            newName = "ahmad",
            updateValue = {name:newName , lastName:"Ebrahimpour"};

        UserModel.findOneAndUpdate({name:index},updateValue,function(err,result){
            if(err){
                fail("Function is Wrong");
            }else {
               if(isNull(result)){
                   fail("update is Failed");
               }else{
                   console.log(result);
                   done();
               }
            }
        });
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




