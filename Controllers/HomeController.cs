using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CpcBaseProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return File("~/AngularOutput/index.html", "text/html");
        }
    }
}
