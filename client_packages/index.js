mp.events.add("render",() => {
  mp.game.audio.setRadioToStationName("OFF");
  mp.game.audio.setUserRadioControlEnabled(false);
})