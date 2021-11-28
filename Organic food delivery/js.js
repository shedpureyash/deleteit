function Addtocart()
{
    alert("Added to cart")
document.getElementById("quantity").value=""
}
function validate()
{
    var a=document.getElementById("name").value;
    if(a=="")
    {
        alert("Name can't be empty")
        
    }
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      alert("Not a valid e-mail address");
    }

    var y = document.getElementById("mob").value;
    var phoneno = /^\d{10}$/;
   
        if(isNaN(y)||y.indexOf(" ")!=-1)
        {
           alert("Enter numeric value")
            
        }
        if (y.length<10)
           {
                alert("enter 10 number");
            
           }
           var b=document.getElementById("sub").value;
    if(b=="")
    {
        alert("Subject can't be empty")
    }
        var c=document.getElementById("msg").value;
    if(c=="")
    {
        alert("Message can't be empty")
    
    }

}



let countDate = new Date('dec 5, 2021 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}
setInterval(function(){
    CountDown();
},1000)

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }