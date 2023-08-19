
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBf81p1qWJ3Wvxb4kN_phMt83TQqR1M9o0",
      authDomain: "kwitter-76fe1.firebaseapp.com",
      databaseURL: "https://kwitter-76fe1-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-76fe1",
      storageBucket: "kwitter-76fe1.appspot.com",
      messagingSenderId: "132009846685",
      appId: "1:132009846685:web:4635860b325c504273b174"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"     +user_name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
     getData();
     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html"
     }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="qwitter.html";
}

