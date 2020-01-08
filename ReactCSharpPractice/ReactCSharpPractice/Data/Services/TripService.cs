using System;
using System.Collections.Generic;
using System.Linq;
using ReactCSharpPractice.Data.Models;

namespace ReactCSharpPractice.Data.Services
{
    public class TripService : ITripService
    {
        public void AddTrip(Trip trip) => Data.Trips.Add(trip);

        public void DeleteTrip(int tripId, Trip trip)
        {
            throw new NotImplementedException();
        }

        public List<Trip> GetAllTrips() => Data.Trips.ToList();

        public Trip GetTripById(int tripId) => Data.Trips.FirstOrDefault(x => x.Id == tripId);

        public void UpdateTrip(int tripId, Trip trip)
        {
            Trip oldTrip = GetTripById(tripId);

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
