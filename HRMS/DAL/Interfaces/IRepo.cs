using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IRepo<CLASS, String, RESULT>
    {
        List<CLASS> Get();
        CLASS Get(String id);
        RESULT Add(CLASS obj);
        RESULT Update(CLASS obj);
        bool Delete(String id);
    }
}
