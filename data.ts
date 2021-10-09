
export class userModel {
    name: String = '';
    age: Number = 0;
    permissionLevel: Number = 1;

    constructor (name: String, age: Number, permissionLevel: Number) {
        this.name = name;
        this.age = age;
        this.permissionLevel = permissionLevel;
    }
}

export let userSample : userModel[] = [];
userSample.push(new userModel('Shivani', 22, 1));
userSample.push(new userModel('ABC', 23, 0));