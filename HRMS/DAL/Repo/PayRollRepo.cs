using DAL.EF.Models;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repo
{
    internal class PayRollRepo : Repo, IRepo<Payroll, string, Payroll>
    {
        public Payroll Add(Payroll obj)
        {
            db.PayRolls.Add(obj);
            if (db.SaveChanges() > 0) return obj;
            return null;
        }
        public List<Payroll> Get()
        {
            return db.PayRolls.ToList();
        }
        public bool Delete(string id)
        {
            throw new NotImplementedException();
        }

        public Payroll Get(string id)
        {
            throw new NotImplementedException();
        }

        public Payroll Update(Payroll obj)
        {
            throw new NotImplementedException();
        }
    }
}
