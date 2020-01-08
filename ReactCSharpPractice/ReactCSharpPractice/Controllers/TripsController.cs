using System;
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
            this._tripService = tripService;
        }

        [HttpPost("AddTrip")]
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
