using DAL.EF.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EF
{
    public class HRMSContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Admin> Admins { get; set; }

        public DbSet<Token> Tokens { get; set; }
        public DbSet<Payroll> PayRolls { get; set; }
        public DbSet<PaymentHistory> PaymentHistorys { get; set; }
        public DbSet<EmployeeHistory> EmployeeHistorys { get; set; }
    }
}
