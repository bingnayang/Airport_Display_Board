package com.airport.displayboardbackend.dao;

import java.util.List;

import com.airport.displayboardbackend.entity.Departures;

public interface DeparturesDAO {
	public List<Departures> findAll();
	public Departures findById(int id);
	public void save (Departures theDeparture);
	public void deleteById(int id);
}
