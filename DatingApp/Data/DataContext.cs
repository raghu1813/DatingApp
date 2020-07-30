﻿using DatingApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Data
{
    public class DataContext: DbContext
    {
      

        public DataContext(DbContextOptions<DataContext> options): base(options){}
       

        public DbSet<Value> Values { get; set; }
    }
}
