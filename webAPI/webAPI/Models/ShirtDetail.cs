using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public enum ShirtLogo
    {
        [Display(Name = "Awesome dragon logo")]
        Dragon,

        [Display(Name = "Beautiful flower logo")]
        Flower,

        [Display(Name = "Smart cube logo")]
        Cube,

        [Display(Name = "Wonderful mushroom logo")]
        Mushroom 
    }
    public class ShirtDetail
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [StringLength(3)]
        public string Size { get; set; }

        [Required]
        [StringLength(10)]
        public string Color { get; set; }

        public ShirtLogo? ShirtLogo { get; set; }

        



    }
   


}
