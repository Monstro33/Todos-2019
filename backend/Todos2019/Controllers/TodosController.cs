using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Todos2019.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {

        private static List<string> all = new List<string>()
        {
            "sweep",
            "clean",
            "play with kids"
        };

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new List<string>() { "clean bathroom", "sweep", "play with kids" };
        }

        [HttpPost]
        public ActionResult<bool> Post([FromBody] string todo)
        {
            return true;
        }
    }   
}