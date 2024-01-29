using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;

namespace API.Data
{
  public class PhotoRepository : IPhotoRepository
  {
    public Task<Photo> GetPhotoById(int id)
    {
      throw new NotImplementedException();
    }

    public Task<IEnumerable<PhotoForApprovalDto>> GetUnapprovedPhotos()
    {
      throw new NotImplementedException();
    }

    public void RemovePhoto(Photo photo)
    {
      throw new NotImplementedException();
    }
  }
}