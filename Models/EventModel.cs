using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CpcBaseProject.Models
{
    [MetadataType(typeof(EventMetadata))]
    public partial class Event
    {
        public string year { set; get; }
        public string year2 { set; get; }
        public int squadId { set; get; }

        public void AddEvent(DbContext db)
        {
            
        }

        private class EventMetadata
        {
            [JsonIgnore]
            public virtual Task Task { get; set; }
        }
    }
}