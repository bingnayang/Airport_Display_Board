package com.airport.displayboardbackend.service;

import java.util.List;

import com.airport.displayboardbackend.entity.Airports;
import com.airport.displayboardbackend.entity.Gates;

public interface AirportService {
	public List<Airports> findCities();

	public List<Gates> findGates();
}
