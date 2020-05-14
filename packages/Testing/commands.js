mp.events.addCommand("car",(player,car) => {
  if(car != undefined && car != null && car != "") {
    var veh = mp.vehicles.new(mp.joaat(car),player.position);
    player.putIntoVehicle(veh,-1);
  } else {
    player.outputChatBox("Syntax: /car <model>");
  }
});

mp.events.addCommand("repair",(player) => {
  if(player.vehicle != undefined) {
    player.vehicle.repair();
  } else {
    player.outputChatBox("Fehler: Kein Fahrzeug gefunden!");
  }
});

mp.events.addCommand("tp",(player,target) => {
  mp.players.forEach((_player,_id) => {
    if(_player.name == target) {
      var found = true;
      player.position = _player.position;
    }
  });
  if(found) {
    player.outputChatBox(`Erfolgreich zu ${target} teleportiert!`);
  } else {
    player.outputChatBox("Fehler: Spieler nicht gefunden!");
  }
})

mp.events.addCommand("bring",(player,target) => {
  mp.players.forEach((_player,_id) => {
    if(_player.name == target) {
      var found = true;
      _player.position = player.position;
    }
  });
  if(found) {
    player.outputChatBox(`${target} erfolgreich teleportiert!`);
  } else {
    player.outputChatBox("Fehler: Spieler nicht gefunden!");
  }
})

mp.events.addCommand("pos",(player) => {
  player.outputChatBox("Position ist in der Konsole.");
  console.log(`Angeforderte Position:\nx: ${player.position.x}\ny: ${player.position.y}\nz: ${player.position.z} \n\n(${player.position.x},${player.position.y},${player.position.z})`)
});