package com.example.employee.services;

import com.example.employee.model.Employee;
import java.util.List;
public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(long id);

    Employee getEmployeeById(long id);

    Employee updateEmployee(long id, Employee employee);
}


