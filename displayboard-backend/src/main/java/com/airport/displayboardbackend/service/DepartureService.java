package com.airport.displayboardbackend.service;

import java.util.List;

import com.airport.displayboardbackend.entity.Departures;

public interface DepartureService {
	public List<Departures> findAll();
	public Departures findById(int id);
	public void save (Departures theDeparture);
	public void deleteById(int id);
}
