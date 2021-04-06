using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CourseOfActionDashboard.Models;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Routing;
using System.Data.Entity;

namespace CourseOfActionDashboardTests.Controllers
{
    [TestClass()]
    class HomeControllerTests
    {
        private DB_Entities _db = new DB_Entities();
        private DB_Courses _dbCourses = new DB_Courses();
        private readonly ILogger<HomeController> _logger;

        [TestMethod()]]
        public void TestIndex()
        {
            Assert.ThrowsException<System.ArgumentNullException>(() => Index(null));
        }
    }
}
