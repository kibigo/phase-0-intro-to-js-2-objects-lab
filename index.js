var employee = {"name": "streetAddress"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}


function deleteFromEmployeeByKey(employee, key){
    const newobj = Object.assign({}, employee);
    delete newobj[key];
    return newobj
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    Object.assign({}, employee)
    delete employee[key]
    return employee
}