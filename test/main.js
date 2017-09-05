"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var assert_1 = require("assert");
var url = "mongodb://127.0.0.1:27017/test";
describe("CRUD", function () {
    it("connect", function (done) {
        mongoose.createConnection(url, function (err) {
            if (err) {
                assert_1.fail("Do npt connect");
            }
            else {
                console.log("connect to data base");
                done();
            }
        }); // createConnection
    }); //it
    it("Read collection", function () {
    });
}); //describe
