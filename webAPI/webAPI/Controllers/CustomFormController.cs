using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
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
        [HttpPost]
        public string Post([FromBody] string value)
        {

            //try
            //{
            //    JObject jsonObj = JObject.Parse(value);
            //    Dictionary<string, string> dictObj = jsonObj.ToObject<Dictionary<string, string>>();
            //    List<String> myKeys = dictObj.Keys.ToList();
            //    List<String> myValues = dictObj.Values.ToList();

            //    Form tform = new Form();

            //    for (int i = 0; i < myKeys.Count; i++)
            //    {
            //        Field tfield = new Field();
            //        ResponseValue tvalue = new ResponseValue();

            //        tfield.Name = myKeys[i];
            //        tvalue.value = myValues[i];

            //        tfield.Form = tform;
            //        tfield.Value = tvalue;
            //        tvalue.Field = tfield;
            //        tvalue.Form = tform;


            //        _context.Fields.Add(tfield);
            //        _context.Values.Add(tvalue);

            //        tform.Fields.Add(tfield);


            //    }
            //    _context.Forms.Add(tform);


            //    _context.SaveChanges();
            //    return "success!";

            //}
            //catch (Exception ex)
            //{

            //    //System.Diagnostics.Debug.WriteLine(ex.ToString());
            //    return ex.ToString();
            //    //return "There was an error";
            //}
            return "TODO";

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
