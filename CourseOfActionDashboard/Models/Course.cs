using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CourseOfActionDashboard.Models
{
    public class Course
    {
        [Key, Column(Order = 1)]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public string Code { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public double CreditValue { get; set; }

        public string SubjectCode1 { get; set; }

        public string SubjectCode2 { get; set; }

        public string Notes { get; set; }

        public List<Course> Prerequisites { get; set; }
    }
}
