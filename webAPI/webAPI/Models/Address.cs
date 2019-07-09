using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class Address
    {
        [Key]
        public int ID { get; set; }

        public string Address1 { get; set; }

        public string City { get; set; }


    }
}
