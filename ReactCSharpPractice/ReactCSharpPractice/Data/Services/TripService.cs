using System;
using System.Collections.Generic;
using System.Linq;
using ReactCSharpPractice.Data.Models;

namespace ReactCSharpPractice.Data.Services
{
    public class TripService : ITripService
    {
        public void AddTrip(Trip trip) => Data.Trips.Add(trip);

        public void DeleteTrip(int id)
        {
            Trip trip = GetTripById(id);

            if (trip != null)
            {
                Data.Trips.Remove(trip);
            }
        }

        public List<Trip> GetAllTrips() => Data.Trips.ToList();

        public Trip GetTripById(int id) => Data.Trips.FirstOrDefault(x => x.Id == id);

        public void UpdateTrip(int id, Trip trip)
        {
            Trip oldTrip = GetTripById(id);

            if (oldTrip != null)
            {
                oldTrip.Name = trip.Name;
                oldTrip.Description = trip.Description;
                oldTrip.DateStarted = trip.DateStarted;
                oldTrip.DateCompleted = trip.DateCompleted;
            }
        }
    }
}
