package com.airport.displayboardbackend.dao;

import java.util.List;

import com.airport.displayboardbackend.entity.Departures;

public interface DeparturesDAO {
	public List<Departures> findAll();
}
