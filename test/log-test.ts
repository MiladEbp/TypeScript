import {Log}  from '../lib/log/log-class';
import {} from 'mocha';
import {readFile, unlink} from 'fs';
import {fail} from 'assert';

var pathFile = 'lib/log/log-result/log-lib.log';




describe('Test log', function(){


    it('Clean file of log-lib.log', function(done){

        readFile(pathFile, function(err, result){
            if(err){
                fail("This path is False");
            }else{
                if(result.length == 0){
                    fail("File is null");
                }else{
                    unlink(pathFile, function(err){
                        if(err){
                            fail('File is not remove');
                        }else{
                          console.log('File is remove'+'\n');
                        }
                    });
                    done();
                }//else
            }//else
        });//readFile
    });//it



    it('Log Run', function(done){

        new Log("Test is successfully");
        done();

    });// it



    it('Write file', function(done){

        readFile(pathFile, function(err, result){
            if(err){
              fail('File Of path is False');
            }else{
               if(result.length == 0 ){
                   fail("File is null");
               }else{
                   console.log("Content Of File is : "+"\n"+result);
                   done();
               }
            }
        });
    });



});// d
