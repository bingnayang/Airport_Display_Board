package com.airport.displayboardbackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="departures")
public class Departures {

	// Define fields
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="destination")
	private String destination;
	
	@Column(name="time")
	private String time;
	
	@Column(name="gate")
	private String gate;
	
	@Column(name="status")
	private String status;
	
	@Column(name="airline")
	private String airline;
	
	@Column(name="flight")
	private String flight;
	
	// Define Constructors
	public Departures() {
		
	}

	public Departures(String destination, String time, String gate, String status, String airline, String flight) {
		this.destination = destination;
		this.time = time;
		this.gate = gate;
		this.status = status;
		this.airline = airline;
		this.flight = flight;
	}
	
	// Define Getter/Setter

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getGate() {
		return gate;
	}

	public void setGate(String gate) {
		this.gate = gate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAirline() {
		return airline;
	}

	public void setAirline(String airline) {
		this.airline = airline;
	}

	public String getFlight() {
		return flight;
	}

	public void setFlight(String flight) {
		this.flight = flight;
	}
	
	// Define toString
	@Override
	public String toString() {
		return "Departures [id=" + id + ", destination=" + destination + ", time=" + time + ", gate=" + gate
				+ ", status=" + status + ", airline=" + airline + ", flight=" + flight + "]";
	}
	
}
