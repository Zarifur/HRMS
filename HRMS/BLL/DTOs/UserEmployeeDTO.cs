using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class UserEmployeeDTO
    {
        public string UId { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string UserType { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string Position { get; set; }
        public int Salary { get; set; }
        public DateTime joined { get; set; }
        public string Depertment { get; set; }

    }
}
