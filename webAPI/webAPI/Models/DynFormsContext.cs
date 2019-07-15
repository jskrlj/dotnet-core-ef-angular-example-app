using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class DynFormsContext :DbContext
    {

        public DynFormsContext(DbContextOptions<DynFormsContext> options) : base(options)
        {
            
        }

        public DbSet<Form> Forms { get; set; }
        public DbSet<Field> Fields{ get; set; }
        public DbSet<ResponseValue> Values { get; set; }

        public DbSet<CustomFormsCollection> CustomFormsCollection{ get; set; }
        public DbSet<CustomFormField> CustomFormFields { get; set; }
        public DbSet<CustomFormOption> CustomFormOptions { get; set; }


    }
}
