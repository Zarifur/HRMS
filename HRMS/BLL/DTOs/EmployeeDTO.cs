using DAL.EF.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class EmployeeDTO
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("User")]
        public string UId { get; set; }
        [Required]
        [StringLength(50)]

        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [StringLength(20)]
        public string Gender { get; set; }

        [StringLength(20)]
        public string PhoneNumber { get; set; }

        [StringLength(50)]
        public string Address { get; set; }
        [StringLength(50)]
        public string Position { get; set; }

        public int Salary { get; set; }
        [Required]
        public DateTime joined { get; set; }
        [Required]
        public DateTime? Left { get; set; }
        public string Depertment { get; set; }

        public int AccNumber { get; set; }
        public string ProfilePicture { get; set; }

        public virtual User User { get; set; }
    }
}
