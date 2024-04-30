using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controller
{
        [ApiController]
        [Route("api/[controller]")]
    public class StudentsController:ControllerBase
    {
        [HttpGet]
        public string SayHi()
        {
            return "Hi";
        }

    }
}