/**
 * Created by Anirudha on 26/03/17.
 */

var helper = require('./helper');

var baseUrl = 'http://f873b56d.ngrok.io/api/v1';

exports.uploadFile = async function (file, cb) {
    try {
        console.log(file);
        var file_path = file.path;
        var file_path_arr = file_path.split("/");
        var file_name = file_path_arr[file_path_arr.length-1];
        console.log(file_name);
        var fileType = helper.mimeTypeLookup(file_name);
        if (fileType) {
            var input_file = {
                uri: file.uri,
                type: fileType,
                name: file_name
            };
            var formData = new FormData();
            formData.append('input_file', input_file);
            var fetchingUrl = baseUrl+'/upload';
            let response = await fetch(fetchingUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formData
            });
            let responseJson = await response.json();
            console.log(responseJson);
            cb(responseJson);
        }
        else {
            console.log('File Type Not supported yet!');
            // Todo Record the file name. Discover the extension later.
            cb(null, 'File type not supported yet. The issue has been reported and the said file type will soon be addressed.');
        }
    } catch(error) {
        console.log('Error in Network Request to File Upload Server');
        console.log(error);
        cb(null, error);
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
