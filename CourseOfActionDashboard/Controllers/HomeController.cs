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

namespace CourseOfActionDashboard.Controllers
{ 
    public class HomeController : Controller
    {
        private DB_Entities _db = new DB_Entities();

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index(Student student)
        {
            ViewData["Student"] = student;
            return View("Index",student);
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

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
