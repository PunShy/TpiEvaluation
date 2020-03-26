using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CpcBaseProject.Models;

namespace CpcBaseProject.Controllers
{
    public class TownsController : ApiController
    {
        private TpiEvaluationEntities db = new TpiEvaluationEntities();

        // GET: api/Towns
        public IQueryable<Town> GetTown()
        {
            return db.Town;
        }

        // GET: api/Towns/5
        [ResponseType(typeof(Town))]
        public IHttpActionResult GetTown(string id)
        {
            Town town = db.Town.Find(id);
            if (town == null)
            {
                return NotFound();
            }

            return Ok(town);
        }

        //// PUT: api/Towns/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutTown(string id, Town town)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != town.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(town).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!TownExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/Towns
        //[ResponseType(typeof(Town))]
        //public IHttpActionResult PostTown(Town town)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Town.Add(town);

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (TownExists(town.Id))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtRoute("DefaultApi", new { id = town.Id }, town);
        //}

        //// DELETE: api/Towns/5
        //[ResponseType(typeof(Town))]
        //public IHttpActionResult DeleteTown(string id)
        //{
        //    Town town = db.Town.Find(id);
        //    if (town == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Town.Remove(town);
        //    db.SaveChanges();

        //    return Ok(town);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TownExists(string id)
        {
            return db.Town.Count(e => e.Id == id) > 0;
        }
    }
}