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

import com.airport.displayboardbackend.entity.Departures;
import com.airport.displayboardbackend.service.DepartureService;

@RestController
@RequestMapping("/api")
public class DeparturesRestController {

		private DepartureService departureService;
		
		// Inject departures service by constructor injection
		@Autowired
		public DeparturesRestController(DepartureService theDepartureService) {
			departureService = theDepartureService;
		}
		
		@CrossOrigin(origins = "http://localhost:4200")
		@GetMapping("/departures")
		public List<Departures> findAll(){
			return departureService.findAll();
		}
		
		// Mapping for GET /departures/{departureId}
		@GetMapping("/departures/{departureId}")
		public Departures getDeparture(@PathVariable int departureId) {
			Departures theDeparture = departureService.findById(departureId);
			
			if(theDeparture == null) {
				throw new RuntimeException("Departure Id not found - "+departureId);
			}
			
			return theDeparture;
		}
		
		// Mapping for POST /departures - add new departure
		@CrossOrigin(origins = "http://localhost:4200")
		@PostMapping("/departures")
		public Departures addDeparture(@RequestBody Departures theDeparture) {
			// Set id to 0, this will force to save of new item instead of update
			theDeparture.setId(0);
			departureService.save(theDeparture);
			
			return theDeparture;
		}
		
		// Mapping for PUT /departures - update existing departure
		@PutMapping("/departures")
		public Departures updateDeparture(@RequestBody Departures theDeparture) {

			departureService.save(theDeparture);
			
			return theDeparture;
		}
		
		// Mapping for DELETE /departures - delete a departure
		@DeleteMapping("/departures/{departureId}")
		public String deleteDeparture(@PathVariable int departureId) {
			Departures theDeparture = departureService.findById(departureId);
			
			if(theDeparture == null) {
				throw new RuntimeException("Departure Id not found - "+departureId);
			}
			departureService.deleteById(departureId);
			return "Delete departure id - "+departureId;
		}
		
}
