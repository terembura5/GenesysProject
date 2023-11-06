import {expect, test} from '@playwright/test';
import { GetUserResponseModel } from './resources/restApiModel';
import fetch from 'node-fetch';

test.describe('Rest API testing', () => {
    let userList: GetUserResponseModel[];
    const host = 'https://jsonplaceholder.typicode.com';
    const endpoint = '/users';

    test('Test Case 5: name and email collector + assertation of @',async () => {
        userList = await getUsers(host + endpoint, 'GET');
        const nameAndEmailList = userList.map(({name, email}) => ({name, email}));
        nameAndEmailList.forEach(element => {
            console.log(element.name + ' | ' + element.email)
        });
        expect(nameAndEmailList[0].email).toContain('@');
    });
});

async function getUsers(url: string, method: string): Promise <GetUserResponseModel[] | any>{
    const requestItems = {
        method: method
    };
    return await fetch(url, requestItems).then(response => response.json());
}
