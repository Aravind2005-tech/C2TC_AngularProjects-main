package com.tns.collegeservice;

import jakarta.persistence.*;

@Entity
public class College {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String city;
    private String state;
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public College() {
		super();
		// TODO Auto-generated constructor stub
	}
	public College(Long id, String name, String address, String city, String state) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.city = city;
		this.state = state;
	}

    
    
}
