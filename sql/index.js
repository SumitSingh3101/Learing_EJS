const { faker } = require("@faker-js/faker");

let createRandomUser = () => {
    return{
        userID: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.data.birthdate(),
        registeredAt: faker.date.past(),
    };
};

console.log(createRandomUser());