jest.mock('../models/User');

const {User} = require('../models/User');
const usersService = require('../services/users.service');
const passport =  require('passport');

describe.only('User test Suite', ()=>{
    test('Should get all users', async ()=>{
        //arrange
        const expected = {name: 'john', id:1};
        User.find.mockResolvedValue(expected);

        //act
        const user = await usersService.getAllUsers();

        //assert
        expect(user).toEqual(expected);
    });

    test.only('should register a new user',  async ()=>{
        //arrange
        const mockNewUser = {username: 'john', password:'1234'};

        User.authenticate.mockResolvedValue(mockNewUser);
        User.mockImplementation();
        //User.register.mockResolvedValue({message: 'success'});

        //act
        const actual =  await usersService.registerUser(mockNewUser);


        //assert
        expect(actual).toEqual(mockNewUser);

    })
});