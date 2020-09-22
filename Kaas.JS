alert ("Door middel van aantal vragen kan ik weten aan wat voor kaas je denkt")
alert ("Beantwoord de alle vragen met een ja of nee")
var soortkaas = prompt("Is de kaas geel?");
	soortkaas = soortkaas.toLowerCase();

if (soortkaas == "ja") {
		var gaten = prompt("Zitten er gaten in?");
		
		if (gaten == "ja"){
		var durekaas = prompt("Is de kaas belachelijk duur");

			if (durekaas == "ja") { 
	    	document.write ('<p class="Wrong">' + "Je denkt waarschijnlijk aan Emmenthaler" + '</p>');
 			}
 			else {  
			document.write ('<p class="Good">' + "Je denkt waarschijnlijk aanLeerdammer" + '</p>');
			}
		} 
		else {
        var hardheid = prompt("Is de kaas hard als steen?");
		}
			if (hardheid == "nee") { 
		    document.write ('<p class="Wrong">' + "Je denkt waarschijnlijk aan Goudse kaas" + '</p>');
	 		}
}

else {
var schimmels = prompt("Heef de kaas blauwe schimmmels?");
	
	if (schimmels == "nee"){
	var korsttt = prompt("Heef de kaas een korst?")
	
		if (korsttt == "ja") {
		document.write ('<p class="Wrong">' + "Je denkt waarschijnlijk aan Camembert" + '</p>');
		}
		else {
		document.write ('<p class="Wrong">' + "Je denkt waarschijnlijk aan Mozzarealla" + '</p>');
		} 
    }

	else {
		var korsttt = prompt("Heef de kaas een korst?");

		if (korsttt == "ja") { 
	    document.write ('<p class="Wrong">' + "Je denkt waarschijnlijk aan Bleu de Rockbaron" + '</p>');
 		}
 			else {  
			document.write ('<p class="Good">' + "Je denkt waarschijnlijk aan Foume d'Ambert" + '</p>');
			}
        }   	
    }






