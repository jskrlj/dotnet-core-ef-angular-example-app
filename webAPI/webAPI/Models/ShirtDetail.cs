using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public enum ShirtLogo
    {
        Dragon, Flower, Cube, Mushroom 
    }
    public class ShirtDetail
    {
        [Key]
        public int ID { get; set; }

        [StringLength(3)]
        public string Size { get; set; }

        [StringLength(10)]
        public string Color { get; set; }

        public ShirtLogo? ShirtLogo { get; set; }


    }
}
