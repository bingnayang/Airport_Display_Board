package com.airport.displayboardbackend.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.airport.displayboardbackend.entity.Departures;

@Repository
public class DeparturesDAOHibernateImplement implements DeparturesDAO {
	// Define field for entity manager
	private EntityManager entityManager;
	// Set up constructor injection
	@Autowired
	public DeparturesDAOHibernateImplement(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}

	@Override
	public List<Departures> findAll() {
		// get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// create a query
		Query<Departures> theQuery =
				currentSession.createQuery("from Departures", Departures.class);
		
		// execute query and get result list
		List<Departures> departures = theQuery.getResultList();
		
		// return the results		
		return departures;
	}

	@Override
	public Departures findById(int id) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Get the departure
		Departures theDeparture = currentSession.get(Departures.class, id);
		
		// Return the departure
		return theDeparture;
	}

	@Override
	public void save(Departures theDeparture) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Save departure
		currentSession.saveOrUpdate(theDeparture);
		
	}

	@Override
	public void deleteById(int id) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Delete object with id
		Query theQuery = currentSession.createQuery("delete from Departures where id=:departureId");
		theQuery.setParameter("departureId",id);
		theQuery.executeUpdate();
	}

}
