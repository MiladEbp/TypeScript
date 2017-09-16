"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var user_1 = require("../model/user");
var assert_1 = require("assert");
var util_1 = require("util");
var url = "mongodb://127.0.0.1:27017/test";
describe("CRUD", function () {
    it("connect", function (done) {
        mongoose.Promise = global.Promise;
        mongoose.connect(url, { useMongoClient: true }, function (err) {
            if (err) {
                assert_1.fail("Do npt connect");
            }
            else {
                console.log("connect to data base" + "\n");
                done();
            }
        }); // createConnection
    }); //it
    it("Delete Collection Data", function (done) {
        user_1.UserModel.findOneAndRemove({ name: "Shiva" }, function (err, result) {
            if (err) {
                assert_1.fail("No Delete User");
            }
            else {
                if (util_1.isNull(result)) {
                    assert_1.fail("Index of Collection is False ");
                }
                else {
                    console.log("Delete Users in collection and Result is :\n" + result);
                    done();
                }
            }
        });
    }); // it
    it("Insert in Collection", function (done) {
        var objSave = new user_1.UserModel({
            name: "Nader",
            lastName: "Nadery"
        });
        user_1.UserModel.findOne({ name: objSave['name'] }, function (err, result) {
            if (err) {
                assert_1.fail("Insert Function is Failed");
            }
            else {
                if (result) {
                    assert_1.fail("Insert is Failed");
                }
                else {
                    objSave.save(function (err, result) {
                        if (err) {
                            assert_1.fail("Inseet is Failed");
                        }
                        else {
                            console.log(result);
                            done();
                        }
                    }); // save
                } // else
            }
        });
    });
    it("Update", function (done) {
        var index = " milad", newName = "ahmad", updateValue = { name: newName, lastName: "Ebrahimpour" };
        user_1.UserModel.findOneAndUpdate({ name: index }, updateValue, function (err, result) {
            if (err) {
                assert_1.fail("Function is Wrong");
            }
            else {
                if (util_1.isNull(result)) {
                    assert_1.fail("update is Failed");
                }
                else {
                    console.log(result);
                    done();
                }
            }
        });
    });
    it("Read collection", function (done) {
        user_1.UserModel.find({}, function (err, result) {
            if (result.length == 0) {
                assert_1.fail("no exist user");
            }
            else {
                console.log("Result Collection is : \n" + result);
                done();
            }
        }); // Read collection
    }); // it
}); //describe
