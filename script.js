

let email = document.getElementById("email");
let btn = document.getElementById("btn");
let errorMsg = document.getElementById("errorMsg");
let hardcodeEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
function OTP(){
const myotpInput = document.createElement("input");
myotpInput.setAttribute("type", "text");
myotpInput.setAttribute("id", "OTP");
myotpInput.setAttribute("placeholder", "Enter OTP");
document.querySelector(".form").appendChild(myotpInput);
}

function sendEmail(email, otp){
    emailjs.send("service_29zxokb","template_9p79vtn",{
        email: email,
        passcode: otp
    })
    .then(function(response){
        console.log("SUCCESS", response.status, response.text);
        alert("OTP sent to your email");
    }, function(error){
        console.log("FAILED", error);
        alert("Failed to send OTP. Please try again.");
    });
}

let otp = Math.floor(100000 + Math.random() * 900000);


btn.addEventListener("click",()=>{
    console.log("Button clicked");
    if(email.value === ""){
        errorMsg.innerText = "Please enter your email";
        errorMsg.setAttribute("style", "color: red; margin-top:10px;");
    }
    else if(!hardcodeEmail.test(email.value)){
        errorMsg.innerText = "Please enter a valid email";
        errorMsg.setAttribute("style", "color: red; margin-top:10px;");
        
    }
    else{
        errorMsg.innerText = "Email is valid";
        btn.remove();
        errorMsg.setAttribute("style", "color: green; margin-top:10px;");
        verifyOTP();
    }
    emails = email.value;
    sendEmail(emails, otp);
  
});

function verifyOTP(){
    OTP();
    const verifyBtn = document.createElement("button");
    verifyBtn.setAttribute("id", "verifyBtn");
    verifyBtn.setAttribute("type", "button");
    verifyBtn.innerText = "Verify OTP";
    document.querySelector(".form").appendChild(verifyBtn);
        verifyBtn.addEventListener("click", ()=>{
            let userOTP = document.getElementById("OTP").value;
            if(userOTP == otp){
                alert("OTP verified successfully");
                window.location.href = "home.html";
            }
            else{
                alert("Invalid OTP. Please try again.");
                document.getElementById("OTP").value = "";
                
            }
        });
    }
