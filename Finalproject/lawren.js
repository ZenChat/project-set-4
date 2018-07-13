//Navigation Bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

//Lawren's code
// dropdown
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//
// // number of drops created.
// var nbDrop = 858;
//
// // function to generate a random number range.
// function randRange( minNum, maxNum) {
//   return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
// }
//
// // function to generate drops
// function createRain() {
//
// 	for( i=1;i<nbDrop;i++) {
// 	var dropLeft = randRange(0,1600);
// 	var dropTop = randRange(-1000,1400);
//
// 	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
// 	$('#drop'+i).css('left',dropLeft);
// 	$('#drop'+i).css('top',dropTop);
// 	}
//
// }
// // Make it rain
// createRain();

// interval page
