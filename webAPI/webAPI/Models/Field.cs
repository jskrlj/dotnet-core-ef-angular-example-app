using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class Field
    {
        [Key]
        public int ID { get; set; }

        public string Name { get; set; }

        public int? FormID { get; set; }
        public virtual Form Form { get; set; }

        public virtual ResponseValue Value { get; set; }


    }
}
