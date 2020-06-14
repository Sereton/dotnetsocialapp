using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class Activities2Controller : ControllerBase //No need view since we are using React
    {
        private readonly IMediator _mediator;
        public Activities2Controller(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]

        public async Task<ActionResult<List<Activity>>> List(){
            return await _mediator.Send(new List.Query());
        }
    }
}