package com.example.employee.services;

import com.example.employee.entity.EmployeeEntity;
import com.example.employee.model.Employee;
import com.example.employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeSeriveImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;
    private EmployeeEntity employee;

    public EmployeeSeriveImpl(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }
    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }
/*
    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();


        List<Employee> employees = employeeEntities
                .stream()
                .map(emp -> new Employee(
                emp.getId(),
                emp.getFirstName(),
                emp.getLastName(),
                emp.getEmailId(employee.getEmailId(employee.getEmailId()))))
                .collect(Collectors.toList());
        return employees;
    }
*/
@Override
public List<Employee> getAllEmployees() {
    List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

    List<Employee> employees = employeeEntities
            .stream()
            .map(emp -> new Employee(
                    emp.getId(),
                    emp.getFirstName(),
                    emp.getLastName(),
                    emp.getEmailId()))
            .collect(Collectors.toList());
    return employees;
}

    @Override
    public boolean deleteEmployee(long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee getEmployeeById(long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(long id, Employee employee) {
        EmployeeEntity employeeEntity= employeeRepository.findById(id).get();
        employeeEntity.setEmailId(employee.getEmailId());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());

        employeeRepository.save(employeeEntity);
        return employee;
    }
}

