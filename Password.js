const password_length = 10;
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const char_range = document.getElementById("character_range");
const char_range_num = document.getElementById("Displayvalue");
function update_value()
{
          char_range_num.textContent = char_range.value ;
}




function Generate_Password()
{
          let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          let lowercase = "abcdefghijklmnopqrstuvwxyz";
          let numbers = "0123456789"
          let symbols = "~!@#$%&*-/)(.+`";
          let password = [];
          let allowedchars = "";


          allowedchars += upper.checked ? uppercase : "";
          allowedchars += lower.checked ? lowercase : "";
          allowedchars += number.checked ? numbers : "";
          allowedchars += symbol.checked ? symbols : "";

          for(let i = 0 ; i < char_range.value ; i++)
          {
                    let rand = Math.trunc(Math.random() * (allowedchars.length));
                    password.push(allowedchars[rand]);
          }
          
          password = password.join("");
          password = String(password);
          document.getElementById("password_container").textContent = password;
}



