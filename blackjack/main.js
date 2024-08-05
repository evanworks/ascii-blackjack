    if (localStorage.getItem("money") == "NaN" || localStorage.getItem("money") == undefined) {
      money = 100;
      console.log("yes")
    } else {
      money = localStorage.getItem("money");
    }
    let gameResult = false;
		let turn = 0;
		let standH = 0;
		let standC = 0;
		let cardsN = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, "A", "A", "A", "A"];
		let cardsD = [
		`
		.--------.
		|2       |
		|   ♣    |
		|        |
		|   ♣    |
		|       2| 
		\`--------'`, 
		`
		.--------.
		|2       |
		|   ♠    |
		|        |
		|   ♠    |
		|       2| 
		\`--------'`, 
		`
		.--------.
		|2       |
		|   ♥    |
		|        |
		|   ♥    |
		|       2| 
		\`--------'`, 
		`
		.--------.
		|2       |
		|   ♦    |
		|        |
		|   ♦    |
		|       2| 
		\`--------'`,
		`
		.--------.
		|3       |
		|   ♣    |
		|   ♣    |
		|   ♣    |
		|       3| 
		\`--------'`, 
		`
		.--------.
		|3       |
		|   ♠    |
		|   ♠    |
		|   ♠    |
		|       3| 
		\`--------'`, 
		`
		.--------.
		|3       |
		|   ♥    |
		|   ♥    |
		|   ♥    |
		|       3| 
		\`--------'`, 
		`
		.--------.
		|3       |
		|   ♦    |
		|   ♦    |
		|   ♦    |
		|       3| 
		\`--------'`,
		`
		.--------.
		|4       |
		|  ♣  ♣  |
		|        |
		|  ♣  ♣  |
		|       4| 
		\`--------'`, 
		`
		.--------.
		|4       |
		|  ♠  ♠  |
		|        |
		|  ♠  ♠  |
		|       4| 
		\`--------'`, 
		`
		.--------.
		|4       |
		|  ♥  ♥  |
		|        |
		|  ♥  ♥  |
		|       4| 
		\`--------'`, 
		`
		.--------.
		|4       |
		|  ♦  ♦  |
		|        |
		|  ♦  ♦  |
		|       4| 
		\`--------'`,
		`
		.--------.
		|5       |
		|  ♣  ♣  |
		|    ♣   |
		|  ♣  ♣  |
		|       5| 
		\`--------'`, 
		`
		.--------.
		|5       |
		|  ♠  ♠  |
		|    ♠   |
		|  ♠  ♠  |
		|       5| 
		\`--------'`, 
		`
		.--------.
		|5       |
		|  ♥  ♥  |
		|    ♥   |
		|  ♥  ♥  |
		|       5| 
		\`--------'`, 
		`
		.--------.
		|5       |
		|  ♦  ♦  |
		|    ♦   |
		|  ♦  ♦  |
		|       5| 
		\`--------'`,
		`
		.--------.
		|6       |
		|  ♣  ♣  |
		|  ♣  ♣  |
		|  ♣  ♣  |
		|       6| 
		\`--------'`, 
		`
		.--------.
		|6       |
		|  ♠  ♠  |
		|  ♠  ♠  |
		|  ♠  ♠  |
		|       6| 
		\`--------'`, 
		`
		.--------.
		|6       |
		|  ♥  ♥  |
		|  ♥  ♥  |
		|  ♥  ♥  |
		|       6| 
		\`--------'`, 
		`
		.--------.
		|6       |
		|  ♦  ♦  |
		|  ♦  ♦  |
		|  ♦  ♦  |
		|       6| 
		\`--------'`,
		`
		.--------.
		|7       |
		|  ♣   ♣ |
		|  ♣ ♣ ♣ |
		|  ♣   ♣ |
		|       7| 
		\`--------'`, 
		`
		.--------.
		|7       |
		|  ♠   ♠ |
		|  ♠ ♠ ♠ |
		|  ♠   ♠ |
		|       7| 
		\`--------'`, 
		`
		.--------.
		|7       |
		|  ♥   ♥ |
		|  ♥ ♥ ♥ |
		|  ♥   ♥ |
		|       7| 
		\`--------'`, 
		`
		.--------.
		|7       |
		|  ♦   ♦ |
		|  ♦ ♦ ♦ |
		|  ♦   ♦ |
		|       7| 
		\`--------'`,
		`
		.--------.
		|8       |
		|  ♣ ♣ ♣ |
		|  ♣   ♣ |
		|  ♣ ♣ ♣ |
		|       8| 
		\`--------'`, 
		`
		.--------.
		|8       |
		|  ♠ ♠ ♠ |
		|  ♠   ♠ |
		|  ♠ ♠ ♠ |
		|       8| 
		\`--------'`, 
		`
		.--------.
		|8       |
		|  ♥ ♥ ♥ |
		|  ♥   ♥ |
		|  ♥ ♥ ♥ |
		|       8| 
		\`--------'`, 
		`
		.--------.
		|8       |
		|  ♦ ♦ ♦ |
		|  ♦   ♦ |
		|  ♦ ♦ ♦ |
		|       8| 
		\`--------'`,
		`
		.--------.
		|9       |
		|  ♣ ♣ ♣ |
		|  ♣ ♣ ♣ |
		|  ♣ ♣ ♣ |
		|       9| 
		\`--------'`, 
		`
		.--------.
		|9       |
		|  ♠ ♠ ♠ |
		|  ♠ ♠ ♠ |
		|  ♠ ♠ ♠ |
		|       9| 
		\`--------'`, 
		`
		.--------.
		|9       |
		|  ♥ ♥ ♥ |
		|  ♥ ♥ ♥ |
		|  ♥ ♥ ♥ |
		|       9| 
		\`--------'`, `
		.--------.
		|9       |
		|  ♦ ♦ ♦ |
		|  ♦ ♦ ♦ |
		|  ♦ ♦ ♦ |
		|       9| 
		\`--------'`,
		`
		.--------.
		|10      |
		| ♣ ♣ ♣ ♣|
		|   ♣ ♣  |
		| ♣ ♣ ♣ ♣|
		|      10| 
		\`--------'`, 
		`
		.--------.
		|10      |
		| ♠ ♠ ♠ ♠|
		|   ♠ ♠  |
		| ♠ ♠ ♠ ♠|
		|      10| 
		\`--------'`, 
		`
		.--------.
		|10      |
		| ♥ ♥ ♥ ♥|
		|   ♥ ♥  |
		| ♥ ♥ ♥ ♥|
		|      10| 
		\`--------'`, 
		`
		.--------.
		|10      |
		| ♦ ♦ ♦ ♦|
		|   ♦ ♦  |
		| ♦ ♦ ♦ ♦|
		|      10| 
		\`--------'`,
		`
		.--------.
		|J \~~|  |
		|♣ /'o   |
		| ([ +)  |
		|  o,|  ♣|
		| |~~\  J|
		\`--------'`, 
		`
		.--------.
		|J \~~|  |
		|♠ /'o   |
		| ({./)  |
		|  o,|  ♠|
		| |~~\  J|
		\`--------'`, 
		`
		.--------.
		|J \~~|  |
		|♥ /'o   |
		| (/x )  |
		|  o,|  ♥|
		| |~~\  J|
		\`--------'`, 
		`
		.--------.
		|J \~~|  |
		|♦ /'o   |
		| (/|\)  |
		|  o,|  ♦|
		| |~~\  J|
		\`--------'`,
		`
		.--------.
		|Q \~~|  |
		|♣ /'o   |
		| ([ +)  |
		|  o,|  ♣|
		| |~~\  Q|
		\`--------'`, 
		`
		.--------.
		|Q \~~|  |
		|♠ /'o   |
		| ({./)  |
		|  o,|  ♠|
		| |~~\  Q|
		\`--------'`, 
		`
		.--------.
		|Q \~~|  |
		|♥ /'o   |
		| (/x )  |
		|  o,|  ♥|
		| |~~\  Q|
		\`--------'`, 
		`
		.--------.
		|Q \~~|  |
		|♦ /'o   |
		| (/|\)  |
		|  o,|  ♦|
		| |~~\  Q|
		\`--------'`,
		`
		.--------.
		|K \~~|  |
		|♣ /'o   |
		| ([ +)  |
		|  o,|  ♣|
		| |~~\  K|
		\`--------'`, 
		`
		.--------.
		|K \~~|  |
		|♠ /'o   |
		| ({./)  |
		|  o,|  ♠|
		| |~~\  K|
		\`--------'`, 
		`
		.--------.
		|K \~~|  |
		|♥ /'o   |
		| (/x )  |
		|  o,|  ♥|
		| |~~\  K|
		\`--------'`, 
		`
		.--------.
		|K \~~|  |
		|♦ /'o   |
		| (/|\)  |
		|  o,|  ♦|
		| |~~\  K|
		\`--------'`,
		`
		.--------.
		|A   _   |
		|   ( )  |
		|  (_x_) |
		|    Y   |
		|       A|
		\`--------'`, 
		`
		.--------.
		|A       |
		|   .    |
		|  / \\   |
		| (_,_)  |
		|   I   A|
		\`--------'`, 
		`
		.--------.
		|A _  _  |
		| ( \/ ) |
		|  \  /  |
		|   \/   |
		|       A|
		\`--------'`,
		`
		.--------.          
		|A       |
		|   /\   |
		|  /  \  |
		|  \  /  |
		|   \/  A|
		\`--------'`
		];
		const hD = document.getElementById("h1");
		const hD2 = document.getElementById("h2");
		const cD = document.getElementById("c1");
		const cD2 = document.getElementById("c2");
		const cD3 = document.getElementById("c3");
		
	
		let cardsH = [];
		let cardsC = [];
		
		var c2C = cardsN[Math.floor(Math.random() * (cardsN.length - 0) + 0)];
		
    let allowTerminalMessages = true;


		function deal() {
		  var c1H = cardsN[Math.floor(Math.random() * (cardsN.length - 0) + 0)];
		  hD.innerHTML += cardsD[cardsN.indexOf(c1H)];
		  var flag = cardsN.indexOf(c1H);
		  if (flag > -1) { 
		    cardsN.splice(flag, 1); 
		    cardsD.splice(flag, 1); 
		  }
		
		  var c2H = cardsN[Math.floor(Math.random() * (cardsN.length - 0) + 0)];
		  hD2.innerHTML += cardsD[cardsN.indexOf(c2H)];
		  flag = cardsN.indexOf(c2H);
		  if (flag > -1) { 
		    cardsN.splice(flag, 1); 
		    cardsD.splice(flag, 1); 
		  }
		
		  cardsH.push(c1H, c2H);
		  if (c1H === "A" || c2H === "A") {
		    cardsH.splice(cardsC.indexOf("A"), 1);
		    cardsH.push(11); 
		  }
		
		  var c1C = cardsN[Math.floor(Math.random() * (cardsN.length - 0) + 0)];
		  cD.innerHTML += cardsD[cardsN.indexOf(c1C)];
		  flag = cardsN.indexOf(c1C);
		  if (flag > -1) { 
		    cardsN.splice(flag, 1); 
		    cardsD.splice(flag, 1); 
		  }
		
		  // var c2c blah blah...
		  cD2.innerHTML += `
		.--------.
		|XXXXXXXX|
		|XXXXXXXX|
		|XXXXXXXX|
		|XXXXXXXX|
		|XXXXXXXX| 
		\`--------'`;
		  flag = cardsN.indexOf(c2C);
		  if (flag > -1) { 
		    cardsN.splice(flag, 1); 
		    cardsD.splice(flag, 1); 
		  }
		
		  cardsC.push(c1C, c2C);
		  if (c1C === "A" || c2C === "A") {
		    cardsC.splice(cardsH.indexOf("A"), 1);
		    cardsC.push(11);
		  }
		}
		
		function hit() {
		  if (turn === 0) {
		  	if (standH === 0 || standC === 1) {
          terminalEvent('Player has hit.')
		      var cxH = cardsN[Math.floor(Math.random() * (cardsN.length - 0) + 0)];
		      const newCardDisplayH = document.createElement("pre");
		      newCardDisplayH.innerHTML = cardsD[cardsN.indexOf(cxH)];
		      document.getElementById("newCards").appendChild(newCardDisplayH);
		      var flag = cardsN.indexOf(cxH);
		      if (flag > -1) { 
		        cardsN.splice(flag, 1); 
		        cardsD.splice(flag, 1); 
		      }
		      cardsH.push(cxH);
		    }
		    turn = 1;
        toggleButtons(0)
		    setTimeout(computerAI, 4000);
		  } else if (turn === 1) {
		    if (standC === 0 || standH === 1) {
          terminalEvent('Computer has hit.')
		      var cxC = cardsN[Math.floor(Math.random() * (cardsN.length - 0) + 0)];
		      const newCardDisplayC = document.createElement("pre");
		      newCardDisplayC.innerHTML = cardsD[cardsN.indexOf(cxC)];
		      document.getElementById("hiddenCards").appendChild(newCardDisplayC);
		      cD3.innerHTML += `
		.--------.
		|XXXXXXXX|
		|XXXXXXXX|
		|XXXXXXXX|
		|XXXXXXXX|
		|XXXXXXXX| 
		\`--------'
		      `;
		      flag = cardsN.indexOf(cxC);
		      if (flag > -1) { 
		        cardsN.splice(flag, 1); 
		        cardsD.splice(flag, 1); 
		      }
		      cardsC.push(cxC);
		    }
        if (standH == 0) {
          turn = 0;
          toggleButtons(1)
        } else {
          toggleButtons(0)
          setTimeout(computerAI, 2000);
        }
		  }
		  setTimeout(check, 2000);
		}
		
		
		function computerAI() {
		  if (turn === 1) {
		    let total = 0;
		    let i = 0;
		    while (i < cardsC.length) {
		      total += cardsC[i];
		      i++;
		    }
		    var influence = Math.floor(Math.random() * 4);
		    if (total > (13 + influence) ) {
		      stand();
		    } else {
		      hit();
		    }
		  }
      toggleButtons(1)
		}
		
		
		
		function check() {
		  var aH = 0;
		  var aC = 0;
		  var totalH = 0;
		  let i = 0;
		  while (i < cardsH.length) {
		    if (cardsH[i] === "A") {
		      aH += 1; 
		      i++;
		    } else {
		      totalH += cardsH[i];
		      i++;
		    }
		  }
		  if (aH === 1) {
		    if (totalH > 10) {
		      totalH += 1;
		    } else {
		      totalH += 11;
		    }
		  } else if (aH > 1) {
		    totalH += aH;
		  }
		
		  var totalC = 0;
		  let x = 0;
		  while (x < cardsC.length) {
		    if (cardsC[x] === "A") {
		      aH += 1;
		      x++;
		    } else {
		      totalC += cardsC[x];
		      x++;
		    }
		  }
		
		  if (aC === 1) {
		    if (totalC > 10) {
		      totalC += 1;
		    } else {
		      totalC += 11;
		    }
		  } else if (aH > 1) {
		    totalH += aH;
		  }
		  if (totalC > 21) {
        terminalEvent('Computer busted. Player won with ' + totalH + ' points.')
		    end("H");
		  } else if (totalC === 21) {
        terminalEvent('Computer beat player with 21 points.')
		    end("C");
		  }
      if (totalH > 21) {
        terminalEvent('Player has busted. Computer won with ' + totalC + ' points.')
		    end("C");
		  } else if (totalH === 21) {
		    terminalEvent('Player beat computer with 21 points.')
        end("H");
		  }
		  if (standH === 1 && standC === 1) {
		    if (totalH > totalC) {
          terminalEvent('Player has beat computer with ' + totalH + ' points.')
		      end("H")
		    } else if (totalC > totalH) {
          terminalEvent('Computer has beat player with ' + totalC + ' points.')
		      end("C")
		    } else {
          terminalEvent('Player and computer have tied.')
		      end("T")
		    }
		  }
		}
		
		function end(person) {
      if (gameResult == false) {
        allowTerminalMessages = false;
        cD2.innerHTML = cardsD[cardsN.indexOf(c2C)];
        cD3.style.display = "none";
        document.getElementById("hiddenCards").style.display = "block";
        document.getElementById("hitbtn").style.color = "darkgrey";
        document.getElementById("hitbtn").style.border = "1px solid darkgrey";
        document.getElementById("hitbtn").style.cursor = "auto";
        document.getElementById("hitbtn").disabled = true;
        document.getElementById("standbtn").style.color = "darkgrey";
        document.getElementById("standbtn").style.border = "1px solid darkgrey";
        document.getElementById("standbtn").style.cursor = "auto";
        document.getElementById("standbtn").disabled = true;
        if (person == "H") {
          money += 100;
        } else if (person == "C") {
          money -= 100;
        }
        gameResult = true;
        setTimeout(function() {
          document.getElementById("game").style.display = "none";
        }, 6000)
        setTimeout(fadeIn, 6000)
      }
		}
		
		function stand() {
		  if (turn === 0) {
        terminalEvent('Player has chosen to stand.')
		    standH = 1;
		    console.log("H is standing");
		    turn = 1;
		    setTimeout(computerAI, 4000);
        toggleButtons(0)
		  } else {
        if (!standC == 1) {
          terminalEvent('Computer has chosen to stand.')
        }
		    standC = 1;
		    console.log("C is standing");
		    turn = 0;
        toggleButtons(1)
		  }
		  if (standH === 1 && standC === 1) {
        setTimeout(check, 2000);
		  }
		}

function terminalEvent(msg) {
  if (allowTerminalMessages) {
    let terminal = document.getElementById("terminal");
    console.log(terminal)
    let msgtxt = document.createElement("span");
    terminal.appendChild(msgtxt)
    typed = new Typed(msgtxt, {
      strings: [msg + "<div style='height: 5px;'>"],
      typeSpeed: 40,
      showCursor: false,
    });
  }
}
z = 1
function startGame() {
  toggleButtons(1)
  z = 1;
  document.getElementById('game').style.display = 'block';
  fadeOut();
  terminalEvent('Welcome to ASCII Blackjack.')
  setTimeout(deal, 2000)
}
function fadeOut() {
  z -= 0.1;

  document.getElementById("title").style.opacity = z;
  if (z > 0) {
    setTimeout(fadeOut, 10);
  }
}
function fadeIn() {
  z += 0.1;

  document.getElementById("title").style.opacity = z;
  if (z < 1) {
    setTimeout(fadeIn, 10);
  }
}

function openShop() {
  z = 1;
  document.getElementById('shop').style.display = 'block';
  fadeOut();
  localStorage.clear()
}

function toggleButtons(toggle) {
  if (toggle == 0) {
    document.getElementById("hiddenCards").style.display = "block";
    document.getElementById("hitbtn").style.color = "darkgrey";
    document.getElementById("hitbtn").style.border = "1px solid darkgrey";
    document.getElementById("hitbtn").style.cursor = "auto";
    document.getElementById("hitbtn").disabled = true;
    document.getElementById("standbtn").style.color = "darkgrey";
    document.getElementById("standbtn").style.border = "1px solid darkgrey";
    document.getElementById("standbtn").style.cursor = "auto";
    document.getElementById("standbtn").disabled = true;
  } else {
    document.getElementById("hiddenCards").style.display = "block";
    document.getElementById("hitbtn").style.color = "black";
    document.getElementById("hitbtn").style.border = "1.5px solid black";
    document.getElementById("hitbtn").style.cursor = "pointer";
    document.getElementById("hitbtn").disabled = false;
    document.getElementById("standbtn").style.color = "black";
    document.getElementById("standbtn").style.border = "1.5px solid black";
    document.getElementById("standbtn").style.cursor = "pointer";
    document.getElementById("standbtn").disabled = false;
  }
}

setInterval(function() {
  document.getElementById("money").innerHTML = "$" + money;
  localStorage.setItem("money", money)
}, 1000)