var CountDown = (function() {

  var countDown = document.getElementById("countdown");
  var countDown2 = document.getElementById("countdown2");

  function separate(num){
    return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }

  function countdown() {

    var today = new Date();
    var tokyo = new Date("July 24,2020 20:00:00");
    var diff_d, diff_h, diff_m, diff_s;

    if(today.getTime() < tokyo.getTime()) {
      difference = tokyo.getTime() - today.getTime();
      diff_d = Math.floor(difference / (1000 * 60 * 60 * 24));
      diff_h = Math.floor(difference % (1000 * 60 * 60 * 24) / (60 * 60 * 1000));
      diff_m = Math.floor(difference % (1000 * 60 * 60 * 24) / (60 * 1000)) % 60;
      diff_s = Math.floor(difference % (1000 * 60 * 60 * 24) / 1000) % 60 % 60;

      diff_m = (diff_m < 10) ? "0" + diff_m : diff_m;
      diff_s = (diff_s < 10) ? "0" + diff_s : diff_s;
      countDown.innerHTML = separate(diff_d);
      countDown2.innerHTML = diff_h + ":" + diff_m + ":" + diff_s;
    }



  }

  return {

      start: function() {
          var Timer;
          Timer = setInterval(countdown, 1000);
      }

  };

})();

window.onload = CountDown.start;
