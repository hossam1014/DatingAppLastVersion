using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using API.Errors;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Hosting;

namespace API.Middleware
{
  public class ExceptionMiddleware
  {
    private readonly RequestDelegate _Next;
    private readonly ILogger<ExceptionMiddleware> _logger;
    private readonly IWebHostEnvironment _Env;
    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger,
      IWebHostEnvironment env)
    {
      _Env = env;
      _logger = logger;
      _Next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
      try
      {
        await _Next(context);
      }
      catch (Exception ex)
      {
        _logger.LogError(ex, ex.Message);
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;

        var response = _Env.IsDevelopment()
          ? new ApiException(context.Response.StatusCode, ex.Message, ex.StackTrace?.ToString())
          : new ApiException(context.Response.StatusCode, "Internal Server Error");

        var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};

        var json = JsonSerializer.Serialize(response, options);

        await context.Response.WriteAsync(json);
      }
    }

  }
}