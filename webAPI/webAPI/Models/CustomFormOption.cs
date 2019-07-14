using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class CustomFormOption
    {
        public int ID { get; set; }

        public string key { get; set; }

        public string value { get; set; }

        public int? CustomFormFieldID { get; set; }

    }
}
