using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class ConferenceContext :DbContext
    {

        public ConferenceContext(DbContextOptions<ConferenceContext> options) : base(options)
        {

        }

        public DbSet<Address> Addresses { get; set; }
        public DbSet<PaymentDetail> PaymentDetails{ get; set; }
        public DbSet<Person> Person { get; set; }
        public DbSet<ShirtDetail> ShirtDetails { get; set; }

    }
}
