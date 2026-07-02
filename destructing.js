let student = {
    name : "Haseeb Aktar ",
    rollNo : 123, 
    age :  20 ,
    CGPA : 3.5,
}
let {name, rollNo, age, CGPA } = student;
console.log(name);
cosole.log(rollNo);
console.log(age);
console.log(CGPA);


let {name: studentName, rollNo: studentRollNo, age: StudentAge ,CGPA : studentCGPA} = student;
console.log(studentName);
console.log(studentRollNo);
console.log(StudentAge);
console.log(studentCGPA);

let book = {
    title : "JavaScript",
    author : "Haseeb Aktar",
    publisher : "Oxford",
}
let {title : bookName , price = 500 , author : bookAuthor, publisher: bookPublisher} = book;
console.log(bookName);
console.log(price);
console.log(bookAuthor);
console.log(bookPublisher);

let num = [10,20,30,40,50];
let {a, b,c,d,e,} = num ;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let [first, ,third,  ,fifth] = num ;
let employee = {
    name : "Haseeb Aktar",
    age: 20,
    address : {
        city : "Swabi",
        country : "Pakistan",
        Tehsil = "Lahore",
        Phone : "03285360247"
    }
}
let {name = empName, age = empAge, city = address.city, country = address.country, tehsil= address.tehsil} = employee;
console.log(empName);
console.log(empAge);
console.log(city);
console.log(country);
console.log(tehsil);

let req = {
    body: {
        username: "Haseeb",
        password: "123456",
        email: "abc@gmail.com"
    }
};
let {body = {
    username,
password,email

}} = req;
console.log(body.username);
console.log(body.password);
console.log(body.email);    

let company = {
    name: "Google",
    location: {
        city: "Mountain View",
        country: "USA"
    },
    employees: 180000
};
let {
    name : companyName,
    location :{
        city : companyCity,
        country : companyCountry
    },
    employees : companyEmployees
} = company;
console.log(companyName);
console.log(companyCity);
console.log(companyCountry);
console.log(companyEmployees);