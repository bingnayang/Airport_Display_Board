package com.airport.displayboardbackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="gates")
public class Gates {

	// Define fields
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="gate")
	private String gate;
	
	// Define Constructor
	public Gates(){
		
	}
	
	public Gates(String gate) {
		this.gate = gate;
	}

	// Define Getter/Setter
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getGate() {
		return gate;
	}

	public void setGate(String gate) {
		this.gate = gate;
	}
	
	
	
}
