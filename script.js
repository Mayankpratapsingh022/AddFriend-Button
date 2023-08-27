 var istatus = document.querySelector("h5");

 var addFriend = document.querySelector("#Add");
var check = 0
 addFriend.addEventListener("click",function(){
    if(check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    check = 1;
    addFriend.innerHTML = "Remove Friend "
    addFriend.style.backgroundColor = "#ffb3c1"
    
    addFriend.style.color = "#001427"
    
    }

    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "Red"
        check = 0;
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "#a5ffd6"
     
        addFriend.style.color = "#001427"
        
      

    }
 })

