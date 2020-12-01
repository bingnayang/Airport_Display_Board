package com.airport.displayboardbackend.service;

import java.util.List;

import com.airport.displayboardbackend.entity.Airports;
import com.airport.displayboardbackend.entity.ArrivalStatus;
import com.airport.displayboardbackend.entity.DepartureStatus;
import com.airport.displayboardbackend.entity.Gates;

public interface AirportService {
	public List<Airports> findCities();

	public List<Gates> findGates();

	public List<ArrivalStatus> findArrivalStatus();

	public List<DepartureStatus> findDepartureStatus();
}
