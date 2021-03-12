using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Book
    {
        [Range(0, int.MaxValue)]
        public int Id { get; set; }

        [Required]
        [MinLength(2)]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Range(1000, int.MaxValue)]
        public int PublishedYear { get; set; }

        [Range(0, int.MaxValue)]
        public int NumOfPages { get; set; }

        [Required]
        public int ISBN { get; set; }

        [Required]
        public string CoverImageLink { get; set; }


        public int AuthorId { get; set; }
        public virtual Author Author { get; set; }
    }
}
