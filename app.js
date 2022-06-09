const { createUser } = require('./services/user.service');
// як тільки ми робимо require у нас запускається весь файл user.service,
// тобто функція createBillionsUsers() теж запуститься, хоча ми її не require
// функція createBillionsUsers() експортується, але на цьому код не зупиняється
// і всі функції, console.log і так далі що є в модулі теж виконаються
require('./services/file.service');

const user = createUser('Viktor', 26);
console.log(user);
user.sayHello();