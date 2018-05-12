function handleSignUp(){
  // step1
  var email = document.getElementById('form-email').value;
  var password = document.getElementById('form-password').value;
  // step2
  if(email.length < 4){
    alert("Pls Enter a valid email address");
    return;
  }
  if(password.length < 4){
    alert("Pls use a stonger password");
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then(
                    // success
                    function(){
                      alert("User Created!");
                    }
                  )
                  .catch(
                    function(error){
                      alert(error.message);
                    }
                  )
}

function handleSignIn(){
  // step1
  var email = document.getElementById('form-email').value;
  var password = document.getElementById('form-password').value;
  // step2
  firebase.auth().signInWithEmailAndPassword(email,password)
                  .then(
                    function(){
                      alert("Sign In Success!")
                      // window.location.href="https://google.com"
                    }
                  )
                  .catch(
                    function(error){
                      alert(error.message)
                    }
                  )
}

function handleSignOut(){
  // step1
  var email = document.getElementById('form-email').value;
  var password = document.getElementById('form-password').value;
  // step2
  firebase.auth().signOut()
                  .then(
                    alert("Sign Out Success!")

                  )
                  .catch(
                    function(error){
                      alert(error.message)
                    }
                  )
}


function handleFBlogin(){
  if(! firebase.auth().currentUser){
    var provider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider)
    .then(function(result){
        var token = result.credential.accessToken;
        var user = result.user;
        // console.log(user);
        // alert(user.email);
        alert("Facebook Sign In Success!")
        // window.location.href= "https://google.com";
      })
      .catch(
        function(error){
          alert(error.message)
        }
      )
  }
  else{
    handleSignOut();
  }
}

$(document).ready(function() {
        var audioElement1 = document.getElementById('audioForest');
        $('#stop1').hide();
    $('#play1').click(function() {
        $('#play1').hide();
        $('#stop1').show();
         audioElement1.play();
    });

    $('#stop1').click(function() {
        $('#play1').show();
        $('#stop1').hide();
        audioElement1.pause();
    });
});

$(document).ready(function() {
        var audioElement2 = document.getElementById('audioCafe');
        $('#stop2').hide();
    $('#play2').click(function() {
        $('#play2').hide();
        $('#stop2').show();
         audioElement2.play();
    });

    $('#stop2').click(function() {
        $('#play2').show();
        $('#stop2').hide();
        audioElement2.pause();
    });
});

$(document).ready(function() {
        var audioElement3 = document.getElementById('audioCountryside');
        $('#stop3').hide();
    $('#play3').click(function() {
        $('#play3').hide();
        $('#stop3').show();
         audioElement3.play();
    });

    $('#stop3').click(function() {
        $('#play3').show();
        $('#stop3').hide();
        audioElement3.pause();
    });
});

$(document).ready(function() {
        var audioElement4 = document.getElementById('audioOcean');
        $('#stop4').hide();
    $('#play4').click(function() {
        $('#play4').hide();
        $('#stop4').show();
         audioElement4.play();
    });

    $('#stop4').click(function() {
        $('#play4').show();
        $('#stop4').hide();
        audioElement4.pause();
    });
});

$(document).ready(function() {
        var audioElement5 = document.getElementById('audioRain');
        $('#stop5').hide();
    $('#play5').click(function() {
        $('#play5').hide();
        $('#stop5').show();
         audioElement5.play();
    });

    $('#stop5').click(function() {
        $('#play5').show();
        $('#stop5').hide();
        audioElement5.pause();
    });
});

$(document).ready(function() {
        var audioElement6 = document.getElementById('audioTrains');
        $('#stop6').hide();
    $('#play6').click(function() {
        $('#play6').hide();
        $('#stop6').show();
         audioElement6.play();
    });

    $('#stop6').click(function() {
        $('#play6').show();
        $('#stop6').hide();
        audioElement6.pause();
    });
});

$(document).ready(function() {
        var audioElement7 = document.getElementById('audioNightdream');
        $('#stop7').hide();
    $('#play7').click(function() {
        $('#play7').hide();
        $('#stop7').show();
         audioElement7.play();
    });

    $('#stop7').click(function() {
        $('#play7').show();
        $('#stop7').hide();
        audioElement7.pause();
    });
});

$(document).ready(function() {
        var audioElement8 = document.getElementById('audioDaydream');
        $('#stop8').hide();
    $('#play8').click(function() {
        $('#play8').hide();
        $('#stop8').show();
         audioElement8.play();
    });

    $('#stop8').click(function() {
        $('#play8').show();
        $('#stop8').hide();
        audioElement8.pause();
    });
});

$(document).ready(function() {
        var audioElement9 = document.getElementById('audioBlues');
        $('#stop9').hide();
    $('#play9').click(function() {
        $('#play9').hide();
        $('#stop9').show();
         audioElement9.play();
    });

    $('#stop9').click(function() {
        $('#play9').show();
        $('#stop9').hide();
        audioElement9.pause();
    });
});

$(document).ready(function() {
        var audioElement10 = document.getElementById('audioMuse');
        $('#stop10').hide();
    $('#play10').click(function() {
        $('#play10').hide();
        $('#stop10').show();
         audioElement10.play();
    });

    $('#stop10').click(function() {
        $('#play10').show();
        $('#stop10').hide();
        audioElement10.pause();
    });
});
