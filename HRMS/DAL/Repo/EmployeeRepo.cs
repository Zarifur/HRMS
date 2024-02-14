using DAL.EF.Models;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repo
{
    internal class EmployeeRepo : Repo, IRepo<Employee, string, Employee>
    {
        public Employee Add(Employee obj)
        {
            db.Employees.Add(obj);
            if (db.SaveChanges() > 0) return obj;
            return null;
        }

        public bool Delete(string uid)
        {
            var Employee = Get(uid);
            db.Employees.Remove(Employee);
            if (db.SaveChanges() > 0) return true;
            return false;
        }

        public List<Employee> Get()
        {
            return db.Employees.ToList();
        }

        public Employee Get(string uid)
        {
            Employee em = db.Employees.SingleOrDefault(p => p.UId == uid);
            return em;
        }

        public Employee Update(Employee obj)
        {
            var Employee = Get(obj.UId);
            db.Entry(Employee).CurrentValues.SetValues(obj);
            if (db.SaveChanges() > 0) return obj;
            return null;
        }
    }
}
