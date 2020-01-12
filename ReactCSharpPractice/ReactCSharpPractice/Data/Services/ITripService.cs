using System;
using System.Collections.Generic;
using ReactCSharpPractice.Data.Models;

namespace ReactCSharpPractice.Data.Services
{
    public interface ITripService
    {
        List<Trip> GetAllTrips();

        Trip GetTripById(int id);

        void UpdateTrip(int id, Trip trip);

        void DeleteTrip(int id);

        void AddTrip(Trip trip);
    }
}
