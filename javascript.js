function btn()
{
    // alert("Login successful");
    document.getElementById('frm1').submit();
}


function sltitm()
{
    
    // var obj= document.getElementById("stditm").obj.options[obj.selectedindex].text;
    // if(obj==RICE)
    // {
    //     document.getElementById('RICE').style.display='block';
    //     document.getElementById('DAL').style.display='none';

    // }
    // else if (obj==DAL)
    // {
    //     document.getElementById('DAL').style.display='none';
    //     document.getElementById('RICE').style.display='block';
    // }

    var obj1=document.getElementById("slt").obj.options[obj.selectedindex].text;
    document.getElementById("p1").innerHTML=obj1;  
}


function login(){
    const u=["jaydeep","varun","nikhil","nitesh","ashish","tejas"];
    const p=["jaydeep","varun","1234","nitesh","ashish","tejas"];
    
    var user=document.getElementById("username").value;
        var pass=document.getElementById("password").value;
    
    
        if(user.trim()==""){
            document.getElementById("p1").innerHTML="Username Cannot Be Blank!!!!!";
            // alert("Username Cannot Be Blank!!!!!");
        return false;
        }
        else if(pass.trim()==""){
            document.getElementById("p1").innerHTML="Password Cannot Be Blank!!!!!";
            // alert("Password Cannot Be Blank!!!!!");

        return false;
        }
    else{
        var i=0;
        while(1){
            if(user==u[i]){
                if(pass==p[i]){
                    return true;
                }
                else{
                    document.getElementById("p1").innerHTML="Password is Incorrect!!!!!";
                    // alert("Password is incorrect!!!!");
                    
                    return false;
                }
            }
            else{
                document.getElementById("p1").innerHTML="Username is Incorrect!!!!!";
                // alert("Username is incorrect!!!!")
                return false;
                }
            i++;
        }
    }
}

function list()
{
    if(document.getElementsById("vertical-menu").style.display='none')
    {
        document.getElementsById("vertical-menu").style.display="block";
    }
    else if(document.getElementsById("vertical-menu").style.display='block')
    {
        document.getElementsById("vertical-menu").style.display="none";
    }

}