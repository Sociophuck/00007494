using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebApi.DAL.DBO;

namespace WebApi.DAL.Repositiories
{
    public class AuthorRepo : Base, IRepository<Author>
    {
        public AuthorRepo(WebDbContext context) : base(context) { }

        public async Task CreateAsync(Author entity)
        {
            _context.Authors.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var a = await _context.Authors.FindAsync(id);

            _context.Authors.Remove(a);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Author>> GetAllAsync()
        {
            return await _context.Authors.ToListAsync();
        }

        public async Task<Author> GetByIdAsync(int id)
        {
            return await _context.Authors.FindAsync(id);
        }

        public async Task UpdateAsync(Author entity)
        {
            _context.Update(entity);

            await _context.SaveChangesAsync();
        }
    }
}
