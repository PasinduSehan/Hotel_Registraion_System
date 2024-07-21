package com.example.employee.entity;

//import jakarta.persistence.*;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="employees")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
   @Column(name="firstName")
    private  String firstName;
    @Column(name="lastName")
    private  String lastName;
   @Column(name="emailId")
    private String emailId;
    @Column(name="number")
    private int number;
    @Column(name="address")
    private String address;
    @Column(name="password")
    private String password;

  public long getId()
    {
        return id;
    }
    public void setId(long id)
    {
        this.id = id;
    }
    public String getFirstName()
    {
        return firstName;
    }
    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastNameName(String lastName)
    {
        this.lastName = lastName;
    }


    public Object getEmailId(Object emailId) {
        return this.emailId;
    }

    public void setEmailId(Object emailId) {
        this.emailId = (String) emailId;
    }


    public String getEmailId() {
        return this.emailId;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public int getNumber()
    {
        return number;
    }
    public void setNumber(int number)
    {
        this.number = number;
    }
    public String getAddress()
    {
        return address;
    }
    public void setAddress(String address)
    {
        this.address = address;
    }
    public String getPassword()
    {
        return password;
    }
    public void setPassword(String password)
    {
        this.password = password;
    }



}

