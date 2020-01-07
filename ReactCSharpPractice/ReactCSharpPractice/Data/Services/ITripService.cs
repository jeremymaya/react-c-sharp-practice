using System;
using System.Collections.Generic;
using ReactCSharpPractice.Data.Models;

namespace ReactCSharpPractice.Data.Services
{
    public interface ITripService
    {
        List<Trip> GetAllTrips();

        Trip GetTripById(int tripId);

        void UpdateTrip(int tripId, Trip trip);

        void DeleteTrip(int tripId, Trip trip);

        void AddTrip(Trip trip);
    }
}
