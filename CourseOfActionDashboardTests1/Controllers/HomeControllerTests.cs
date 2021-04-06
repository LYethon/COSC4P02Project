using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CourseOfActionDashboard.Models;

namespace CourseOfActionDashboard.Controllers.Tests
{
    [TestClass()]
    public class HomeControllerTests
    {
        private DB_Entities _db = new DB_Entities();
        private DB_Courses _dbCourses = new DB_Courses();
        private readonly ILogger<HomeController> _logger;

        [TestMethod()]
        public void IndexTestNull()
        {
            var HomeController = new HomeController(_logger);

            Assert.ThrowsException<NullReferenceException>(() => HomeController.Index(null));
        }

        [TestMethod()]
        public void saveScheduleTestConfirm()
        {
            var HomeController = new HomeController(_logger);

            int studentId = 1005; //Create student in database for testing with this ID
            int[][] idList = new int[4][];
            idList[0] = new int[] { 1, 2 };
            idList[1] = new int[] { 3, 4 };
            idList[2] = new int[] { 5, 6 };
            idList[3] = new int[] { 7, 8 };

            HomeController.saveSchedule(idList, studentId);
        }

        [TestMethod()]
        public void saveScheduleTestNull()
        {
            var HomeController = new HomeController(_logger);

            int studentId = 1005;

            Assert.ThrowsException<NullReferenceException>(() => HomeController.saveSchedule(null, studentId));
        }

        [TestMethod()]
        public void saveScheduleTestInvalid()
        {
            var HomeController = new HomeController(_logger);

            int studentId = 1005;
            int[][] idList = new int[1][];
            idList[0] = new int[] {-1};

            Assert.ThrowsException<ArgumentException>(() => HomeController.saveSchedule(idList, studentId));

        }

        [TestMethod()]
        public void LoginPageTestConfirm()
        {
            var HomeController = new HomeController(_logger);

            var result = HomeController.LoginPage("test@brocku.ca", "test");
            var redirectResult = result as RedirectToActionResult;

            Assert.IsNull(redirectResult);
        }

        [TestMethod()]
        public void LoginPageTestNull()
        {
            var HomeController = new HomeController(_logger);

            var result = HomeController.LoginPage(null, null);
            var redirectResult = result as RedirectToActionResult;

            Assert.IsNotNull(redirectResult);
        }

        [TestMethod()]
        public void LoginPageTestIncorrectLogin()
        {
            var HomeController = new HomeController(_logger);

            var result = HomeController.LoginPage("test@brocku.ca", "wrong");
            var redirectResult = result as RedirectToActionResult;

            Assert.AreEqual(redirectResult.ActionName, "LoginPage");
        }

        [TestMethod()]
        public void GetMD5TestConfirm()
        {
            var HomeController = new HomeController(_logger);

            String testInput = "testing";
            String testOutput = "ae2b1fca515949e5d54fb22b8ed95575";

            String result = HomeController.GetMD5(testInput);

            Assert.AreEqual(testOutput, result);
        }

        [TestMethod()]
        public void GetMD5TestNull()
        {
            var HomeController = new HomeController(_logger);

            Assert.ThrowsException<ArgumentNullException>(() => HomeController.GetMD5(null));
        }
    }
}