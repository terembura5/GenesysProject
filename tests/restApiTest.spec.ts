import { expect, test } from '@playwright/test';
import { GetUserResponseModel } from './resources/restApiModel';
import fetch from 'node-fetch';

test.describe('Rest API testing', () => {
    let userList: GetUserResponseModel[];
    const requestType = 'GET';
    const host = 'https://jsonplaceholder.typicode.com';
    const endpoint = '/users';

    test('Test Case 5: name and email collector + assertation of @', async () => {
        userList = await getUsers(host + endpoint, requestType);

        const nameAndEmailList = userList.map(({ name, email }) => ({ name, email }));
        nameAndEmailList.forEach(element => {
            console.log(element.name + ' | ' + element.email)
        });

        expect(nameAndEmailList[0].email).toContain('@');
    });
});

async function getUsers(url: string, method: string): Promise<GetUserResponseModel[]> {
    const requestItems = {
        method: method
    };

    const response = await fetch(url, requestItems).then(response => response.json());
    return response;
}
