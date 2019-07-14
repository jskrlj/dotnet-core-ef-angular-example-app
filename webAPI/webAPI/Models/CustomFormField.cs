using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class CustomFormField
    {
        [Key]
        public int ID { get; set; }

        public string field_type { get; set; }

        public string value { get; set; }

        public string key{ get; set; }

        public string label{ get; set; }

        public string required{ get; set; }

        public string order{ get; set; }

        public string controlType { get; set; }

        public ICollection<CustomFormOption> options { get; set; }






    }
}
