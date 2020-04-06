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
    [RoutePrefix("api/Events")]
    public class EventsController : ApiController
    {
        private TpiEvaluationEntities db = new TpiEvaluationEntities();

        [Route("")]
        [HttpGet]
        // GET: api/Events
        public IEnumerable<Event> GetEvent()
        {
            IEnumerable<Event> eventList = db.Event.ToList();
            foreach (var event1 in eventList)
            {
                event1.squadId = event1.Task.SquadId.Value;
                event1.year = event1.Task.Year2.Value.ToString("yyyy-MM-dd");
            }
            return eventList;
        }

        [Route("{id}")]
        [HttpGet]
        // GET: api/Events/5
        [ResponseType(typeof(Event))]
        public IHttpActionResult GetEvent(Guid id)
        {
            Event @event = db.Event.Find(id);
            if (@event == null)
            {
                return NotFound();
            }

            return Ok(@event);
        }

        [Route("{id}", Name = "EventModify")]
        [HttpPut]
        // PUT: api/Events/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEvent(Guid id, Event @event)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != @event.Id)
            {
                return BadRequest();
            }

            db.Entry(@event).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventExists(id))
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

        [Route("")]
        [HttpPost]
        // POST: api/Events
        [ResponseType(typeof(Event))]
        public IHttpActionResult PostEvent(Event @event)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            int eventExist = db.Event.Where(a => a.Id == @event.Id).Count();
            if(eventExist == 0)
            {
                DateTime dt1 = DateTime.Parse(@event.year);
                var task = db.Task.Where(a => a.Year == dt1.Year.ToString() && a.SquadId == @event.squadId).FirstOrDefault();
                Guid taskGuid1;
                if (task == null)
                {
                    taskGuid1 = Guid.NewGuid();
                    db.Task.Add(new Task
                    {
                        Id = taskGuid1,
                        Year = dt1.Year.ToString(),
                        Year2 = dt1,
                        SquadId = @event.squadId,
                    });
                }
                else
                {
                    taskGuid1 = task.Id;
                }
                @event.Id = Guid.NewGuid();
                @event.TaskId = taskGuid1;

                @event = db.Event.Add(@event);
            }
            else
            {
                db.Entry(@event).State = EntityState.Modified;
            }

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (EventExists(@event.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("EventModify", new { id = @event.Id }, @event);
        }

        [Route("{id}")]
        [HttpDelete]
        // DELETE: api/Events/5
        [ResponseType(typeof(Event))]
        public IHttpActionResult DeleteEvent(Guid id)
        {
            Event @event = db.Event.Find(id);
            if (@event == null)
            {
                return NotFound();
            }
            IEnumerable<EventImages> eiList = db.EventImages.Where(a => a.EventId == id).ToList();
           
            db.Event.Remove(@event);
            db.EventImages.RemoveRange(eiList);
            db.SaveChanges();

            return Ok(@event);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventExists(Guid id)
        {
            return db.Event.Count(e => e.Id == id) > 0;
        }
    }
}