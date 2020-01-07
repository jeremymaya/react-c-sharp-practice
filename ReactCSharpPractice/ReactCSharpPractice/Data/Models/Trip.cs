using System;
namespace ReactCSharpPractice.Data.Models
{
    public class Trip
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime DateStarted { get; set; }

        // ? == optional
        public DateTime? DateCompleted { get; set; }
    }
}
