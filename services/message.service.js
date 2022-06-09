function sendSMS(phone, text) {
    console.log('Send SMS in progress');

    console.log(text, phone)
}

module.exports = {
    sendSMS
}

// ще можливий такий запис
// module.exports.sendSMS = (phone, text) => {
//     console.log('Send SMS in progress');
//
//     console.log(text, phone)
// }