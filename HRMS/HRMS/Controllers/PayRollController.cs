using BLL.DTOs;
using BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HRMS.Controllers
{
    [EnableCors("*", "*", "*")]
    public class PayRollController : ApiController
    {
        [Route("api/payroll/add")]
        [HttpPost]
        public HttpResponseMessage Add(PayRollDTO Em)
        {
            try
            {
                Em.Netpay=(Em.GrossPay+Em.Bonus+Em.TotalOvertime)-(Em.Deductions+Em.IncomeTax);
                var data = PayRollServices.AddPayRoll(Em);
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [Route("api/payroll/get")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            try
            {
                var data = PayRollServices.Get();
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}
