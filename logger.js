const {
    createLogger,
    transports,
    format
  } = require('winston');
 
 const logger = createLogger({
     transports:[
       new transports.File({
        //  new transports.Console({
        filename : 'info.log', 
             level : 'info',
            format : format.combine(format.timestamp(),format.json())        
         })
     ]
 })
 module.exports=logger;