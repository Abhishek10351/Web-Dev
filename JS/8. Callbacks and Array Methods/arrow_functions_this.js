const student = {
    firstName: "Abhishek",
    lastName: "Kashyap",
    rollNo: 23423,
    info: function (params) {
        return `Name: ${this.firstName}, Roll no: ${this.rollNo}`;
    },
    fullName: () => {
        return `Full Name:  ${this.firstName}  ${this.lastName}`;
    },
    shoutName: function () {
        setTimeout(() => {
            console.log("test");
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            console.log(this);
            console.log(this.fullName());
            console.log(this.info());
        }, 3000);
    },
};

console.log(student.info());

// console.log(student.fullName());
console.log(student.shoutName());

// sometimes this doesn't work properly with the context in arrow functions
