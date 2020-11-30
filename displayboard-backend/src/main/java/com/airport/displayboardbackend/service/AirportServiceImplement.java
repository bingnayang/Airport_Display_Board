package com.airport.displayboardbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.airport.displayboardbackend.dao.AirportsDAO;
import com.airport.displayboardbackend.entity.Airports;

@Service
public class AirportServiceImplement implements AirportService {

	// Setup constructor injection
	private AirportsDAO airportDAO;
	
	@Autowired
	public AirportServiceImplement(AirportsDAO theAirportDAO) {
		airportDAO = theAirportDAO;
	}
	
	@Override
	@Transactional
	public List<Airports> findCities() {
		// Delegate the calls to the DAO
		return airportDAO.findCities();
	}

}
