//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBf81p1qWJ3Wvxb4kN_phMt83TQqR1M9o0",
      authDomain: "kwitter-76fe1.firebaseapp.com",
      databaseURL: "https://kwitter-76fe1-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-76fe1",
      storageBucket: "kwitter-76fe1.appspot.com",
      messagingSenderId: "132009846685",
      appId: "1:132009846685:web:4635860b325c504273b174"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message : msg,
       like:0    
      });
      document.getElementById("msg").value="";



    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"</h4>";
message_with_tag = "<h4> class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+"value=" +like+"onclick='updateLike(this.id)>Likes :" + like+"</button>";
row = name_with_tag+message_with_tag+like_button;
document.getElementById("output").innerHTML+= row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).ariaValueMax;
      updated_likes = Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location.replace("qwitter.html");
}


