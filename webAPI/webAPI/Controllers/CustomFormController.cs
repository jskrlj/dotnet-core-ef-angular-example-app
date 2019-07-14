using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webAPI.Models;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomFormController : ControllerBase
    {

        private readonly DynFormsContext _context;

        public CustomFormController(DynFormsContext context)
        {
            _context = context;
        }

        // GET: api/CustomForm
        [HttpGet]
        public async Task<IActionResult> Get()
        {

            var form = await _context.CustomFormFields.Include(fi => fi.options).ToListAsync();

           



            if (form == null)
            {
                return NotFound();
            }


            return Ok(form);


        }



        // POST: api/CustomForms
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/CustomForms/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
