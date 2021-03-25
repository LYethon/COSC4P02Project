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
        public int CID { get; set; }

        public string Name { get; set; }

        public string Code { get; set; }

        public string Subject { get; set; }

        public string AlternativeSubject1 { get; set; }

        public string AlternativeSubject2 { get; set; }

        public string Description { get; set; }

        public double CreditValue { get; set; }

        public List<int> Prerequisites { get; set; }

        public string Context { get; set; }

    }
}
