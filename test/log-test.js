"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_class_1 = require("../lib/log/log-class");
var fs_1 = require("fs");
var assert_1 = require("assert");
var pathFile = 'lib/log/log-result/log-lib.log';
describe('Test log', function () {
    it('Clean file of log-lib.log', function (done) {
        fs_1.readFile(pathFile, function (err, result) {
            if (err) {
                assert_1.fail("This path is False");
            }
            else {
                if (result.length == 0) {
                    assert_1.fail("File is null");
                }
                else {
                    fs_1.unlink(pathFile, function (err) {
                        if (err) {
                            assert_1.fail('File is not remove');
                        }
                        else {
                            console.log('File is remove' + '\n');
                        }
                    });
                    done();
                } //else
            } //else
        }); //readFile
    }); //it
    it('Log Run', function (done) {
        new log_class_1.Log("Test is successfully");
        done();
    }); // it
    it('Write file', function (done) {
        fs_1.readFile(pathFile, function (err, result) {
            if (err) {
                assert_1.fail('File Of path is False');
            }
            else {
                if (result.length == 0) {
                    assert_1.fail("File is null");
                }
                else {
                    console.log("Content Of File is : " + "\n" + result);
                    done();
                }
            }
        });
    });
}); // d
