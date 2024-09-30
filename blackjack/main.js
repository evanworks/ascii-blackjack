    if (localStorage.getItem("money") == "NaN" || localStorage.getItem("money") == undefined) {
      money = 100;
      gamesPlayed = 100;
      console.log("yes")
    } else {
      money = localStorage.getItem("money");
      gamesPlayed = localStorage.getItem("gamesPlayed")
      console.log("no");
    }
    let gameResult = false;
		let turn = 0;
    let bet = 100;
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
		|J \~~|   |
		|♣ /'o   |
		| ([ +)   |
		|  o,|  ♣|
		| |~~\   J|
		\`--------'`, 
		`
		.--------.
		|J \~~|   |
		|♠ /'o   |
		| ({./)   |
		|  o,|  ♠|
		| |~~\   J|
		\`--------'`, 
		`
		.--------.
		|J \~~|   |
		|♥ /'o   |
		| (/x )   |
		|  o,|  ♥|
		| |~~\   J|
		\`--------'`, 
		`
		.--------.
		|J \~~|   |
		|♦ /'o   |
		| (/|\)   |
		|  o,|  ♦|
		| |~~\   J|
		\`--------'`,
		`
		.--------.
		|Q \~~|   |
		|♣ /'o   |
		| ([ +)  |
		|  o,|  ♣|
		| |~~\   Q|
		\`--------'`, 
		`
		.--------.
		|Q \~~|   |
		|♠ /'o   |
		| ({./)  |
		|  o,|  ♠|
		| |~~\   Q|
		\`--------'`, 
		`
		.--------.
		|Q \~~|   |
		|♥ /'o   |
		| (/x )  |
		|  o,|  ♥|
		| |~~\   Q|
		\`--------'`, 
		`
		.--------.
		|Q \~~|   |
		|♦ /'o   |
		| (/|\)  |
		|  o,|  ♦|
		| |~~\   Q|
		\`--------'`,
		`
		.--------.
		|K \~~|   |
		|♣ /'o   |
		| ([ +)  |
		|  o,|  ♣|
		| |~~\   K|
		\`--------'`, 
		`
		.--------.
		|K \~~|   |
		|♠ /'o   |
		| ({./)  |
		|  o,|  ♠|
		| |~~\   K|
		\`--------'`, 
		`
		.--------.
		|K \~~|   |
		|♥ /'o   |
		| (/x )  |
		|  o,|  ♥|
		| |~~\   K|
		\`--------'`, 
		`
		.--------.
		|K \~~|   |
		|♦ /'o   |
		| (/|\)  |
		|  o,|  ♦|
		| |~~\   K|
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
		| ( \\/ ) |
		|  \\  /  |
		|   \\/   |
		|       A|
		\`--------'`,
		`
		.--------.          
		|A       |
		|   /\\   |
		|  /  \\  |
		|  \\  /  |
		|   \\/  A|
		\`--------'`
		];
		const hD = document.getElementById("h1");
		const hD2 = document.getElementById("h2");
		const cD = document.getElementById("c1");
		const cD2 = document.getElementById("c2");
		const cD3 = document.getElementById("c3");
		
	
		let cardsH = [];
		let cardsC = [];

    c2Cseq = Math.floor(Math.random() * (cardsN.length - 0) + 0); 
		var c2C = cardsN[c2Cseq];
		
    let allowTerminalMessages = true;


		function deal() {
      c1Hseq = Math.floor(Math.random() * cardsN.length);
		  c1H = cardsN[c1Hseq];
		  hD.innerHTML += cardsD[c1Hseq];
      if (hD.innerHTML.includes("♥") || hD.innerHTML.includes("♦")) {
        hD.style.color = "red";
      }
		  flag = cardsN[c1Hseq];
		  if (flag > -1) { 
		    cardsN.splice(flag, 1); 
		    cardsD.splice(flag, 1); 
		  }

      cH2seq = Math.floor(Math.random() * cardsN.length);
		  c2H = cardsN[cH2seq];
		  hD2.innerHTML += cardsD[cH2seq];
      if (hD2.innerHTML.includes("♥") || hD2.innerHTML.includes("♦")) {
        hD2.style.color = "red";
      }
		  flag = cardsN[cH2seq];
		  if (flag > -1) { 
		    cardsN.splice(flag, 1); 
		    cardsD.splice(flag, 1); 
		  }
		
		  cardsH.push(c1H, c2H);
		  if (c1H === "A" || c2H === "A") {
		    cardsH.splice(cardsC.indexOf("A"), 1);
		    cardsH.push(11); 
		  }

      c1Cseq = Math.floor(Math.random() * cardsN.length);
		  var c1C = cardsN[c1Cseq];
		  cD.innerHTML += cardsD[c1Cseq];
      if (cD.innerHTML.includes("♥") || cD.innerHTML.includes("♦")) {
        cD.style.color = "red";
      }
		  flag = cardsN[c1Cseq];
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
		  flag = cardsN[c2Cseq];
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
          document.getElementById("click").play();
          terminalEvent('Player has hit.')
		      var cxH = cardsN[Math.floor(Math.random() * (cardsN.length - 0) + 0)];
		      const newCardDisplayH = document.createElement("pre");
		      newCardDisplayH.innerHTML = cardsD[cardsN.indexOf(cxH)];
          ncdHt = newCardDisplayH.innerHTML;
          if (ncdHt.includes("♥") || ncdHt.includes("♦")) {
            newCardDisplayH.style.color = "red";
          }
          if (cardsH.length >= 3) {
            newCardDisplayH.style.position = "absolute";
            newCardDisplayH.style.left = (cardsH.length * 100) - 200 + "px";
          }
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
          if (cardsC.length >= 3) {
            newCardDisplayC.style.position = "absolute";
            newCardDisplayC.style.left = (cardsC.length * 100) - 200 + "px";
          }
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
          setTimeout(computerAI, 3000);
        }
		  }
		  setTimeout(check, 1000);
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
		  if (aH == 1) {
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
		
		  if (aC == 1) {
		    if (totalC > 10) {
		      totalC += 1;
		    } else {
		      totalC += 11;
		    }
		  } else if (aH > 1) {
		    totalH += aH;
		  }
      if (totalH > 21) {
        terminalEvent('Player has busted. Computer won with ' + totalC + ' points.')
		    end("C");
		  } else if (totalH === 21) {
		    terminalEvent('Player beat computer with 21 points.')
        end("H");
		  }
		  if (totalC > 21) {
        terminalEvent('Computer busted. Player won with ' + totalH + ' points.')
		    end("H");
		  } else if (totalC === 21) {
        terminalEvent('Computer beat player with 21 points.')
		    end("C");
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
        cD2.innerHTML = cardsD[c2Cseq];
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
          document.getElementById('yay').play();
          money = parseInt(money)
          money += bet;
        } else if (person == "C") {
          document.getElementById('fail').play();
          money -= bet;
        }
        gameResult = true;
        gamesPlayed = parseInt(gamesPlayed)
        console.log(gamesPlayed)
        gamesPlayed += 1;
        console.log(gamesPlayed)
        setTimeout(function() {
          document.getElementById("game").style.display = "none";
          //location.reload()
        }, 6000)
        z = 0
        setTimeout(fadeIn, 6000)
      }
		}
		
		function stand() {
		  if (turn === 0) {
        document.getElementById("click").play();
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
  document.getElementById("click").play();
  toggleButtons(1)
  z = 1;
  document.getElementById('game').style.display = 'block';
  fadeOut();
  terminalEvent('Welcome to ASCII Blackjack.')
  if (money == 100) {
    setTimeout(function() {terminalEvent('Place a bet to begin.')}, 1600)
  }
}
function fadeOut() {
  z -= 0.1;

  document.getElementById("title").style.opacity = z;
  if (z > 0) {
    setTimeout(fadeOut, 10);
  } else {
    document.getElementById("title").style.display = "none";
  }
}
function fadeIn() {
  z += 0.1;

  document.getElementById("title").style.opacity = z;
  if (z < 1) {
    setTimeout(fadeIn, 10);
  } else {
    document.getElementById("title").style.display = "block";
  }
}

function openShop() {
  z = 1;
  document.getElementById("click").play();
  fadeOut();
  setTimeout(function() {
    document.getElementById('shop').style.display = 'block';
    document.getElementById("version").style.display = "none";
  }, 200)
}

function toggleButtons(toggle) {
  if (toggle == 0) {
    document.getElementById("hitbtn").style.color = "darkgrey";
    document.getElementById("hitbtn").style.border = "1px solid darkgrey";
    document.getElementById("hitbtn").style.cursor = "auto";
    document.getElementById("hitbtn").disabled = true;
    document.getElementById("standbtn").style.color = "darkgrey";
    document.getElementById("standbtn").style.border = "1px solid darkgrey";
    document.getElementById("standbtn").style.cursor = "auto";
    document.getElementById("standbtn").disabled = true;
  } else {
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
  localStorage.setItem("money", money);
  localStorage.setItem("gamesPlayed", gamesPlayed);
  if (money <= 0) {
    setTimeout(function() {
      setInterval(function() {
        localStorage.clear();
      })
      money = 100;
      location.reload()
    }, 4000)
  } 
}, 1000)
function shuffleArray(array, otherarray) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      [otherarray[i], otherarray[j]] = [otherarray[j], otherarray[i]];
  }
}

function betGame() {
  document.getElementById("click").play();
  bet = prompt("What is your bet?")
  //document.getElementById("myModal").style.display = "block";
  bet = parseInt(bet);
  while (bet > money || bet < 1 || !bet) {
    if (bet > money) {
      bet = prompt("You don't have that much money. What is your bet?")
      bet = parseInt(bet);
    } else {
      bet = prompt("Error in value. What is your bet?")
      bet = parseInt(bet);
    }
  }
  
  document.getElementById("betbtn").style.color = "darkgrey";
  document.getElementById("betbtn").style.border = "1px solid darkgrey";
  document.getElementById("betbtn").style.cursor = "auto";
  document.getElementById("betbtn").disabled = true;
  terminalEvent('Your bet is: $' + bet)
  setTimeout(deal, 2000)
}
function reset() {
  money = 100;
  localStorage.clear()
  location.reload()
}
preview.innerHTML = "";
function prevItem(itemNum) {
  preview = document.getElementById("preview");
  preview.innerHTML = "";
  if (preview.innerHTML == "") {
    document.getElementById("click").play();
    if (itemNum == 0) {
      preview.innerHTML += "<pre class='bold' style='left: -100px;'>"+cardsD[Math.floor(Math.random() * cardsD.length)]+"</pre>";
      preview.innerHTML += "<pre class='bold'>"+cardsD[Math.floor(Math.random() * cardsD.length)]+"</pre>";
      preview.innerHTML += "<pre class='bold' style='left: 100px;'>"+cardsD[Math.floor(Math.random() * cardsD.length)]+"</pre>";
      preview.innerHTML += "<center><div class='heading' style='background: lightgrey;'><hr/>Default Deck<hr/></div></center>";
      preview.innerHTML += `<div class='description'>
      Classic ASCII design. Used as the main deck for 3 years.<br/><br/>
      <div style="font-weight: 900;">[♠13] [♣13] <span style="color: red;">[♥13] [♦13]</span></div><br/>
      <div><i>No special properties</i></div>
      </div>`
      preview.innerHTML += "<button class='equip-button'>Equip</button>"
    }
    if (itemNum == 1) {
      if (gamesPlayed > 0) {
        preview.innerHTML += "<pre class='bold' style='color: red; left: -100px;'>"+cardsD[Math.floor(Math.random() * cardsD.length)]+"</pre>";
        preview.innerHTML += "<pre class='bold' style='color: red;'>"+cardsD[Math.floor(Math.random() * cardsD.length)]+"</pre>";
        preview.innerHTML += "<pre class='bold' style='color: red; left: 100px;'>"+cardsD[Math.floor(Math.random() * cardsD.length)]+"</pre>";
        preview.innerHTML += "<center><div class='heading' style='background: lightgrey;'><hr/>Red Deck<hr/></div></center>";
        preview.innerHTML += `<div class='description'>Let the red cards dominate the deck, because no one likes clubs and spades.
        <br/><br/>
        <div style="font-weight: 900;">[♠0] [♣0] <span style='color: red;'>[♥26] [♦26]</span></div><br/>
        <div>Earn <span style="color: blue; font-weight: 900;">$100</span> when entire hand is hearts and <span style='color: red; font-weight: 900;'>x2</span> when entire hand is diamonds at the end of the game.</div>
        </div>`
        preview.innerHTML += "<button class='shop-button' onclick='document.getElementById(`kaching`).play();'>Buy ($150)</button>"
      } else {
        preview.innerHTML += `<div class='description' style="font-weight: 900;">Play one game to unlock this deck.
      </div>`
      }
    }
  }
}