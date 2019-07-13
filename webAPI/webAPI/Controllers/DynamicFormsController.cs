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
    public class DynamicFormsController : ControllerBase
    {
        private readonly DynFormsContext _context;

        public DynamicFormsController(DynFormsContext context)
        {
            _context = context;
        }

        // GET: api/DynamicForms
        [HttpGet]
        public async Task<IActionResult> GetForms()
        {

            var forms = await _context.Forms
                .Include(fo => fo.Fields)
                .ThenInclude(field => field.Value).ToListAsync();


            foreach (Form fo in forms) {
                foreach (Field fi in fo.Fields)
                {
                    fi.Form = null;
                    fi.Value.Form = null;
                    fi.Value.Field = null;
          
                }

            }




            if (forms == null)
            {
                //System.Diagnostics.Debug.WriteLine(ex.ToString());
                return NotFound();
            }


            return Ok(forms);


        }






        // GET: api/DynamicForms/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<IActionResult> Get(int id)
        {



            await _context.Forms
                .Include(fo => fo.Fields)
                .ThenInclude(field => field.Value)
                .Where(fo => fo.ID == id).ToListAsync();

            var form = await _context.Forms.FindAsync(id);
            var fields = form.Fields;

            var ret_form = new Form();
            ret_form.Fields = new List<Field>();
            ret_form.ID = form.ID;

            foreach (Field fi in fields)
            {
                Field tmp_fi = new Field();
                tmp_fi.Name = fi.Name;
                tmp_fi.ID = fi.ID;
                Value tmp_val = new Value();
                tmp_val.value = fi.Value.value;
                tmp_val.ID = fi.Value.ID;
                tmp_fi.Value = tmp_val;
                ret_form.Fields.Add(tmp_fi);
            }


            if (form == null)
            {
                //System.Diagnostics.Debug.WriteLine(ex.ToString());

                return NotFound();
            }


            return Ok(ret_form);


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
                return "success!";

            }
            catch (Exception ex)
            {

                //System.Diagnostics.Debug.WriteLine(ex.ToString());
                return ex.ToString();
                //return "There was an error";
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
