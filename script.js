


   
    //   // Get the input value
    //   var inputNumber = document.querySelector('.sum_inp').value;
    //   let persons=document.querySelector('.ppl_inp').value;

    //   if (isNaN(inputNumber) || inputNumber === 0) {
    //     alert("Please enter a valid number");
       
    //   }

    //   if (isNaN (persons)) {
    //     alert("Please enter a valid number for persons");
      
    //   }


    //   // let tipBtn = document.querySelector('.calculate').addEventListener('click',calcPerc();)


    //   function calcPerc() {
        
    //     if (document.getElementById('5').addEventListener('click',calcPerc))  { 

    //       let percent5  =  (5 / 100) * inputNumber / persons;

    //       document.querySelector('.res_number').innerHTML = percent5;

          
    //     }
    //     else if (document.getElementById('10').addEventListener('click',calcPerc)) {

    //       let percent10 = (10 / 100) * inputNumber / persons;

    //       document.querySelector('.res_number').innerHTML = percent10;


    //     }
    //     else if (document.getElementById('15').addEventListener('click',calcPerc)) {

    //       let percent15 = (15 / 100) * inputNumber / persons;

    //       document.querySelector('.res_number').innerHTML = percent15;

    //     }
    //     else if (document.getElementById('20').addEventListener('click',calcPerc)) {

    //       let percent20 = (20 / 100) * inputNumber / persons;

    //       document.querySelector('.res_number').innerHTML = percent20;


    //     }
    //     else if (document.getElementById('25').addEventListener('click',calcPerc)) {

    //       let percent25 = (25 / 100) * inputNumber / persons;

    //       document.querySelector('.res_number').innerHTML = percent25;


    //     }
    //     else if (document.getElementById('30').addEventListener('click',calcPerc))  {

    //       let percent30 = (30 / 100) * inputNumber / persons;

    //       document.querySelector('.res_number').innerHTML = percent30;


    //     }
        
    
    // }

    



 
    // // Add click event listeners to buttons
    // document.getElementById('5').addEventListener('click', function() {
    //   calcPerc(5);
    // });

    // document.getElementById('10').addEventListener('click', function() {
    //   calcPerc(10);
    // });

    // document.getElementById('15').addEventListener('click', function() {
    //   calcPerc(15);
    // });

    // document.getElementById('20').addEventListener('click', function() {
    //   calcPerc(20);
    // });

    // document.getElementById('25').addEventListener('click', function() {
    //   calcPerc(25);
    // });

    // document.getElementById('30').addEventListener('click', function() {
    //   calcPerc(30);
    // });

    // function calcPerc(selectedPercentage) {
    //   // Get the input values
    //   var inputNumber = parseFloat(document.querySelector('.sum_inp').value);
    //   var persons = parseFloat(document.querySelector('.ppl_inp').value);

    //   // Check if the input is NaN, 0, or if persons is 0
    //   if (isNaN(inputNumber) || inputNumber === 0 || isNaN(persons) || persons === 0) {
    //     alert("Please enter valid numbers");
    //     return; // exit the function if input is not valid
    //   }

      
    //   // Calculate percentage and divide the input number by persons
    //   var result = (selectedPercentage / 100) * inputNumber / persons;

    //   // Display result
    //   document.querySelector('.res_number').innerHTML = Math.floor(result);

    // }

    
   

    document.getElementById('5').addEventListener('click', function() {
      calcPerc(5);
    });

    document.getElementById('10').addEventListener('click', function() {
      calcPerc(10);
    });

    document.getElementById('15').addEventListener('click', function() {
      calcPerc(15);
    });

    document.getElementById('20').addEventListener('click', function() {
      calcPerc(20);
    });

    document.getElementById('25').addEventListener('click', function() {
      calcPerc(25);
    });

    document.getElementById('30').addEventListener('click', function() {
      calcPerc(30);
    });

    function calcPerc(selectedPercentage) {
      // Get the input values
      var inputNumber = parseFloat(document.querySelector('.sum_inp').value);
      var persons = parseFloat(document.querySelector('.ppl_inp').value);

      // Check if the input is NaN, 0, or if persons is 0
      if (isNaN(inputNumber) || inputNumber === 0 || isNaN(persons) || persons === 0) {
        alert("Please enter valid numbers");
        return; // exit the function if input is not valid
      }

      // Calculate percentage and divide the input number by persons
      var result = (selectedPercentage / 100) * inputNumber / persons;

      // Display result
      document.querySelector('.res_number').innerHTML = result.toFixed(2);
    }
 

    // function restartBtn() {
    //   document.getElementById('restart').onclick = function(){window.location.href= "tipcalc.html"};

    // }


