package com.airport.displayboardbackend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airport.displayboardbackend.dao.DeparturesDAO;
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
		
		@GetMapping("/departures")
		public List<Departures> findAll(){
			return departureService.findAll();
		}
		
		
		@GetMapping("/departures/{departureId}")
		public Departures getDeparture(@PathVariable int departureId) {
			Departures theDeparture = departureService.findById(departureId);
			
			if(theDeparture == null) {
				throw new RuntimeException("Departure Id not found - "+departureId);
			}
			
			return theDeparture;
		}
}
