import * as winston from 'winston';

export class Log{
    private path:string = 'lib/log/log-result/log-lib.log';

    constructor(message:string){
        var logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)(),
                new (winston.transports.File)({

                    filename:this.path ,
                    level: 'error'
                })
            ]
        });

        logger.error(message+"\n");

    }// constructor
}// class

