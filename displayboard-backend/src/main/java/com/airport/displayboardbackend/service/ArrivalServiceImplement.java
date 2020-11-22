package com.airport.displayboardbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
	public List<Arrivals> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Arrivals findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(Arrivals theArrival) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub

	}

}
