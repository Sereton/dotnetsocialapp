using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;



namespace socialapp.API.Controllers
{
    
        [Route("api/[controller]")]
        [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly DataContext _context;

        public ActivitiesController(DataContext context)
        {
           _context = context;


        }

        // GET api/activities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Activity>>> Get()
        {
            var activities = await _context.Activities.ToListAsync();
            return Ok(activities);
        }

        // GET api/activities
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> Get(int id)
        {
           var activity = await _context.Activities.FindAsync(id);
           return Ok(activity);
        }

        // POST api/activities
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/activities/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/activities/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
    }
