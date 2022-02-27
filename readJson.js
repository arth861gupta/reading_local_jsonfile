//in this statement I am importing my data of Employee.json and storing in
//a variable called "data_json" now I can use this data variable to access data
                         //Path ./ means the file of same folder and employee.json 
                         //is the name of file 
const data_json = require('./employees.json'); 

//or you can also use fetch method

//printing the whole data
console.log("1---------------------------------------------");
console.log(data_json);
//values of Employee
console.log("2---------------------------------------------");
console.log(data_json.Employees);

console.log("3------------------------------------------------");
console.log(data_json.Employees[1]); //here this 1 is the index of "mrvjy" dataset inside Employee list

console.log("4------------------------------------------------");
console.log(data_json.Employees[1].phoneNumber)  //printing any specific field value like phoneNumber using . operator