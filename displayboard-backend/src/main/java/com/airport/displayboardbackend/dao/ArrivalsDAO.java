package com.airport.displayboardbackend.dao;

import java.util.List;
import com.airport.displayboardbackend.entity.Arrivals;


public interface ArrivalsDAO {
	public List<Arrivals> findAll();
	public Arrivals findById(int id);
	public void save (Arrivals theArrival);
	public void deleteById(int id);
}
