using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.DAL.DBO
{
    public class Author
    {
        [Range(0, int.MaxValue)]
        public int Id { get; set; }

        [Required]
        [MinLength(2)]
        public string FirstName { get; set; }

        [Required]
        [MinLength(2)]
        public string LastName { get; set; }

        [Required]
        [Range(12, int.MaxValue)]
        public int Age { get; set; }

        [Required]
        public string CountryOfBirth { get; set; }

        [Required]
        public string Bio { get; set; }

        public virtual ICollection<Book> Books { get; set; }

    }
}