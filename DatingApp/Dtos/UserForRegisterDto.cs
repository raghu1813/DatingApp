using System.ComponentModel.DataAnnotations;

namespace DatingApp.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8,MinimumLength =4 ,ErrorMessage="The Password length should range from 4 to 8 characters")]
        public string Password { get; set; }
    }
}