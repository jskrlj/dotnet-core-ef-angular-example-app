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
    public class ShirtDetailsController : ControllerBase
    {
        private readonly ConferenceContext _context;

        public ShirtDetailsController(ConferenceContext context)
        {
            _context = context;
        }

        // GET: api/ShirtDetails
        [HttpGet]
        public IEnumerable<ShirtDetail> GetShirtDetails()
        {
            return _context.ShirtDetails;
        }

        // GET: api/ShirtDetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetShirtDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var shirtDetail = await _context.ShirtDetails.FindAsync(id);

            if (shirtDetail == null)
            {
                return NotFound();
            }

            return Ok(shirtDetail);
        }

        // PUT: api/ShirtDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShirtDetail([FromRoute] int id, [FromBody] ShirtDetail shirtDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != shirtDetail.ID)
            {
                return BadRequest();
            }

            _context.Entry(shirtDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShirtDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ShirtDetails
        [HttpPost]
        public async Task<IActionResult> PostShirtDetail([FromBody] ShirtDetail shirtDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ShirtDetails.Add(shirtDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetShirtDetail", new { id = shirtDetail.ID }, shirtDetail);
        }

        // DELETE: api/ShirtDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShirtDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var shirtDetail = await _context.ShirtDetails.FindAsync(id);
            if (shirtDetail == null)
            {
                return NotFound();
            }

            _context.ShirtDetails.Remove(shirtDetail);
            await _context.SaveChangesAsync();

            return Ok(shirtDetail);
        }

        private bool ShirtDetailExists(int id)
        {
            return _context.ShirtDetails.Any(e => e.ID == id);
        }
    }
}