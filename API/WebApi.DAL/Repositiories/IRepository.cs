using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace WebApi.DAL.Repositiories
{
        public interface IRepository<T> where T : class
        {
            Task<T> GetByIdAsync(int id);
            Task<List<T>> GetAllAsync();
            Task CreateAsync(T entity);
            Task UpdateAsync(T entity);
            Task DeleteAsync(int id);
            
        }
}
