const axios = require('axios');

exports.sendLog = ({ text, timestamp, errorCode = 0, userId, url }) => {
    const data = {
        text: text,
        timestamp: timestamp,
        errorCode: errorCode,
        userId: userId,
        url: url
    };

    axios.post('http://example.com/api/sendData', data)
        .then(res => {
            console.log('Data was sent successfully:', res.data);
        })
        .catch(err => {
            console.log('There was an error sending the data:', err);
        });
}