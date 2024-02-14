﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.EF.Models
{
    public class Admin
    {
        [Key]

        public int Id { get; set; }

        [ForeignKey("User")]
        public string UId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public string Phone { get; set; }
        public string ProfilePicture { get; set; }

        public virtual User User { get; set; }
    }
}