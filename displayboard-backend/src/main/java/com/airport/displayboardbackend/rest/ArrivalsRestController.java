package com.airport.displayboardbackend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	// Mapping for GET /arrivals - get all arrival list
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/arrivals")
	public List<Arrivals> findAll(){
		return arrivalService.findAll();
	}
	
	// Mapping for GET /arrivals/{arrivalId} - get arrival by Id
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/arrivals/{arrivalId}")
	public Arrivals getArrival(@PathVariable int arrivalId) {
		Arrivals theArrival = arrivalService.findById(arrivalId);
		if(theArrival == null) {
			throw new RuntimeException("Arrival Id not found - "+arrivalId);
		}
		
		return theArrival;
	}
	
	// Mapping for PUT /arrivals - update existing arrival
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/arrivals")
	public Arrivals updateDeparture(@RequestBody Arrivals theDeparture) {

		arrivalService.save(theDeparture);
		
		return theDeparture;
	}
	
	// Mapping for POST /arrivals - add new arrival
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/arrivals")
	public Arrivals addDeparture(@RequestBody Arrivals theArrival) {
		// Set id to 0, this will force to save of new item instead of update
		theArrival.setId(0);
		arrivalService.save(theArrival);
		
		return theArrival;
	}
	
	// Mapping for DELETE /arrivals/{arrivalId} - delete a arrival
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/arrivals/{arrivalId}")
	public String deleteDeparture(@PathVariable int arrivalId) {
		Arrivals theArrival = arrivalService.findById(arrivalId);
		
		if(theArrival == null) {
			throw new RuntimeException("Arrival Id not found - "+arrivalId);
		}
		arrivalService.deleteById(arrivalId);
		return "Delete arrival id - "+arrivalId;
	}
	
}
