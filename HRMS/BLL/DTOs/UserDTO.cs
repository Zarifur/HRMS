﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTOs
{
    public class UserDTO
    {
        public string UId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public string UserType { get; set; }
    }
}