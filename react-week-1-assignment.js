/*class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
};
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        if (this.students.filter(student => student.email === studentToRegister.email).length > 0){
            console.log('That email is already used. Please enter a new email address.')

        } else {
            this.students = this.students.concat(studentToRegister)
            console.log(`Registering ${studentToRegister.name} to the bootcamp.`)

        }
        return this.students;
    }
} */

class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
        return this.students;
    }
    registerStudent(studentToJoin) {
        if (this.students.filter(student => student.email === studentToJoin.email).length) {
            console.log('Already used email addy. Try again.')
        } else {
            this.students = this.students.concat(studentToJoin)
            console.log(`${studentToJoin.name} joined the bootcamp.`)
        }
        return this.students;
    }
    
}