var usermsg="";
var count=0;
var name="";
var coursenum=0;


courses={
  "1":"PCB Design Workshop",
  "2":"Web Development Bootcamp",
  "3":"Full Stack Web Development with Node js",
  "4":"Building Chatbots with Google Assistant Workshop",
  "5":"Python for Engineers"
}

courseinfo={
  "1":"Welcome to PCB Design Workshop...!!",
  "2":"Welcome to Become a Web development pro with these skills...!",
  "3":"Welcome to Full Stack development with node js",
  "4":"Welcome to building chatbots! workshop",
  "5":"Welcome to learning Python for ML",

}

classesinfo={
  "1":["Information about PCB and it's uses","Steps involved in circuit design - Schematic,BOM,Layout Design,Assembly","Reading Datasheet and Start to draw a simple Schematic using some sensors","Pullup resistors,Decoupling capacitors,PCB Power,Adafruit,EEVBlog"],
  "2":["Introduction to Web Development-HTML","Styling your web pages-CSS","Building Responsive Web pages with Bootstrsp","Styling your web pages-CSS part-2","Bootstrap part TWO","Interactivity with Javascript"],
  "3":["Course Introduction and Revision","Introduction to Javascript","Introduction to Node Js","Understanding Node Js CAll back functions","Understanding API's","Introduction to Chatbots","Building Telegram Chatbots with API's"," Getting Started with No SQL Database","Connecting MongoDB in Telegram Chatbots","Building Web Applications with Express Js","Building Web Applications with Node Js"],
  "4":["Introduction to Chatbots Your first Chatbot","Building Chatbots with DialogFlow and Deploying to Google Assistant"],
  "5":["ML Introduction","Python-Getting Acquainted","Designing our first Python Project","Design Thinking-Industry Expert Perspective"]
}


classeslinks={
  "1":["https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjEyNWJkMGItM \n mVmNS00M2YzLTg3YTAtMWRiZTA3MmMzOWFi%40thread.v2/0?   context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d","https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGJiYmE2YzUt \n NjAzNS00YmQ1LTk2NTctZjcyMzhkMTgxOWQ0%40thread.v2/0? context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d","https://teams.microsoft.com/l/meetup-join/19%3ameeting_N2JjNGUxMzAtNjU4Yy00MzdkLWFkN2UtMjJlODg5NmM4OGZh%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d","https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTJkZGIzZDYtNTFlYi00MWIyLTljM2MtYzFkZjQ3NDM1ZmIw%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d"],
  "2":["https://youtu.be/UxoX5fGQeiY","https://youtu.be/yyFxGoxyLQM","https://youtu.be/xUmM1ucWnJM","https://youtu.be/UcHg0KPWNkY","https://youtu.be/k2XJcSpUfbM","https://youtu.be/1Y8rKnPTzPc"],
  "3":["https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDc3Y2QwZTctOTQ5ZS00ZjhhLTk2ODMtNGJhNTI4MWZlNjYy%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d","https://youtu.be/BcFb8HWKupI","https://youtu.be/dTSPbW-FCRE","https://youtu.be/C5FFsBLWcME","https://youtu.be/uwAsEB6AegU","https://youtu.be/TE8N9M_KnFc","https://youtu.be/V9yrSVkAUks","https://youtu.be/YxWZhTUGkCk","https://youtu.be/TAwcv9x1T28","https://youtu.be/Qi7SV2nWjOU","https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzQ1NmIzYTUtY2M4MC00ODY1LTk0YzctZjE2ODllZmYxNDA3%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d"],
  "4":["https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTFkNjM0M2UtY2ZiZC00YTViLWJiMTAtZDk3NDg5YmE3NjYw%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d","https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGI5N2ZjNGUtYzhiNy00ZWZhLTg2YzgtNjdmNTM5YTE5NTE4%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d"],
  "5":["https://www.youtube.com/watch?v=1zz5VAizJEE","https://www.youtube.com/watch?v=25uW13yKZmE","https://www.youtube.com/watch?v=C6X71gjB9pA","https://youtu.be/hxc7SibPbW8"]
}


userprinter=function(y){

   // var p is the element created in the html
  var p = document.createElement("h3");

  //by using this line we can give the text to created p element in html
  
  p.innerText=y;

  //to create a attribute for the created element here i created class att which is used to style our msg
  var att=document.createAttribute("class");

  //giving value to attribute
  att.value="msgbyuser";

  //to set attribute to the element
  p.setAttributeNode(att);

  // userinp takes what to print on screen
  chat.appendChild(p);
  

  //after printing to go to next line adding br tag here
  var x = document.createElement("BR");
  chat.appendChild(x);

  
}



botprinter=function(y){
   // var p is the element created in the html
  var p = document.createElement("h3");

  //by using this line we can give the text to created p element in html
  
  p.innerText=y;

  //to create a attribute for the created element here i created class att which is used to style our msg
  var att=document.createAttribute("class");

  //giving value to attribute
  att.value="msgbybot";

  //to set attribute to the element
  p.setAttributeNode(att);

  // userinp takes what to print on screen
  chat.appendChild(p);
  

  //after printing to go to next line adding br tag here
  var x = document.createElement("BR");
  chat.appendChild(x);

}


takeinput=function(){

  usermsg=document.getElementById('input').value.toLowerCase();

  userprinter(usermsg);
  document.getElementById("fourm").reset();

  if(count==0){
    name=usermsg;
    count=50;
    usermsg="hai";
    processusermsg(usermsg);
  }



  else if(usermsg=="back"){
    count++;
    processusermsg("wel");
    
  }
  



  else if(count==2){
    processclass();
  }


  else{
    processusermsg(usermsg);
  }


}












processusermsg=function(msg){
  
  var botmsg="";

  if(msg.includes("hai")||msg.includes("hi")){

    console.log("dexbh")

    botmsg="Hi! "+name.toUpperCase()+" a warm welcome to you :)";
    botprinter(botmsg);

    botmsg="It is a great opportunity to learn new courses..!";
    botprinter(botmsg);


    
    botmsg="These are the courses provided by vedic platform :  \n \n"+ courses[1]+ "\n" + courses[2] +"\n"+courses[3] +"\n"+courses[4] +"\n"+courses[5] +"\n \n Select a course you want to Learn";
    botprinter(botmsg);
    

  }


  else if(msg.includes("wel")){

    botmsg="It is a great opportunity to learn new courses..!";
    botprinter(botmsg);


    
    botmsg="These are the courses provided by vedic platform :  \n \n"+ courses[1]+ "\n" + courses[2] +"\n"+courses[3] +"\n"+courses[4] +"\n"+courses[5] +"\n \n Select a course you want to Learn";
    botprinter(botmsg);

  }

  else if(msg.includes("bye")||msg.includes("quit")||msg.includes("exit")){

    botmsg="Bye "+name.toUpperCase()+" see you later.";
    botprinter(botmsg);

  }


  else if(msg.includes("web development")||msg.includes("frontend")){
    
    count=2;
    coursenum=2;

    botmsg=courseinfo[2];
    botprinter(botmsg);



    botmsg="These are the classes form Web Development course :   \n \n"
    var mm=coursenum;
    for(var i=0;i<classesinfo[mm].length;i++){
     botmsg=botmsg+classesinfo[mm][i]+ "\n";
    }
    botmsg=botmsg+" \n Select a class to get recorded session link";
    botprinter(botmsg);


  }


  else if(msg.includes("pcb")||msg.includes("pcb design")){
    
    count=2;
    coursenum=1;

    botmsg=courseinfo[2];
    botprinter(botmsg);



    botmsg="These are the classes form PCB Designing course :   \n \n"
    var mm=coursenum;
    for(var i=0;i<classesinfo[mm].length;i++){
     botmsg=botmsg+classesinfo[mm][i]+ "\n";
    }
    botmsg=botmsg+" \n Select a class to get recorded session link";
    botprinter(botmsg);

    
  }


  else if(msg.includes("full stack")||msg.includes("backend")||msg.includes("nodejs")){
    
    count=2;
    coursenum=3;

    botmsg=courseinfo[2];
    botprinter(botmsg);



    botmsg="These are the classes form Web Development course :   \n \n"
    var mm=coursenum;
    for(var i=0;i<classesinfo[mm].length;i++){
     botmsg=botmsg+classesinfo[mm][i]+ "\n";
    }
    botmsg=botmsg+" \n Select a class to get recorded session link";
    botprinter(botmsg);


  }



  else if(msg.includes("google assistant")||msg.includes("chatbots")||msg.includes("Chatbot")){
    
    count=2;
    coursenum=4;

    botmsg=courseinfo[2];
    botprinter(botmsg);



    botmsg="These are the classes form Web Development course :   \n \n"
    var mm=coursenum;
    for(var i=0;i<classesinfo[mm].length;i++){
     botmsg=botmsg+classesinfo[mm][i]+ "\n";
    }
    botmsg=botmsg+" \n Select a class to get recorded session link";
    botprinter(botmsg);


  }


  else if(msg.includes("ml")||msg.includes("machine learning")||msg.includes("python")){
    
    count=2;
    coursenum=5;

    botmsg=courseinfo[2];
    botprinter(botmsg);



    botmsg="Python is the first step to learen Machine Learning... \n These are the classes form Python course :   \n \n"
    var mm=coursenum;
    for(var i=0;i<classesinfo[mm].length;i++){
     botmsg=botmsg+classesinfo[mm][i]+ "\n";
    }
    botmsg=botmsg+" \n Select a class to get recorded session link";
    botprinter(botmsg);


  }

  else{
    botmsg="Sorry "+name.toUpperCase()+" you have selected a wrong course :( \n \n Please select a correct one";
    botprinter(botmsg);
  }

}






processclass=function(){
  var classes=classesinfo[coursenum];
  console.log(classes)

  var classcount=0;

  

  for(var i=0;i<classes.length;i++){
    
    var c=classes[i].toLowerCase();


    if(c.includes(usermsg)){
      botmsg="Here is the session link for the class "+classes[i]+" : \n \n"+classeslinks[coursenum][i];
      botprinter(botmsg);
      classcount++;
    }
  }

  if(classcount==0){
    botmsg="Sorry "+name.toUpperCase()+" you have entered a wrong class :( \n \n please choose a correct one :)"
    botprinter(botmsg);


    botmsg="Otherwise if u want to go back to courses enter back";
    botprinter(botmsg);


  }


  else{
  count++;
  }
}

























































//msg.includes("")