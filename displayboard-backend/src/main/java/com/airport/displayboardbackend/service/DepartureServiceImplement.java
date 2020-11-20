package com.airport.displayboardbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.airport.displayboardbackend.dao.DeparturesDAO;
import com.airport.displayboardbackend.entity.Departures;

@Service
public class DepartureServiceImplement implements DepartureService{
	// Setup constructor injection
	private DeparturesDAO departureDAO;
	
	@Autowired
	public  DepartureServiceImplement(DeparturesDAO theDepartureDAO) {
		departureDAO = theDepartureDAO;
	}

	@Override
	@Transactional
	public List<Departures> findAll() {
		// Delegate the calls to the DAO
		return departureDAO.findAll();
	}

	@Override
	@Transactional
	public Departures findById(int id) {
		// Delegate the calls to the DAO
		return departureDAO.findById(id);
	}

	@Override
	@Transactional
	public void save(Departures theDeparture) {
		// Delegate the calls to the DAO
		departureDAO.save(theDeparture);
	}

	@Override
	@Transactional
	public void deleteById(int id) {
		// Delegate the calls to the DAO
		departureDAO.deleteById(id);
		
	}

}
