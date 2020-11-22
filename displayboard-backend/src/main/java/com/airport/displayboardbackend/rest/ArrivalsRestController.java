package com.airport.displayboardbackend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airport.displayboardbackend.entity.Arrivals;
import com.airport.displayboardbackend.service.ArrivalService;


@RestController
@RequestMapping("/api")
public class ArrivalsRestController {

	private ArrivalService arrivalService;
	
	// Inject arrivals service by constructor injection
	@Autowired
	public ArrivalsRestController(ArrivalService theArrivalService) {
		arrivalService = theArrivalService;
	}
	
	// Mapping for GET /departures - get all departure list
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/arrivals")
	public List<Arrivals> findAll(){
		return arrivalService.findAll();
	}
	
}
