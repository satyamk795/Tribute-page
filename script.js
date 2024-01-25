function validateform()
    {      
        var name=document.myform.name.value;
        var num=document.myform.num.value;
        var x=document.myform.email.value;
        var atposition=x.indexOf("@");
        var dotposition=x.lastIndexOf(".");   
        if(isNaN(num))
        {
            alert("Enter numeric value only!");
        return false;
        }
        else if(name=="")
        {
            alert("Please enter the details first");
            return false;
        }
        else if (x=="")
        {
            alert("Please enter your email");
            return false;
        }
        else if(atposition<1 || dotposition<atposition+2 || dotposition+2>x.length)
        {
            alert("Please enter a valid email address including '@' and '.' \n atposition:"+atposition+"\n dotposition:"+dotposition+"\n"+x.length);
            return false;
        }
        else
        {
            alert("Thank you for subscribing!")
            return true;
        }
    }