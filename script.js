let ans = 0, earning = 0, homeAmount = 0, educationAmount = 0, healthAmount = 0, travelAmount = 0, personalAmount = 0;

answer = document.getElementById("anspara");


function showhide(d) {
    d.style.display = (d.style.display !== "none") ? "none" : "block";
   
}




function calculate() {
    showhide(answer);
    
    var x = (document.getElementById("earning").value);
    earning += parseInt(x);

    var x = document.getElementsByClassName("housebill");
    var i;
    for (i = 0; i < x.length; i++) {
        homeAmount += parseInt(x[i].value);
        ans += parseInt(x[i].value);
    }

    var x = document.getElementsByClassName("edubill");
    var i;
    for (i = 0; i < x.length; i++) {
        educationAmount += parseInt(x[i].value);
        ans += parseInt(x[i].value);
    }


    var x = document.getElementsByClassName("healthbill");
    var i;
    for (i = 0; i < x.length; i++) {
        healthAmount += parseInt(x[i].value);
        ans += parseInt(x[i].value);
    }


    var x = document.getElementsByClassName("travelbill");
    var i;
    for (i = 0; i < x.length; i++) {
        travelAmount += parseInt(x[i].value);
        ans += parseInt(x[i].value);
    }


    var x = document.getElementsByClassName("personalbill");
    var i;
    for (i = 0; i < x.length; i++) {
        personalAmount += parseInt(x[i].value);
        ans += parseInt(x[i].value);
    }
    document.getElementById("anspara").innerHTML = ` Household Expenses 👉 ${homeAmount}<br>
     Education Expenses 👉 ${educationAmount}<br>
     Health Expenses 👉 ${healthAmount}<br>
     Travel Expenses 👉 ${travelAmount}<br>
     Personal Expenses 👉 ${personalAmount}<br>
     Earnings 👉 ${earning} <br>
    Savings 👉 ${earning - ans} <br> `;

}


window.onclick = function () {
    

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "💸 Your Expenses 💸",
            fontColor: 'rgb(16, 230, 51)',
            fontFamily: 'sans-serif',
            fontSize: 40,
            fontWeight: 'bold'
        },
        data: [{
            type: "pie",
            startAngle: 0,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: homeAmount, label: "homeAmount" },
                { y: educationAmount, label: "educationAmount" },
                { y: healthAmount, label: "healthAmount" },
                { y: travelAmount, label: "travelAmount" },
                { y: personalAmount, label: "personalAmount" },
            ]
        }]
    });
    chart.render();

}
