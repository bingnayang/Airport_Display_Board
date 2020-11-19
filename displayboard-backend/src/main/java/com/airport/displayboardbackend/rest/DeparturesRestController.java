package com.airport.displayboardbackend.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airport.displayboardbackend.dao.DeparturesDAO;
import com.airport.displayboardbackend.entity.Departures;

@RestController
@RequestMapping("/api")
public class DeparturesRestController {

		private DeparturesDAO departuresDAO;
		
		// Inject departures dao by constructor injection
		@Autowired
		public DeparturesRestController(DeparturesDAO theDeparturesDAO) {
			departuresDAO = theDeparturesDAO;
		}
		
		@GetMapping("/departures")
		public List<Departures> findAll(){
			return departuresDAO.findAll();
		}
}
