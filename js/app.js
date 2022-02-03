


function Employee(fullName, department, level, imgURL) {
    this.id = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0;
    this.imgURL = imgURL;
    this.name = this.fullName.split(' ');
    
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
    else
        salary = this.calcSalary(500, 1000);

    this.salary=this.calcNetSalary(salary);
}

let employeeForm = document.getElementById('employeeForm');
let employeesSection = document.getElementById('Employees');

Employee.prototype.render = function () {

    let div = document.createElement('div');
    employeesSection.appendChild(div);

    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src',this.imgURL);
    img.setAttribute('alt',this.fullName); 

    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.textContent=`Name:${this.fullName} - ID : ${this.id}`;

    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent=`Deparment:${this.department} - Level:${this.level}`;

    let h5 = document.createElement('h5');
    div.appendChild(h5);
    h5.textContent=this.salary; 
    
}


Employee.prototype.generateId =function () {

let id = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
this.id=id ;   
}

function handelSubmit(event) {

    event.preventDefault();

    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imgURL= event.target.imgURL.value;
   
    let newEmployee = new Employee(fullName, department, level, imgURL);
    newEmployee.generateId();
    newEmployee.giveSalary(); 
    newEmployee.render();
}



let GhaziSamer = new Employee( "Ghazi Samer", "Administration", "Senior",0); 

GhaziSamer.imgURL=`./image/images.png`
GhaziSamer.giveSalary();
GhaziSamer.generateId();
GhaziSamer.render();

let LanaAli = new Employee( "Lana Ali", "Finance", "Senior",0);
LanaAli.imgURL=`./image/images.png`
LanaAli.generateId(),
LanaAli.giveSalary();
LanaAli.render();              

let TamaraAyoub = new Employee("Tamara Ayoub", "Marketing", "Senior",0);
TamaraAyoub.imgURL=`./image/images.png`
TamaraAyoub.generateId(),
TamaraAyoub.giveSalary();
TamaraAyoub.render();

let SafiWalid = new Employee( "Safi Walid", "Administration", "Mid-Senior",0);
SafiWalid.imgURL=`./image/images.png`
SafiWalid.generateId(),
SafiWalid.giveSalary();
SafiWalid.render();

let OmarZaid = new Employee( "Omar Zaid", "Development", "Senior",0 );
OmarZaid.imgURL=`./image/images.png`
OmarZaid.generateId(),
OmarZaid.giveSalary();
OmarZaid.render();

let RanaSaleh = new Employee( "Rana Saleh", "Development", "Junior",0);
RanaSaleh.imgURL=`./image/images.png`
RanaSaleh.generateId(),
RanaSaleh.giveSalary();
RanaSaleh.render();

let HadiAhmad = new Employee( "Hadi Ahmad", "Finance", "Mid-Senior",0);
HadiAhmad.imgURL=`./image/images.png`
HadiAhmad.generateId(),
HadiAhmad.giveSalary();
HadiAhmad.render();

employeeForm.addEventListener('submit', handelSubmit);
