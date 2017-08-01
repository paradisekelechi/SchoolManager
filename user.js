'use strict';

class User {
    constructor(firstname, lastname, emailAddress, phoneNumber){
        this.firstname = firstname;
        this.lastname = lastname;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
    }

    getFirstname(){
        return this.firstname;
    }

    getLastname(){
        return this.lastname;
    }

    getEmailAddress(){
        return this.emailAddress;
    }

    getPhoneNumber(){
        return this.phoneNumber;
    }
}

let skipo = new User('Paradise', 'Kelechi', 'paradisekelechi@gmail.com', '07066748872');
let myName = skipo.getFirstname();
console.log(myName);