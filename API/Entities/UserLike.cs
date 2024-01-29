using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class UserLike
    {
        // that make like 
        public AppUser SourceUser { get; set; }
        public int SourceUserId { get; set; }

        // that liked by other
        public AppUser LikedUser { get; set; }
        public int LikedUserId { get; set; }
    }
}