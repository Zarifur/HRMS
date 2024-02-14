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
    public class EmployeeController : ApiController
    {
        [Route("api/employee/get")]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            try
            {
                var data = EmployeeServices.Get();
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [Route("api/employee/add")]
        [HttpPost]
        public HttpResponseMessage Add(UserEmployeeDTO Em)
        {
            try
            {
                Em.UserType = "Employee";
                var data = EmployeeServices.AddEmployee(Em);
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("api/employee/get/{uid}")]
        [HttpGet]
        //[IsLogged]
        public HttpResponseMessage Get(string uid)
        {
            try
            {
                var data = EmployeeServices.Get(uid);
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("api/employee/update")]
        [HttpPost]
        //[CustomerLogin]
        public HttpResponseMessage Update(EmployeeDTO employee)
        {
            try
            {
                var data = EmployeeServices.Update(employee);
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("api/customer/delete/{id}")]
        [HttpGet]
        //[CustomerLogin]
        public HttpResponseMessage Delete(string ID)
        {
            try
            {
                var data = EmployeeServices.Delete(ID);
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}
