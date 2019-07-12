using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using webAPI.Models;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DynamicFormsController : ControllerBase
    {
        private readonly DynFormsContext _context;

        public DynamicFormsController(DynFormsContext context)
        {
            _context = context;
        }

        // GET: api/DynamicForms
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/DynamicForms/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/DynamicForms
        [HttpPost]
        public string Post([FromBody] string value)
        {

            try
            {
                JObject jsonObj = JObject.Parse(value);
                Dictionary<string, string> dictObj = jsonObj.ToObject<Dictionary<string, string>>();
                List<String> myKeys = dictObj.Keys.ToList();
                List<String> myValues = dictObj.Values.ToList();

                Form tform = new Form();

                for (int i = 0; i < myKeys.Count; i++)
                {
                    Field tfield = new Field();
                    Value tvalue = new Value();

                    tfield.Name = myKeys[i];
                    tvalue.value = myValues[i];

                    tfield.Form = tform;
                    tfield.Value = tvalue;
                    tvalue.Field = tfield;
                    tvalue.Form = tform;


                    _context.Fields.Add(tfield);
                    _context.Values.Add(tvalue);

                    tform.Fields.Add(tfield);


                }
                _context.Forms.Add(tform);


                _context.SaveChanges();
                return dictObj.Keys.ToList()[0] + "success!";

            }
            catch (Exception ex)
            {
                return ex.ToString();     
            }
           
        }

        // PUT: api/DynamicForms/5
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
