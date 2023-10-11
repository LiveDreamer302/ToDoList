namespace API.Errors;

public class ApiResponse
{
    public ApiResponse(int statusCode, string message = null)
    {
        StatusCode = statusCode;
        Message = message ?? GetDefaultMessageForStatusCode(statusCode);
    }



    public int StatusCode { get; set; }
    public string Message { get; set; }
    
    private string GetDefaultMessageForStatusCode(int statusCode)
    {
        return statusCode switch
        {
            400 => "Bro, Sorry but u did a bad request here",
            401 => "Nah bro, u need to be signed in to do this one",
            404 => "What u looking for? We dont have it",
            500 => "Man sorry. Our mistake",
            444 => "Wrong email here",
            _ => null
        };
    }
}