using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class Value
    {
        [Key]
        public int ID { get; set; }

        public string value { get; set; }

        public int? FormID { get; set; }
        public virtual Form Form { get; set; }

        public int? FieldID { get; set; }
        public virtual Field Field { get; set; }




    }
}
