namespace API.Dtos;

public class TasksDto
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateOnly DeadLine { get; set; }
    // public bool IsDone { get; set; }
}