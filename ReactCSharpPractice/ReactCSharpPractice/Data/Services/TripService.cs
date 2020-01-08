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

        public Trip GetTripById(int tripId)
        {
            throw new NotImplementedException();
        }

        public void UpdateTrip(int tripId, Trip trip)
        {
            throw new NotImplementedException();
        }
    }
}
