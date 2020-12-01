package com.airport.displayboardbackend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airport.displayboardbackend.entity.Airports;
import com.airport.displayboardbackend.entity.ArrivalStatus;
import com.airport.displayboardbackend.entity.DepartureStatus;
import com.airport.displayboardbackend.entity.Gates;
import com.airport.displayboardbackend.service.AirportService;


@RestController
@RequestMapping("/api")
public class AirportsRestController {

	private AirportService airportService;
	
	// Inject arrivals service by constructor injection
	@Autowired
	public AirportsRestController(AirportService theAirportService) {
		airportService = theAirportService;
	}
	
	// Mapping for GET /cities - get all city list
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/cities")
	public List<Airports> findAllCities(){
		return airportService.findCities();
	}
	
	// Mapping for GET /gates - get all gate list
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/gates")
	public List<Gates> findAllGates(){
		return airportService.findGates();
	}
	
	// Mapping for GET /arrival-status - get all arrival status list
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/arrivalStatus")
	public List<ArrivalStatus> findAllArrivalStatus(){
		return airportService.findArrivalStatus();
	}
	
	// Mapping for GET /departure-status - get all departure status list
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/departureStatus")
	public List<DepartureStatus> findAllDepartureStatus(){
		return airportService.findDepartureStatus();
	}
}
