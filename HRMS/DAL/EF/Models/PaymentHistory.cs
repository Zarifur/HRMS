using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EF.Models
{
    public class PaymentHistory
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("User")]
        public string UId { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public DateTime PaymentDate { get; set; }
        public string Amount { get; set; }
        public string Status { get; set; }
        public virtual User User { get; set; }
    }
}
