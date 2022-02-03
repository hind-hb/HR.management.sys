
function Employee(id, fullName, department, level, imgURL) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgURL = imgURL;
}

Employee.prototype.calcSalary = function (min, max) {
    let salary = Math.floor(Math.random() * (max - min)) + min;
    return (salary);   
}


Employee.prototype.calcNetSalary = function (salary) {
    return (salary - (7.5 / 100 * salary));
}

Employee.prototype.giveSalary = function () {
    let salary;
    if (this.level == "Senior")
        salary = this.calcSalary(1500, 2000);
    else if (this.level == "Mid-Senior")
        salary = this.calcSalary(1000, 1500);
    else{(this.level == "Junior")}
        salary = this.calcSalary(500, 1000);

    return this.calcNetSalary(salary);
}



Employee.prototype.Render = function () {
    document.write(`<p> <h1>${this.fullName}   &nbsp Salary is   ${this.giveSalary()}  &nbsp Department is ${this.department} &nbsp  Level is ${this.level}</h1> </p>`);
}




let GhaziSamer = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "shorturl.at/blotT");
GhaziSamer.Render();

let LanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior", " shorturl.at/blotT");
LanaAli.Render();

let TamaraAyoub = new Employee(1002,"Tamara Ayoub", "Marketing", "Senior", "shorturl.at/blotT ");
TamaraAyoub.Render();

let SafiWalid = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "shorturl.at/blotT");
SafiWalid.Render();

let OmarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior", "shorturl.at/blotT");
OmarZaid.Render();

let RanaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior", "shorturl.at/blotT");
RanaSaleh.Render();

let HadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "shorturl.at/blotT");
HadiAhmad.Render();
