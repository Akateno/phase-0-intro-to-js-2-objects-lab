// Write your solution in this file!
const employee = {
    name : "Erick",
    streetAddress : "Pike"

};
function updateEmployeeWithKeyAndValue(employee, name, cameron) {
    const newEmployee = { ...employee };
  
    newEmployee["name"] = "Sam";
    newEmployee["streetAddress"]="11 Broadway"
  
    return newEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    
  
    return employee
  }
  function deleteFromEmployeeByKey(obj, key, value) {
    const newEmployee = { ...employee };
  
    delete newEmployee.name;
  
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    delete employee.name;
    
  
    return employee
  }