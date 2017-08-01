'use strict';

class User {
    constructor(firstname, lastname, emailAddress, phoneNumber, userType){
        this.firstname = firstname;
        this.lastname = lastname;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.userType = userType;
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

    getUserType(){
        return this.userType;
    }

    showCredentials(){
        console.log('This is '+ this.firstname + ' ' + this.lastname+'. Email Address: '+' '+this.emailAddress+'. Phone Number: '+this.phoneNumber);
    }
}


class Staff extends User{
    constructor(firstname, lastname, emailAddress, phoneNumber, teachingClass){
        super(firstname, lastname, emailAddress, phoneNumber );
        this.teachingClass = teachingClass;
    }

    getFullName(){
        return this.lastname +' '+ this.firstname;
    }

    getTeachingClass(){
        return this.class;
    }  
    getUserType(){
        return 'STAFF';
    }
}

class Student extends User{
    constructor(firstname, lastname, emailAddress, phoneNumber, studentClass, age, category){
        super(firstname, lastname, emailAddress, phoneNumber );
        this.userType = 'STAFF';
        this.studentClass = studentClass;
        this.age = age;
        this.category = category;
    }

    getFullName(){
        return this.lastname +' '+ this.firstname;
    }

    getStudentClass(){
        return this.studentClass;
    }
    getAge(){
        return this.age;
    }
    getCategory(){
        return this.category;
    }
    getUserType(){
        return 'STUDENT';
    }
    changeAge(newAge){
        this.age = newAge;
    }

}
