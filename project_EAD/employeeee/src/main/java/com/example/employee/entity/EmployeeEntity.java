package com.example.employee.entity;

//import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
@Table(name="employees")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
   @Column(name="fullName")
    private  String fullName;
    @Column(name="idNumber")
    private  String idNumber;
   @Column(name="emailId")
    private String emailId;
    @Column(name="phone")
    private int phone;
    @Column(name="city")
    private String city;
    @Column(name="people")
    private int people;
    @Column(name="room")
    private int room;
    @Column(name="cIn")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate cIn;
    @Column(name="cOut")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate cOut;
    @Column(name="price")
    private int price;
    @Column(name="message")
    private String message;

  public long getId()
    {
        return id;
    }
    public void setId(long id)
    {
        this.id = id;
    }
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

    public String getEmailId(String emailId) {
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

