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
    public class EventImagesController : ApiController
    {
        private TpiEvaluationEntities db = new TpiEvaluationEntities();

        // GET: api/EventImages
        public IQueryable<EventImages> GetEventImages()
        {
            return db.EventImages;
        }

        // GET: api/EventImages/5
        [ResponseType(typeof(EventImages))]
        public IHttpActionResult GetEventImages(int id)
        {
            EventImages eventImages = db.EventImages.Find(id);
            if (eventImages == null)
            {
                return NotFound();
            }

            return Ok(eventImages);
        }

        // PUT: api/EventImages/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEventImages(int id, EventImages eventImages)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eventImages.Id)
            {
                return BadRequest();
            }

            db.Entry(eventImages).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventImagesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/EventImages
        [ResponseType(typeof(EventImages))]
        public IHttpActionResult PostEventImages(EventImages eventImages)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EventImages.Add(eventImages);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = eventImages.Id }, eventImages);
        }

        // DELETE: api/EventImages/5
        [ResponseType(typeof(EventImages))]
        public IHttpActionResult DeleteEventImages(int id)
        {
            EventImages eventImages = db.EventImages.Find(id);
            if (eventImages == null)
            {
                return NotFound();
            }

            db.EventImages.Remove(eventImages);
            db.SaveChanges();

            return Ok(eventImages);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventImagesExists(int id)
        {
            return db.EventImages.Count(e => e.Id == id) > 0;
        }
    }
}