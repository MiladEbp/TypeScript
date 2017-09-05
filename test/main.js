"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var user_1 = require("../model/user");
var assert_1 = require("assert");
var util_1 = require("util");
var url = "mongodb://127.0.0.1:27017/test";
describe("CRUD", function () {
    it("connect", function (done) {
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
