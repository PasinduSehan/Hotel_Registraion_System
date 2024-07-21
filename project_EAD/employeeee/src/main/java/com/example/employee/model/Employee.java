package com.example.employee.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    private long id;
    private  String fullName;
    private  String idNumber;
    private String emailId;

//****************
    private int phone;
    private String city;
    private int people;
    private int room;
    private LocalDate cIn;
    private LocalDate cOut;
    private int price;
    private String message;

    public Employee(long id, String fullName, String idNumber, int phone, String emailId, String city, int people, int room, LocalDate cIn, LocalDate cOut, int price, String message) {
    }



    //******************
public String getFullName()
{
    return fullName;
}
    public void setFullName(String fullName)
    {
        this.fullName = fullName;
    }


    public String getIdNumber() {
        return idNumber;
    }
    public void setIdNumber(String idNumber)
    {
        this.idNumber = idNumber;
    }

    public int getPhone() {
        return this.phone;
    }

    public void setPhone(int phone) {this.phone = (int) phone;}

    public Object getEmailId(Object emailId) {
        return this.emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = (String) emailId;
    }


    public String getEmailId() {
        return this.emailId;
    }


    public String getCity()
    {
        return city;
    }
    public void setCity(String city)
    {
        this.city = city;
    }
    public int getPeople()
    {
        return people;
    }
    public void setPeople(int people)
    {
        this.people = people;
    }
    public int getRoom()
    {
        return room;
    }
    public void setRoom(int room)
    {
        this.room = room;
    }
    public LocalDate getCIn()
    {
        return cIn;
    }
    public void setCIn(LocalDate cIn)
    {
        this.cIn = cIn;
    }
    public LocalDate getCOut()
    {
        return cOut;
    }
    public void setCOut(LocalDate cOut)
    {
        this.cOut = cOut;
    }
    public int getPrice()
    {
        return price;
    }
    public void setPrice(int price)
    {
        this.price = price;
    }

    public String getMessage()
    {
        return message;
    }
    public void setMessage(String message)
    {
        this.message = message;
    }



}


