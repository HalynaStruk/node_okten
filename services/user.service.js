const SMSService = require('./message.service');

function createBillionsUsers() {
    console.log('100000000 users was created')
}

console.log('HELLO FROM MODULE');

function createUser(name, age) {
    SMSService.sendSMS('6767','Welocme on board')

    return {
        name,
        age,
        sayHello : () => {
            console.log(`Hello. My name is ${name} and I am ${age} years old`);
        }
    }
}

module.exports = {
    createUser
}

createBillionsUsers();