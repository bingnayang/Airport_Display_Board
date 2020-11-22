package com.airport.displayboardbackend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airport.displayboardbackend.service.ArrivalService;


@RestController
@RequestMapping("/api")
public class ArrivalsRestController {

	private ArrivalService arrivalService;
	
	// Inject departures service by constructor injection
	@Autowired
	public ArrivalsRestController(ArrivalService theArrivalService) {
		arrivalService = theArrivalService;
	}
	
}
