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
using System.IO;

namespace CourseOfActionDashboard.Controllers
{ 
    public class HomeController : Controller
    {
        private DB_Entities _db = new DB_Entities();
        private DB_Courses _dbCourses = new DB_Courses();

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index(Student student)
        {
            List<Course> courses = _dbCourses.courseTable.ToList();
            ViewData["Student"] = student;
            if (student.Schedule != null){
                Schedule schedule = JsonConvert.DeserializeObject<Schedule>(student.Schedule);
                ViewData["Schedule"] = schedule;
            }
            else{
                ViewData["Schedule"] = null;
            }
            ViewData["Courses"] = courses;
            return View("Index",student);
        }

        [HttpPost]
        public Course getCourse(int id)
        {
            Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(id)).FirstOrDefault();
            return course;
        }

        [HttpPost]
        public Schedule compareSchedules(int[][] requiredId, int[][] currentId)
        {
            string jsonSched = "{'Courses':[";

            for (int i = 0; i < requiredId.Length; i++)
            {
                jsonSched += "[";
                for (int q = 0; q < requiredId[i].Length; q++)
                {
                    for (int t = 0; t < currentId.Length; t++)
                    {
                        for (int p = 0; p < currentId[t].Length; p++)
                        {
                            if (requiredId[i][q] == currentId[t][p])
                            {
                                var temp = requiredId[i][q];
                                Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                                jsonSched += JsonConvert.SerializeObject(course) + ",";
                            }
                        }
                    }
                }
                jsonSched += "],";
            }
            jsonSched += "]}";

            Schedule schedule = JsonConvert.DeserializeObject<Schedule>(jsonSched);

            return schedule;
        }

        [HttpPost]
        public void saveSchedule(int[][] idList, int studentId)
        {
            string jsonSched = "{'Courses':[";

            for (int i = 0; i < idList.Length; i++)
            {
                jsonSched += "[";
                for (int q = 0; q < idList[i].Length; q++)
                {
                    var temp = idList[i][q];
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    jsonSched += JsonConvert.SerializeObject(course)+",";
                }
                jsonSched += "],";
            }
            jsonSched += "]}";

            Student student = _db.Students.Where(s => s.Id.Equals(studentId)).FirstOrDefault();
            student.Schedule = jsonSched;
            _db.Entry(student).State = EntityState.Modified;
            _db.SaveChanges();
        }

        [HttpGet]
        public FileContentResult ExportSchedule(int studentId)
        {
            string csv = "";
            Student student = _db.Students.Where(s => s.Id.Equals(studentId)).FirstOrDefault();

            if (student != null) {

                Schedule schedule = JsonConvert.DeserializeObject<Schedule>(student.Schedule);

                int i = 1;
                foreach (var year in schedule.Courses)
                {
                    csv += "Year " + i + ",";
                    foreach (var course in year)
                    {
                        csv += course.Code + ",";
                    }
                    csv += "\n";
                    i++;
                }
            }
            else
            {
                return null;
            }

            return File(new UTF8Encoding().GetBytes(csv), "text/csv", "StudentSchedule.csv");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult LoginPage()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult LoginPage(string email, string password)
        {
            if (ModelState.IsValid)
            {
                //var f_password = GetMD5(password);
                var data = _db.Students.Where(s => s.Email.Equals(email) && s.Password.Equals(password)).ToList();        
                if (data.Count() > 0)
                {                   
                    //Return to Index Page View with the student object that logged in
                    return Index(_db.Students.Where(s => s.Email.Equals(email) && s.Password.Equals(password)).FirstOrDefault());
                }
                else
                {
                    //Failed login
                    ViewBag.error = "Login failed";
                    return RedirectToAction("LoginPage", "Home", new { error = "login" });
                }
            }
            return View();
        }


        //Logout
        public ActionResult Logout()
        {            
            HttpContext.Session.Clear();//remove session
            return RedirectToAction("LoginPage");
        }

        //create a string MD5
        public static string GetMD5(string str)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] fromData = Encoding.UTF8.GetBytes(str);
            byte[] targetData = md5.ComputeHash(fromData);
            string byte2String = null;

            for (int i = 0; i < targetData.Length; i++)
            {
                byte2String += targetData[i].ToString("x2");

            }
            return byte2String;
        }



        [HttpGet]
        public List<String> pullPrereqs(int[] idArray)
        {
            List<String> testList = new List<String>();
            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    var test = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).ToList();
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    if (course.Prerequisites != null) 
                        testList.Add(course.Prerequisites);
                    else
                        testList.Add("");
                }
            }
            else
            {
                return null;
            }
            return testList;
        }//pullPrereqs

        [HttpGet]
        public List<String> pullContext(int[] idArray)
        {
            List<String> testList = new List<String>();
            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    var test = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).ToList();
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    if (course.Context != null)
                        testList.Add(course.Context);
                }
            }
            else
            {
                return null;
            }
            return testList;
        }//pullContext

        public List<Double> pullValue(int[] idArray)
        {
            List<Double> testList = new List<Double>();
            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    var test = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).ToList();
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    if (course.Context != null)
                        testList.Add(course.CreditValue);
                }
            }
            else
            {
                return null;
            }
            return testList;
        }//pullValue


        [HttpGet]
        public List<double> pullCreditValue(int[] idArray)
        {
            List<double> creditValues = new List<double> { };

            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    creditValues.Add(course.CreditValue);
                }
            }
            else return null;
            return creditValues;
        }

        //The following 7 methods are all used for checking students course stats such as 1palpha courses or psyc courses etc

        [HttpGet]
        public double PullAlpha1Values(int[] idArray){
            
            double creditValues = 0;

            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    if(course.Code[0]=='1')
                    {
                        creditValues += course.CreditValue;
                    }
                }
            }
            else return 0;
            return creditValues;
        }

        [HttpGet]
        public double PullAlpha2Values(int[] idArray)
        {

            double creditValues = 0;

            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    if (course.Code[0] == '2')
                    {
                        creditValues += course.CreditValue;
                    }
                }
            }
            else return 0;
            return creditValues;
        }

        [HttpGet]
        public double PullAlpha3Values(int[] idArray)
        {

            double creditValues = 0;

            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    if (course.Code[0] == '3')
                    {
                        creditValues += course.CreditValue;
                    }
                }
            }
            else return 0;
            return creditValues;
        }

        [HttpGet]
        public double PullAlpha4Values(int[] idArray)
        {

            double creditValues = 0;

            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    if (course.Code[0] == '4')
                    {
                        creditValues += course.CreditValue;
                    }
                }
            }
            else return 0;
            return creditValues;
        }

        [HttpGet]
        public double PullSocSciValues(int[] idArray)
        {

            double creditValues = 0;

            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    if (course.Context == "SOCIAL SCIENCES")
                    {
                        creditValues += course.CreditValue;
                    }
                }
            }
            else return 0;
            return creditValues;
        }


        [HttpGet]
        public double PullHumanValues(int[] idArray)
        {

            double creditValues = 0;

            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    if (course.Context == "HUMANITIES")
                    {
                        creditValues += course.CreditValue;
                    }
                }
            }
            else return 0;
            return creditValues;
        }

        public double PullTotalCredValues(int[] idArray)
        {

            double creditValues = 0;

            if (idArray != null)
            {
                for (int i = 0; i < idArray.Length; i++)
                {
                    var temp = idArray[i];
                    Course course = _dbCourses.courseTable.Where(s => s.CID.Equals(temp)).FirstOrDefault();
                    creditValues += course.CreditValue;
         
                }
            }
            else return 0;
            return creditValues;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
