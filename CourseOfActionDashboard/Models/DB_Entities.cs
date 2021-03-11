using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace CourseOfActionDashboard.Models
{
    public class DB_Entities : DbContext
    {
        public DB_Entities() : base("NameOfDatabaseGoesHere") { }
        public DbSet<Student> Students { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {           
            //Database.SetInitializer<demoEntities>(null);
            modelBuilder.Entity<Student>().ToTable("Students");
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            base.OnModelCreating(modelBuilder);


        }
    }
}
