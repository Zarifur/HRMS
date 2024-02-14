using AutoMapper;
using BLL.DTOs;
using DAL;
using DAL.EF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class EmployeeServices
    {
        public static UserEmployeeDTO AddEmployee(UserEmployeeDTO em)
        {
            var config = new MapperConfiguration(c =>
            {
                c.CreateMap<UserDTO, User>();
                c.CreateMap<User, UserDTO>();
                c.CreateMap<EmployeeDTO, Employee>();
            });
            var mapper = new Mapper(config); 
            string guid = System.Guid.NewGuid().ToString();
            var user = new UserDTO()
            {
                Email = em.Email,
                Password = em.Password,
                UserType = em.UserType,
                UId = guid,
            };
            var Employee = new EmployeeDTO()
            {
                Email = em.Email,
                Name = em.Name,
                Salary = em.Salary,
                Gender = em.Gender,
                Address = em.Address,
                Position = em.Position,
                PhoneNumber = em.PhoneNumber,
                joined = em.joined,
                Depertment = em.Depertment,
                AccNumber = 10,
                UId = guid,
            };
            var dbuser = DataAccessFactory.UserDataAccess().Add(mapper.Map<User>(user));
 

            if (dbuser != null)
            {

                var dbemployee = DataAccessFactory.EmployeeDataAccess().Add(mapper.Map<Employee>(Employee));
                return null;
            }
             return null;

        }

        public static List<EmployeeDTO> Get()
        {
            ////var UserList = UserServices.Get();
            ////var EmployeeList = DataAccessFactory.EmployeeDataAccess().Get();
            //var UserEmployeeList = new List<UserEmployeeDTO>();
            var data = DataAccessFactory.EmployeeDataAccess().Get();
            var config = new MapperConfiguration(c => {
                c.CreateMap<Employee, EmployeeDTO>();
            });
            var mapper = new Mapper(config);
            return mapper.Map<List<EmployeeDTO>>(data);
        }
        //public static UserEmployeeDTO Get(string id)
        //{
        //    var User = UserServices.Get(id);
        //    var Em = DataAccessFactory.EmployeeDataAccess().Get(id);

        //    if (User != null && Em != null)
        //    {
        //        var EmployeeUser = new UserEmployeeDTO
        //        {
        //            UId = User.UId,
        //            Password = User.Password,
        //            UserType = User.UserType,
        //            Name = Em.Name,
        //            Email = Em.Email,
        //            PhoneNumber = Em.PhoneNumber,
        //        };
        //        return EmployeeUser;
        //    }
        //    return null;
        //}

        public static EmployeeDTO Get(string uid)
        {
            var data = DataAccessFactory.EmployeeDataAccess().Get(uid);
            var config = new MapperConfiguration(c =>
            {
                c.CreateMap<Employee, EmployeeDTO>();
            });
            var mapper = new Mapper(config);
            return mapper.Map<EmployeeDTO>(data);
        }


        public static bool Delete(string uid)
        {
            var data = DataAccessFactory.UserDataAccess().Delete(uid);
            return DataAccessFactory.EmployeeDataAccess().Delete(uid);
        }

        public static EmployeeDTO Update(EmployeeDTO data)
        {
            var config = new MapperConfiguration(c =>
            {
                c.CreateMap<EmployeeDTO, Employee>();
                c.CreateMap<Employee, EmployeeDTO>();
            });
            var mapper = new Mapper(config);
            var dbobj = mapper.Map<Employee>(data);
            var ret = DataAccessFactory.EmployeeDataAccess().Update(dbobj);
            return mapper.Map<EmployeeDTO>(ret);
        }
    }
}
