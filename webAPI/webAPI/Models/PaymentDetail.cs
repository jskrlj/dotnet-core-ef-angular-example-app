using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class PaymentDetail
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [StringLength(100)]
        public string CardOwnerName { get; set; }

        [Required]
        [StringLength(16)]
        public string CardNumber { get; set; }

        [Required]
        [StringLength(5)]
        public string ExpirationDate { get; set; }

        [Required]
        [StringLength(3)]
        public string CVV { get; set; }
    }
}
