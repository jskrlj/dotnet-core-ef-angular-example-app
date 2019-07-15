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

            //var form = await _context.CustomFormFields.Include(fi => fi.options).ToListAsync();

            var forms = await _context.CustomFormsCollection.ToListAsync();


            //var form = await _context.CustomFormsCollection.ToListAsync();
            //for (var i = 0; i < form.Count; i++)
            //{
            //      _context.Entry(form[i]).Collection(f => f.CustomFormFields).Load();
            //    //    for (var j = 0; i < form[i].CustomFormFields.Count; j++)
            //    foreach (var fi in form[i].CustomFormFields)
            //    {
            //        fi.customFormCollection = null;

            //        //        form[i].CustomFormFields[j].= null;
            //        _context.Entry(fi).Collection(fld => fld.options).Load();
            //        //    }
            //    }

            //}


            //var form1 = _context.CustomFormsCollection.Find(1);
            //_context.Entry()


            //var form = await _context.CustomFormsCollection
            //    .Include(fo => fo.CustomFormFields)
            //    .ToListAsync(); //.ToListAsync();




            if (forms == null)
            {
                return NotFound();
            }


            return Ok(forms);


        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var custom_form = await _context.CustomFormsCollection
                .Include(fo => fo.CustomFormFields).ToListAsync();

                
            var form_fields = custom_form.Where(f => f.ID == id).ToList()[0];
            //custom_form.
            //custom_form = custom_form[id];
            //var custom_form = await _context.CustomFormsCollection.FindAsync(id);
            //custom_form = custom_form.CustomFormFields.;
            //var form_fields = f[id].CustomFormFields;

            foreach (var fi in form_fields.CustomFormFields) {
                fi.customFormCollection = null;
            }

            if (custom_form == null)
            {
                return NotFound();
            }

            return Ok(form_fields.CustomFormFields);
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
