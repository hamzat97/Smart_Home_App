function change1(cid,element){
  var state;
  if(element.checked) {
    if ( confirm('Are you sure you want to turn on the lamp1 ?') ){
      state_ON = "1";
      var request = $.get("/change_state1/"+cid+"?cmd="+state_ON);
      $(".widget1").css({"box-shadow": "1px 1px 3px 2px yellow", "-webkit-box-shadow": "1px 1px 3px 2px yellow", "-moz-box-shadow": "1px 1px 3px 2px yellow"});
      $("#icon1").css({"color": "yellow"});
      $(".widget1 label .fa").css({"color": "yellow"}); 
    }
    else {
      element.checked = false;
    }
  }
  else { 
    if ( confirm('Are you sure you want to turn off the lamp1 ?') ){
      state_OFF = "0";
      var request = $.get("/change_state1/"+cid+"?cmd="+state_OFF);
      $(".widget1").css({"box-shadow": "1px 1px 3px 2px white", "-webkit-box-shadow": "1px 1px 3px 2px white", "-moz-box-shadow": "1px 1px 3px 2px white"});
      $("#icon1").css({"color": "white"});
      $(".widget1 label .fa").css({"color": "white"});
    }
    else {
      element.checked = true;
    }
  }
}
function change2(cid,element){
  var state;
  if(element.checked) {
    if ( confirm('Are you sure you want to turn on the lamp2 ?') ){
      state_ON = "1";
      var request = $.get("/change_state2/"+cid+"?cmd="+state_ON);
      $(".widget2").css({"box-shadow": "1px 1px 3px 2px yellow", "-webkit-box-shadow": "1px 1px 3px 2px yellow", "-moz-box-shadow": "1px 1px 3px 2px yellow"});
      $("#icon2").css({"color": "yellow"});
      $(".widget2 label .fa").css({"color": "yellow"}); 
    }
    else {
      element.checked = false;
    }
  }
  else { 
    if ( confirm('Are you sure you want to turn off the lamp2 ?') ){
      state_OFF = "0";
      var request = $.get("/change_state2/"+cid+"?cmd="+state_OFF);
      $(".widget2").css({"box-shadow": "1px 1px 3px 2px white", "-webkit-box-shadow": "1px 1px 3px 2px white", "-moz-box-shadow": "1px 1px 3px 2px white"});
      $("#icon2").css({"color": "white"});
      $(".widget2 label .fa").css({"color": "white"});
    }
    else {
      element.checked = true;
    }
  }
}  
function change3(cid,element){
  var state;
  if(element.checked) {
    if ( confirm('Are you sure you want to turn on the lamp3 ?') ){
      state_ON = "1";
      var request = $.get("/change_state3/"+cid+"?cmd="+state_ON);
      $(".widget3").css({"box-shadow": "1px 1px 3px 2px yellow", "-webkit-box-shadow": "1px 1px 3px 2px yellow", "-moz-box-shadow": "1px 1px 3px 2px yellow"});
      $("#icon3").css({"color": "yellow"});
      $(".widget3 label .fa").css({"color": "yellow"}); 
    }
    else {
      element.checked = false;
    }
  }
  else { 
    if ( confirm('Are you sure you want to turn off the lamp3 ?') ){
      state_OFF = "0";
      var request = $.get("/change_state3/"+cid+"?cmd="+state_OFF);
      $(".widget3").css({"box-shadow": "1px 1px 3px 2px white", "-webkit-box-shadow": "1px 1px 3px 2px white", "-moz-box-shadow": "1px 1px 3px 2px white"});
      $("#icon3").css({"color": "white"});
      $(".widget3 label .fa").css({"color": "white"});
    }
    else {
      element.checked = true;
    }
  }
}    
function change4(cid,element){
  var state;
  if(element.checked) {
    if ( confirm('Are you sure you want to turn on the lamp4 ?') ){
      state_ON = "1";
      var request = $.get("/change_state4/"+cid+"?cmd="+state_ON);
      $(".widget4").css({"box-shadow": "1px 1px 3px 2px yellow", "-webkit-box-shadow": "1px 1px 3px 2px yellow", "-moz-box-shadow": "1px 1px 3px 2px yellow"});
      $("#icon4").css({"color": "yellow"});
      $(".widget4 label .fa").css({"color": "yellow"}); 
    }
    else {
      element.checked = false;
    }
  }
  else { 
    if ( confirm('Are you sure you want to turn off the lamp4 ?') ){
      state_OFF = "0";
      var request = $.get("/change_state4/"+cid+"?cmd="+state_OFF);
      $(".widget4").css({"box-shadow": "1px 1px 3px 2px white", "-webkit-box-shadow": "1px 1px 3px 2px white", "-moz-box-shadow": "1px 1px 3px 2px white"});
      $("#icon4").css({"color": "white"});
      $(".widget4 label .fa").css({"color": "white"});
    }
    else {
      element.checked = true;
    }
  }
}   
function change5(cid,element){
  var state;
  if(element.checked) {
    if ( confirm('Are you sure you want to turn on the lamp5 ?') ){
      state_ON = "1";
      var request = $.get("/change_state5/"+cid+"?cmd="+state_ON);
      $(".widget5").css({"box-shadow": "1px 1px 3px 2px yellow", "-webkit-box-shadow": "1px 1px 3px 2px yellow", "-moz-box-shadow": "1px 1px 3px 2px yellow"});
      $("#icon5").css({"color": "yellow"});
      $(".widget5 label .fa").css({"color": "yellow"}); 
    }
    else {
      element.checked = false;
    }
  }
  else { 
    if ( confirm('Are you sure you want to turn off the lamp5 ?') ){
      state_OFF = "0";
      var request = $.get("/change_state5/"+cid+"?cmd="+state_OFF);
      $(".widget5").css({"box-shadow": "1px 1px 3px 2px white", "-webkit-box-shadow": "1px 1px 3px 2px white", "-moz-box-shadow": "1px 1px 3px 2px white"});
      $("#icon5").css({"color": "white"});
      $(".widget5 label .fa").css({"color": "white"});
    }
    else {
      element.checked = true;
    }
  }
}     
function change6(cid,element){
  var state;
  if(element.checked) {
    if ( confirm('Are you sure you want to turn on the air conditioner ?') ){
      state_ON = "1";
      var request = $.get("/change_state6/"+cid+"?cmd="+state_ON);
      $(".widget6").css({"box-shadow": "1px 1px 3px 2px #48EA8B", "-webkit-box-shadow": "1px 1px 3px 2px #48EA8B", "-moz-box-shadow": "1px 1px 3px 2px #48EA8B"});
      $("#icon6").css({"color": "#48EA8B"});
      $(".widget6 label .fa").css({"color": "#48EA8B"}); 
    }
    else {
      element.checked = false;
    }
  }
  else { 
    if ( confirm('Are you sure you want to turn off the air conditioner ?') ){
      state_OFF = "0";
      var request = $.get("/change_state6/"+cid+"?cmd="+state_OFF);
      $(".widget6").css({"box-shadow": "1px 1px 3px 2px red", "-webkit-box-shadow": "1px 1px 3px 2px red", "-moz-box-shadow": "1px 1px 3px 2px red"});
      $("#icon6").css({"color": "red"});
      $(".widget6 label .fa").css({"color": "red"});
    }
    else {
      element.checked = true;
    }
  }
}    
function change7(cid,element){
  var state;
  if(element.checked) {
    if ( confirm('Are you sure you want to open the door1 ?') ){
      state_ON = "1";
      var request = $.get("/change_state7/"+cid+"?cmd="+state_ON);
      $(".widget7").css({"box-shadow": "1px 1px 3px 2px #48EA8B", "-webkit-box-shadow": "1px 1px 3px 2px #48EA8B", "-moz-box-shadow": "1px 1px 3px 2px #48EA8B"});
      $("#icon7").css({"color": "#48EA8B"});
      $(".widget7 label .fa").css({"color": "#48EA8B"}); 
    }
    else {
      element.checked = false;
    }
  }
  else { 
    if ( confirm('Are you sure you want to close the door1 ?') ){
      state_OFF = "0";
      var request = $.get("/change_state7/"+cid+"?cmd="+state_OFF);
      $(".widget7").css({"box-shadow": "1px 1px 3px 2px red", "-webkit-box-shadow": "1px 1px 3px 2px red", "-moz-box-shadow": "1px 1px 3px 2px red"});
      $("#icon7").css({"color": "red"});
      $(".widget7 label .fa").css({"color": "red"});
    }
    else {
      element.checked = true;
    }
  }
}    
function change8(cid,element){
  var state;
  if(element.checked) {
    if ( confirm('Are you sure you want to open the car garage ?') ){
      state_ON = "1";
      var request = $.get("/change_state8/"+cid+"?cmd="+state_ON);
      $(".widget8").css({"box-shadow": "1px 1px 3px 2px #48EA8B", "-webkit-box-shadow": "1px 1px 3px 2px #48EA8B", "-moz-box-shadow": "1px 1px 3px 2px #48EA8B"});
      $("#icon8").css({"color": "#48EA8B"});
      $(".widget8 label .fa").css({"color": "#48EA8B"}); 
    }
    else {
      element.checked = false;
    }
  }
  else { 
    if ( confirm('Are you sure you want to close the car garage ?') ){
      state_OFF = "0";
      var request = $.get("/change_state8/"+cid+"?cmd="+state_OFF);
      $(".widget8").css({"box-shadow": "1px 1px 3px 2px red", "-webkit-box-shadow": "1px 1px 3px 2px red", "-moz-box-shadow": "1px 1px 3px 2px red"});
      $("#icon8").css({"color": "red"});
      $(".widget8 label .fa").css({"color": "red"});
    }
    else {
      element.checked = true;
    }
  }
}    
function change9(cid,element){
  var state;
  if(element.checked) {
    if ( confirm('Are you sure you want to open the door2 ?') ){
      state_ON = "1";
      var request = $.get("/change_state9/"+cid+"?cmd="+state_ON);
      $(".widget9").css({"box-shadow": "1px 1px 3px 2px #48EA8B", "-webkit-box-shadow": "1px 1px 3px 2px #48EA8B", "-moz-box-shadow": "1px 1px 3px 2px #48EA8B"});
      $("#icon9").css({"color": "#48EA8B"});
      $(".widget9 label .fa").css({"color": "#48EA8B"}); 
    }
    else {
      element.checked = false;
    }
  }
  else { 
    if ( confirm('Are you sure you want to close the door2 ?') ){
      state_OFF = "0";
      var request = $.get("/change_state9/"+cid+"?cmd="+state_OFF);
      $(".widget9").css({"box-shadow": "1px 1px 3px 2px red", "-webkit-box-shadow": "1px 1px 3px 2px red", "-moz-box-shadow": "1px 1px 3px 2px red"});
      $("#icon9").css({"color": "red"});
      $(".widget9 label .fa").css({"color": "red"});
    }
    else {
      element.checked = true;
    }
  }
}    
function change10(cid,element){
  var state;
  if(element.checked) {
    if ( confirm('Are you sure you want to turn on the cctv camera ?') ){
      state_ON = "1";
      var request = $.get("/change_state10/"+cid+"?cmd="+state_ON);
      $(".widget10").css({"box-shadow": "1px 1px 3px 2px #48EA8B", "-webkit-box-shadow": "1px 1px 3px 2px #48EA8B", "-moz-box-shadow": "1px 1px 3px 2px #48EA8B"});
      $("#icon10").css({"color": "#48EA8B"});
      $(".widget10 label .fa").css({"color": "#48EA8B"}); 
    }
    else {
      element.checked = false;
    }
  }
  else { 
    if ( confirm('Are you sure you want to turn off the cctv camera ?') ){
      state_OFF = "0";
      var request = $.get("/change_state10/"+cid+"?cmd="+state_OFF);
      $(".widget10").css({"box-shadow": "1px 1px 3px 2px red", "-webkit-box-shadow": "1px 1px 3px 2px red", "-moz-box-shadow": "1px 1px 3px 2px red"});
      $("#icon10").css({"color": "red"});
      $(".widget10 label .fa").css({"color": "red"});
    }
    else {
      element.checked = true;
    }
  }
}    