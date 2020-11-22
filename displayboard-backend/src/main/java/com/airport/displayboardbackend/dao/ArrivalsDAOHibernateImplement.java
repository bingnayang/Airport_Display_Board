package com.airport.displayboardbackend.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.airport.displayboardbackend.entity.Arrivals;

@Repository
public class ArrivalsDAOHibernateImplement implements ArrivalsDAO {
	// Define field for entity manager
	private EntityManager entityManager;
	
	// Set up constructor injection
	@Autowired
	public ArrivalsDAOHibernateImplement(EntityManager theEntityManager) {
		entityManager = theEntityManager;
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
