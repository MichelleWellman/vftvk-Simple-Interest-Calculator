// Compute function runs when "Compute Interest" button is clicked
function compute()
{
    var principal = document.getElementById("principal");
    // Verify that the user has entered a positive number in the "amount" text field. If not, show an alert
    if (principal.value<=0) {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Calculations for the interest earned, and the year it will be when the interest is earned
    var interest = principal.value*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);

    // Display the result on the calculator
    document.getElementById("result").innerHTML = "If you deposit <mark>"+principal.value+"</mark> \<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";

    return true;
}

// Update the interest rate value when the position of the slider is changed
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
