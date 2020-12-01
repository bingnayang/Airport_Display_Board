package com.airport.displayboardbackend.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.airport.displayboardbackend.entity.Airports;
import com.airport.displayboardbackend.entity.Gates;


@Repository
public class AirportsDAOImplement implements AirportsDAO {
	// Define field for entity manager
	private EntityManager entityManager;
	
	// Set up constructor injection
	@Autowired
	public AirportsDAOImplement(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}
	
	@Override
	public List<Airports> findCities() {
		// get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// create a query
		Query<Airports> theQuery =
				currentSession.createQuery("from Airports", Airports.class);
		
		// execute query and get result list
		List<Airports> airport = theQuery.getResultList();
		
		// return the results		
		return airport;
	}

	@Override
	public List<Gates> findGates() {
		// get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// create a query
		Query<Gates> theQuery =
				currentSession.createQuery("from Gates", Gates.class);
		
		// execute query and get result list
		List<Gates> gate = theQuery.getResultList();
		
		// return the results		
		return gate;
	}

}
