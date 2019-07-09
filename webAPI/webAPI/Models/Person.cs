using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class Person
    {
        [Key]
        public int ID { get; set; }

        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(100)]
        public string Surname { get; set; }

        public int? AddressID { get; set; }
        public virtual Address Address { get; set; }

        public int? ShirtDetailID { get; set; }

        public virtual ShirtDetail ShirtDetail { get; set; }

        public int? PaymentDetailID { get; set; }
        public virtual PaymentDetail PaymentDetail { get; set; }

    }
}
