
  

  function calculate() {
    let a = parseInt(document.getElementById('sub1').value);
    let b = parseInt(document.getElementById('sub2').value);
    let c = parseInt(document.getElementById('sub3').value);
    let d = parseInt(document.getElementById('sub4').value);

    if (a >= 40 && b >= 40 && c >= 40 && d >= 40) {
        document.getElementById("remarks").innerHTML = "Pass";
    }
    else {
        document.getElementById("remarks").innerHTML = "Fail";

  }

  let count = a + b + c + d;
  let percentage = (count / 500) * 100;

  document.getElementById("count").innerHTML = count;
  document.getElementById("per").innerHTML = percentage;


    
//   if (percentage >= 80) {
//     document.getElementById("grade").innerHTML = "A+";
//   }
//    else if (percentage >= 70) {
//     document.getElementById("grade").innerHTML = "A";
//   } 
//   else if (percentage >= 60) {
//     document.getElementById("grade").innerHTML = "A-";
//   }
//    else if (percentage >= 50) {
//     document.getElementById("grade").innerHTML = "B";
//   }
//    else if (percentage >= 40) {
//     document.getElementById("grade").innerHTML = "C";
//   }
//    else {
//     document.getElementById("grade").innerHTML = "F";
//   }
    if(a>=80 && b>=80 && c>=80 && d>=80){
        document.getElementById("grade").innerHTML = "A+";
    }

  else  if(a>=70 && b>=70 && c>=70 && d>=70){
        document.getElementById("grade").innerHTML = "A";
    }
         
    else  if(a>=60 && b>=60 && c>=60 && d>=60){
        document.getElementById("grade").innerHTML = "A-";
    }  

    else  if(a>=50 && b>=50 && c>=50 && d>=50){
        document.getElementById("grade").innerHTML = "B";
    }

    else  if(a>=40 && b>=40 && c>=40 && d>=40){
        document.getElementById("grade").innerHTML = "C";
    }

    else {
            document.getElementById("grade").innerHTML = "F";
          }

  }