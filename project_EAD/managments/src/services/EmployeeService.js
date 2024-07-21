import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_BASE_URLL = "http://localhost:8090/api/v2/employees";
const EMPLOYEE_API_BASE_URLLL = "http://localhost:8095/api/v3/employees";

class EmployeeService{

    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
        
    }

    saveEmployeee(employee){
        return axios.post(EMPLOYEE_API_BASE_URLL, employee);
        
    }
    saveEmployeeee(employeee){
        return axios.post(EMPLOYEE_API_BASE_URLLL, employeee);
        
    }


    getEmployees(employee){
        return axios.get(EMPLOYEE_API_BASE_URL, employee);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    updateEmployee(employee, id){
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
    }



    

}

export default new EmployeeService();

