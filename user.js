'use strict';

const chai = require('chai');
const expect = chai.expect;

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
        return this.age + 'years';
    }
    getCategory(){
        return this.category;
    }
    getUserType(){
        return 'STUDENT';
    }
    setAge(newAge){
        this.age = newAge;
    }
    setStudentClass(newClass){
        this.studentClass = newClass;
    }
}


describe('Student Class:', () => {

    //test the Student class that inherits from the User class
    let oldStudent = new Student('Paradise', 'Kelechi', 'paradisekelechi@gmail.com', '07066748872', 'JSS2A', '13', 'Junior Class');
    it('oldStudent.getAge() should return 13yrs', () =>{
        expect(oldStudent.getAge()).to.equal('13years');
    });
    it('oldStudent.getFullName() should return "Kelechi Paradise"', () =>{
        expect(oldStudent.getFullName()).to.equal('Kelechi Paradise');
    });
    //set student data
    oldStudent.setStudentClass('SS2A');

    it('oldStudent.getStudentClass() should return "SS2A"', () =>{
        expect(oldStudent.getStudentClass()).to.equal('SS2A');
    });


    //test the Staff class that inherits from the User class
    let newStaff = new Staff('Usman', 'Adamu', 'uadamu@yahoo.com', '09088999988', 'JS2A');    
    it('newStaff.getUserType() should return "STAFF"', ()=>{
        expect(newStaff.getUserType()).to.equal('STAFF');
    });
    it('newStaff.getFullName() should return "Adamu Usman"', ()=>{
        expect(newStaff.getFullName()).to.equal('Adamu Usman');
    });
    
});