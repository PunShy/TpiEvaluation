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
    public class SquadsController : ApiController
    {
        private TpiEvaluationEntities db = new TpiEvaluationEntities();

        // GET: api/Squads
        public IQueryable<Squad> GetSquad()
        {
            return db.Squad;
        }

        // GET: api/Squads/5
        [ResponseType(typeof(Squad))]
        public IHttpActionResult GetSquad(int id)
        {
            Squad squad = db.Squad.Find(id);
            if (squad == null)
            {
                return NotFound();
            }

            return Ok(squad);
        }

        //// PUT: api/Squads/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutSquad(int id, Squad squad)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != squad.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(squad).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!SquadExists(id))
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

        //// POST: api/Squads
        //[ResponseType(typeof(Squad))]
        //public IHttpActionResult PostSquad(Squad squad)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Squad.Add(squad);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = squad.Id }, squad);
        //}

        //// DELETE: api/Squads/5
        //[ResponseType(typeof(Squad))]
        //public IHttpActionResult DeleteSquad(int id)
        //{
        //    Squad squad = db.Squad.Find(id);
        //    if (squad == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Squad.Remove(squad);
        //    db.SaveChanges();

        //    return Ok(squad);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SquadExists(int id)
        {
            return db.Squad.Count(e => e.Id == id) > 0;
        }
    }
}