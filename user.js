'use strict';

module.exports = class User {
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

    showCredentials(){
        console.log('This is '+ this.firstname + ' ' + this.lastname+'. Email Address: '+' '+this.emailAddress+'. Phone Number: '+this.phoneNumber);
    }
}
