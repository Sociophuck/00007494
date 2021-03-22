using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebApi.DAL.DBO;

namespace WebApi.DAL.Repositiories
{
    public class BookRepo : Base, IRepository<Book>
    {
        public BookRepo(WebDbContext context) : base(context) { }

        public async Task CreateAsync(Book entity)
        {
            _context.Books.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var b = await _context.Books.FindAsync(id);

            _context.Books.Remove(b);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Book>> GetAllAsync()
        {
            return await _context.Books.ToListAsync();
        }

        public async Task<Book> GetByIdAsync(int id)
        {
            return await _context.Books.FindAsync(id);
        }

        public async Task UpdateAsync(Book entity)
        {
            _context.Update(entity);

            await _context.SaveChangesAsync();
        }
    }
}
