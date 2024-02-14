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
    public class PayRollDTO
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("User")]
        public string UId { get; set; }
        public int TotalWorkDays { get; set; }
        public int TotalOvertime { get; set; }
        public int GrossPay { get; set; }
        public int IncomeTax { get; set; }
        public int Deductions { get; set; }
        public int Bonus { get; set; }
        public int Netpay { get; set; }
        public string Status { get; set; }
        public virtual User User { get; set; }
    }
}
