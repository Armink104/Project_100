

var firebaseConfig = {
    apiKey: "AIzaSyBFnaGQeRoxOr IDm5TDucLsrFvhupMRE60", 
    authDomain: "classtest-64d5a. firebaseapp.com", 
    databaseURL : "https://classtest-64d5a. firebaseio.com", 
    projectId: "classtest-64d5a", 
    storageBucket: "classtest-64d5a. appspot.com" ,
    messagingSenderId: "33276442296", 
    appId: "1:33276442296:web:85f5e95e9a2a53e5152640"
};

firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

window.location = "chat room.html";
}



