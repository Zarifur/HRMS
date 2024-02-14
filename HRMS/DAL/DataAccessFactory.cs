using DAL.EF.Models;
using DAL.Interfaces;
using DAL.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DataAccessFactory
    {
        //public static IRepo<Admin, int, Admin> AdminDataAccess()
        //{
        //    return new AdminRepo();
        //}
        public static IRepo<User, string, User> UserDataAccess()
        {
            return new UserRepo();
        }
        public static IRepo<Employee, string, Employee> EmployeeDataAccess()
        {
            return new EmployeeRepo();
        }
        public static IRepo<Payroll, string, Payroll> PayRollDataAccess()
        {
            return new PayRollRepo();
        }
        public static IAuth AuthDataAccess()
        {
            return new UserRepo();
        }
        public static IRepo<Token, string, Token> TokenDataAccess()
        {
            return new TokenRepo();
        }
    }
}
