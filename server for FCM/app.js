  var FCM = require('fcm-node');
    var serverKey = 'AAAABvOVZwo:APA91bFHoH2VEdzgD5UPMwMZtOAstBnVs4OGslJyG3ZJMaXRv8p98jtvZ_GB_CqRMMBLg9wxoiNiEa1zgWSR9NtnhvsnhPoZajy7ZOUDrOGwQaSLZ7bzcSE7pxd1S1qMA9XoGX5mGPAK'; //put your server key here
    var fcm = new FCM(serverKey);
 
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: '/topics/satej', 
       
        
        notification: {
            title: 'satej sarker	', 
            body: 'this is from node server ' 
        },
        
        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    };
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });