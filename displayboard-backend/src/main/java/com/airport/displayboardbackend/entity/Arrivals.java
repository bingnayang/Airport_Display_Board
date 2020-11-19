package com.airport.displayboardbackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="arrivals")
public class Arrivals {

	// Define fields
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="origin")
	private String origin;
	
	@Column(name="scheduled_time")
	private String scheduledTime;
	
	@Column(name="estimate_time")
	private String estimateTime;
	
	@Column(name="status")
	private String status;
	
	@Column(name="airline")
	private String airline;
	
	@Column(name="flight")
	private String flight;
	
	// Define Constructor
	public Arrivals() {
		
	}

	public Arrivals(String origin, String scheduledTime, String estimateTime, String status, String airline,
			String flight) {
		this.origin = origin;
		this.scheduledTime = scheduledTime;
		this.estimateTime = estimateTime;
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

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getScheduledTime() {
		return scheduledTime;
	}

	public void setScheduledTime(String scheduledTime) {
		this.scheduledTime = scheduledTime;
	}

	public String getEstimateTime() {
		return estimateTime;
	}

	public void setEstimateTime(String estimateTime) {
		this.estimateTime = estimateTime;
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
		return "Arrivals [id=" + id + ", origin=" + origin + ", scheduledTime=" + scheduledTime + ", estimateTime="
				+ estimateTime + ", status=" + status + ", airline=" + airline + ", flight=" + flight + "]";
	}
	
}
