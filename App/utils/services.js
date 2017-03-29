/**
 * Created by Anirudha on 26/03/17.
 */

var baseUrl = 'http://22fd9044.ngrok.io/api';

exports.uploadFile = async function (file, cb) {
    try {
        console.log(file);
        var fetchingUrl = baseUrl+'/';
        let response = await fetch(fetchingUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let responseJson = await response.json();
        console.log(responseJson);
        cb(responseJson);
    } catch(error) {
        console.log('Error in Network Request to File Upload Server');
        console.log(error);
        cb(error);
    }
};

//fetch('https://mywebsite.com/endpoint/', {
//    method: 'POST',
//    headers: {
//        'Accept': 'application/json',
//        'Content-Type': 'application/json',
//    },
//    body: JSON.stringify({
//        firstParam: 'yourValue',
//        secondParam: 'yourOtherValue',
//    })
//})
