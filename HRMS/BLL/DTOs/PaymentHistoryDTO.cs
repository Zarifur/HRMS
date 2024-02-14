using DAL.EF.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class PaymentHistoryDTO
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("User")]
        public string UId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Position { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string NewPosition { get; set; }
        public string Depertment { get; set; }
        public virtual User User { get; set; }
    }
}
