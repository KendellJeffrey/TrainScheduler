$( document ).ready(function() {

    var config = {
        apiKey: "AIzaSyDg6C14oGqb_yLcD5bb2fVSpjoSJaTffW0",
        authDomain: "train-c7f14.firebaseapp.com",
        databaseURL: "https://train-c7f14.firebaseio.com",
        projectId: "train-c7f14",
        storageBucket: "train-c7f14.appspot.com",
        messagingSenderId: "168232192294"
    };
    // Init firebase
    firebase.initializeApp(config);

    var data = firebase.data();

    $("#trainButton").on("click", function(event) {
        event.preventDefault(); //no button reset

        //set realtime
        var realtime = moment();
        
        var trainName = $("#name").val().trim();

        // puts train info together 
        var newTrain = {
            train: trainName
        };


        //sends new train to db
        data.ref().push(newTrain);
        
        $("#name").val("");


        //stops the page from having a error / moving
        return false;

    }); //end of onclick

    //childsnapshop is a modified source of my data 
    data.ref().on("child_added", function(childSnapshot, prevChildKey) {
            console.log("childsnappshot");
            
            //vars
            var trainName = childSnapshot.val().train;
            

            $("#tbody").append("<tr><td>" + trainName + "</td></tr>");

    });
});

