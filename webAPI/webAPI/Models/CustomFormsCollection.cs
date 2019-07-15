using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class CustomFormsCollection
    {
        [Key]
        public int ID { get; set; }

        public string name { get; set; }

        public ICollection<CustomFormField> CustomFormFields { get; set; }

    }
}
