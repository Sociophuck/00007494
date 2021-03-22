using System;
using System.Collections.Generic;
using System.Text;

namespace WebApi.DAL.Repositiories
{
    public abstract class Base
    {
        protected readonly WebDbContext _context;

        protected Base(WebDbContext context)
        {
            _context = context;
        }
    }
}
