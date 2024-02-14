using DAL.EF.Models;
using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repo
{
    internal class UserRepo: Repo, IRepo<User, string, User>, IAuth
    {
        public User Add(User obj)
        {
            db.Users.Add(obj);
            if (db.SaveChanges() > 0)
            {
                return obj;
            }
            return null;
        }

        public User Authenticate(string Email, string Password)
        {
            var obj = db.Users.FirstOrDefault(x => x.Email.Equals(Email) && x.Password.Equals(Password));
            return obj;
        }

        public bool Delete(string uid)
        {
            db.Users.Remove(db.Users.SingleOrDefault(x => x.UId == uid));
            if (db.SaveChanges() > 0)
            {
                return true;
            }
            return false;
        }

        public bool Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<User> Get()
        {
            return db.Users.ToList();
        }

        public User Get(string uid)
        {
            var DBUser = db.Users.SingleOrDefault(x => x.UId == uid);
            if (DBUser != null)
            {
                return DBUser;
            }
            return null;
        }

        public User Get(int id)
        {
            throw new NotImplementedException();
        }

        public User GetUser(string UId)
        {
            var obj = db.Users.FirstOrDefault(x => x.UId.Equals(UId));
            return obj;
        }

        public User Update(User obj)
        {
            var DBUser = Get(obj.UId);
            db.Entry(DBUser).CurrentValues.SetValues(obj);
            if (db.SaveChanges() > 0) return obj;
            return null;
            throw new NotImplementedException();
        }
    }
}
