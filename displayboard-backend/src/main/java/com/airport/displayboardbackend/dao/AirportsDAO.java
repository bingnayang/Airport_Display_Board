package com.airport.displayboardbackend.dao;

import java.util.List;

import com.airport.displayboardbackend.entity.Airports;
import com.airport.displayboardbackend.entity.Gates;

public interface AirportsDAO {
	public List<Airports> findCities();

	public List<Gates> findGates();
}
