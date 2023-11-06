export class GetUserResponseModel {
    id: Number;
    name: String;
    username: String;
    email: String;
    address: {
        street: String;
        suite: String;
        city: String;
        zipcode: String;
        geo?: String;
    }
    phone: String;
    website: String;
    company: {
        name: String;
        catchPhrase: String;
        bs: String;
    }
}