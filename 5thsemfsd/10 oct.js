// void nodemailer=require('nodemailer');
// var transporter=nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'sender@gmail.com',
//         pass:"senderpassword"
//     }
// });
// var mailOptions={
//     from:'sender@gmail.com',
//     to:'receiver@yahoo.com',
//     subject:'test emaail- sent using node.js',
//     text:'node.js rocks'
// };

// transporter.sendMail(mailOptions,
// function(error,info){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('email sent: '+info.response);
//     }
// });







var event=require('events');
var eventEmitter=new event.EventEmitter();
var playHandler=function(){
    console.log('music started playing');

};
var pauseHandler=function(){
    console.log('music paused');
};
var stopHandler=function(){
    console.log('music stopped');
};
eventEmitter.on('play',playHandler);
eventEmitter.on('pause',pauseHandler);
eventEmitter.on('stop',stopHandler);

eventEmitter.emit('play');
eventEmitter.emit('pause');
eventEmitter.emit('stop');