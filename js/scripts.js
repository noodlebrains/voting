$('document').ready(function(){
  var userAge;
  var checkAge = function(){
    userAge = parseInt(prompt("Enter your age!"));
      if (userAge > 120) {
        alert('Hey jerk - enter your real age. Voting is a serious thing. That\'s the problem with kids these days. No respect.');
        window.location.reload();
      } else if (userAge >= 18) {
        $('.votingInfo').show();
      } else {
        $('.under18').show();
      }
  };
  checkAge();
  $('#candidateForm').submit(function(event){
    if ($('#candidate').val() === 'Sheikh Hasina') {
      $('.dict').hide();
      $('.sheikhDiv').show();
    } else if ($('#candidate').val() === 'Vlad III the Impaler') {
      $('.dict').hide();
      $('.vladDiv').show();
    } else if ($('#candidate').val() === 'Saddam Hussein') {
      $('.dict').hide();
      $('.saddamDiv').show();
    }
    event.preventDefault();
  });
  $('#locationForm').submit(function(event){
    if ($("input#pdxCheck:checked").length > 0) {
      $(".pdx").show();
    } else {
      $(".pdx").hide();
    }
    if ($("input#hoodRiverCheck:checked").length > 0) {
      $(".hoodRiver").show();
    } else {
      $(".hoodRiver").hide();
    }
    if ($("input#greshamCheck:checked").length > 0) {
      $(".gresham").show();
    } else {
      $(".gresham").hide();
    }
    if ($("input#seasideCheck:checked").length > 0) {
      $(".seaside").show();
    } else {
      $(".seaside").hide();
    }
  });
  var vladScore = 0;
  var saddamScore = 0;
  var sheikScore = 0;

  $("#datingForm").submit(function(event) {
    if ($("#question1").val() === "vlad") {
      vladScore++;
    }
    if ($("#question1").val() === "saddam") {
      saddamScore++;
    }
    if ($("#question1").val() === "sheik") {
      sheikScore++;
    }
    if ($("#question2").val() === "vlad") {
      vladScore++;
    }
    if ($("#question2").val() === "saddam") {
      saddamScore++;
    }
    if ($("#question2").val() === "sheik") {
      sheikScore++;
    }
    if ($("#question3").val() === "vlad") {
      vladScore++;
    }
    if ($("#question3").val() === "saddam") {
      saddamScore++;
    }
    if ($("#question3").val() === "sheik") {
      sheikScore++;
    }
    var winner = Math.max(vladScore, saddamScore, sheikScore);
    if (vladScore === winner) {
      $('.dateWinner').text('Your love is with Vlad!')
    } else if (saddamScore === winner){
      $('.dateWinner').text('Your love is with Saddam!')
    } else if (sheikScore === winner) {
      $('.dateWinner').text('Your love is with Sheik!')
    } else { //never reaches this condition
      $('.dateWinner').text('Your conflicted! Your love is with Shrek!')
    }
    event.preventDefault();

  });

  $("#triForm").submit(function(event) {
    var tri1 = parseInt($("input#triangleside1").val());
    var tri2 = parseInt($("input#triangleside2").val());
    var tri3 = parseInt($("input#triangleside3").val());
    if (isNaN(tri1) || isNaN(tri2) || isNaN(tri3)) {
        alert('Why are you being difficult? Only enter NUMBERS');
      } else if (tri1 + tri2 <= tri3 || tri1 + tri3 <= tri2 || tri2 + tri3 <= tri1) {
        alert('Not a triangle. Try again bozo!');
      } else if (tri1 === tri2 && tri1 === tri3) {
        $(".triWinner").text("You are a Equilateral triangle");
      } else if (tri1 === tri2 || tri1 === tri3 || tri2 === tri3) {
        $(".triWinner").text("You are a Isosceles triangle");
      } else {
        $(".triWinner").text("You are a Scalene triangle");
      }
    event.preventDefault();
  });
});
