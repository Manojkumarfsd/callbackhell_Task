var countdown = (count, callback) => {
    var countdownDiv = document.getElementById("cnt");
  
    var updateCountdown = (currentCount) => {
      countdownDiv.textContent = currentCount;
      if (currentCount > 0) {
        setTimeout(() => updateCountdown(currentCount - 1), 1000);
      } else {
        callback();
      }
    };
  
    updateCountdown(count);
  };
  
  var display = () => {
    var countdownDiv = document.getElementById("cnt");
    countdownDiv.textContent = "HAPPY INDEPENDENCE DAY TO ALL";
  };

  countdown(10, display);
  