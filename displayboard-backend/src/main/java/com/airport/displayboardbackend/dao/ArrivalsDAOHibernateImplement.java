package com.airport.displayboardbackend.dao;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
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
		// get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// create a query
		Query<Arrivals> theQuery =
				currentSession.createQuery("from Arrivals arrival ORDER by arrival.airline", Arrivals.class);
		
		// execute query and get result list
		List<Arrivals> arrivals = theQuery.getResultList();
		for(Arrivals temp : arrivals) {
			String scheduledTime = LocalTime.parse(temp.getScheduledTime(), DateTimeFormatter.ofPattern("HH:mm")).format(DateTimeFormatter.ofPattern("hh:mm a"));
			String estimateTime = LocalTime.parse(temp.getEstimateTime(), DateTimeFormatter.ofPattern("HH:mm")).format(DateTimeFormatter.ofPattern("hh:mm a"));

			temp.setScheduledTime(scheduledTime);
			temp.setEstimateTime(estimateTime);
		}
		
		// return the results		
		return arrivals;
	}

	@Override
	public Arrivals findById(int id) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Get the arrival
		Arrivals theArrival = currentSession.get(Arrivals.class, id);
		
		// Return the arrival
		return theArrival;
	}

	@Override
	public void save(Arrivals theArrival) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Save departure
		currentSession.saveOrUpdate(theArrival);

	}

	@Override
	public void deleteById(int id) {
		// Get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// Delete object with id
		Query theQuery = currentSession.createQuery("delete from Arrivals where id=:arrivalId");
		theQuery.setParameter("arrivalId",id);
		theQuery.executeUpdate();

	}

}
