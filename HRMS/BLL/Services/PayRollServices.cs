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
    public class PayRollServices
    {
        public static List<PayRollDTO> Get()
        {
            var data = DataAccessFactory.PayRollDataAccess().Get();
            var config = new MapperConfiguration(c => {
                c.CreateMap<Payroll, PayRollDTO>();
            });
            var mapper = new Mapper(config);
            return mapper.Map<List<PayRollDTO>>(data);
        }
        public static PayRollDTO AddPayRoll(PayRollDTO pay)
        {
            var cfg = new MapperConfiguration(c => {
                c.CreateMap<PayRollDTO, Payroll>();
                c.CreateMap<Payroll, PayRollDTO>();
            });
            var mapper = new Mapper(cfg);
            var data = mapper.Map<Payroll>(pay);
            var rt = DataAccessFactory.PayRollDataAccess().Add(data);
            if (rt != null)
            {
                return mapper.Map<PayRollDTO>(rt);
            }
            return null;
        }
    }
}
