using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class Form
    {
        [Key]
        public int ID { get; set; }

        public string Name { get; set; }

        public ICollection<Field> Fields { get; set; }

    }
}
