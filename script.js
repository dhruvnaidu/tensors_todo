    // Your web app's Firebase configuration
    var nextkey = 0;
    var firebaseConfig = {
      apiKey: "AIzaSyC-J9DyzEryDKDGERZZSaxJlUMLikOyXMA",
      authDomain: "sih2020-a0614.firebaseapp.com",
      databaseURL: "https://sih2020-a0614.firebaseio.com",
      projectId: "sih2020-a0614",
      storageBucket: "sih2020-a0614.appspot.com",
      messagingSenderId: "931030901917",
      appId: "1:931030901917:web:3cba5f6298213cc121a074",
      measurementId: "G-7ME7280PXT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    database.ref("users").on("child_added", function (data) {
      add_data_table(
        data.val().username,
        data.val().profile_picture,
        data.val().email,
        data.key
      );
      var lastkey = data.key;
      nextkey = parseInt(lastkey) + 1;
    });
    database.ref("users").on("child_changed", function (data) {
      update_data_table(
        data.val().username,
        data.val().profile_picture,
        data.val().email,
        data.key
      );
    });
    database.ref("users").on("child_removed", function (data) {
      remove_data_table(data.key);
    });
    $(document).ready(function () {
      //$("#sessionpage").hide();
          $("#event").hide();
      $('#btnAdd22').click(function () {
        var event = $('#event').val();
        if (event == "Got_the_data") {
          //$("#sessionpage").show();
          var eventurl = "https://maker.ifttt.com/trigger/" + event + "/with/key/fj8OEG2LlZsi6gNhqTEvGOLDH0vgETx6fUWHEUqt3w4"
          $.get(eventurl, function (data, status) {

          });
        }
        $("#sessionpage").show();
      });
    });
