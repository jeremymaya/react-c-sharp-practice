using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactCSharpPractice.Data.Models;
using ReactCSharpPractice.Data.Services;

namespace ReactCSharpPractice.Controllers
{
    [Route("api/[controller]")]

    public class TripsController : Controller
    {
        private readonly ITripService _tripService;

        public TripsController(ITripService tripService)
        {
            _tripService = tripService;
        }

        [HttpGet("GetTrips")]
        public IActionResult GetTrips()
        {
            List<Trip> allTrips = _tripService.GetAllTrips();

            return Ok(allTrips);
        }

        //url can be replaced with [action] since url and the action method names are the same
        [HttpPost("[action]")]
        public IActionResult AddTrip([FromBody]Trip trip)
        {
            if(trip != null)
            {
                _tripService.AddTrip(trip);
            }

            return Ok();
        }

    }
}
