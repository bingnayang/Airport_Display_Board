package com.airport.displayboardbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.airport.displayboardbackend.dao.ArrivalsDAO;
import com.airport.displayboardbackend.entity.Arrivals;

@Service
public class ArrivalServiceImplement implements ArrivalService {
	// Setup constructor injection
	private ArrivalsDAO arrivalDAO;
	
	@Autowired
	public  ArrivalServiceImplement(ArrivalsDAO theArrivalDAO) {
		arrivalDAO = theArrivalDAO;
	}
	
	@Override
	@Transactional
	public List<Arrivals> findAll() {
		// Delegate the calls to the DAO
		return arrivalDAO.findAll();
	}

	@Override
	public Arrivals findById(int id) {
		// Delegate the calls to the DAO
		return arrivalDAO.findById(id);
	}

	@Override
	public void save(Arrivals theArrival) {
		// Delegate the calls to the DAO
		arrivalDAO.save(theArrival);
	}

	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub

	}

}
