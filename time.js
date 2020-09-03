<link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
<div id="screen">
	<div id="time"></div>
	<div id="date"></div>

	<div id="locker">
	  <i class="fa fa-angle-right"></i> 
	  <a class="unlock">
	    slide to unlock 
	  </a>
	</div>
</div>
<a id="reset">Reset</a>

<style>
@import "bourbon";

body {
  background-color: #111;
  color: #fff;
  font-family: 'Open Sans', "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif;
}

div#screen {  
  display: block;
  position: relative;
  text-align: center;  
  opacity: 1;
  
  @include transition(all 0.6s ease); 
    
  &.activate {
    opacity: 0;
    margin-left: 500px;   
    visibility: hidden;
  } 
}

div#time {
  font-size: 72px;
  margin: 60px auto 0px;
}

div#date {
  margin: 20px auto 0px;
}

div#locker {  
  cursor: pointer;   
  margin: 180px auto 0px;   
  color: rgba(255,255,255,0.1);
  
  .fa {
    font-size: 38px;
    position: relative;
    top: 3px;
    left: -5px;     
    
    @include transition(all 0.5s ease);
    animation: glow 2s infinite alternate;
  }  
  
  a.unlock {  
    color: inherit;
    text-decoration: none;
    font-size: 28px;        
    position: relative;
  
    @include transition(all 0.5s ease);
    animation: glow 2s infinite alternate;  
  }   
  
  &:hover {
    text-decoration: none;    
    color: rgba(255,255,255,1);
  }  
}

@keyframes glow {
  to {
    color: #fff;
  }
}

#reset {
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  padding: 8px 14px;
  background-color: #417FD2;
  border-radius: 4px;
  
  &:hover {
    background-color: darken(#417FD2, 30%);
  }
}
</style>

<script>
$('#locker').on('click', function(e) {
  e.preventDefault();
  $('#screen').toggleClass('activate');
});

$('#reset').on('click', function(e) {
  e.preventDefault();
  $('#screen').removeClass('activate'); 
});

var setTime = function() {
  var time = moment().format('hh:mm');
  var date = moment().format('dddd, MMMM D');
  $('#date').html(date);
  $('#time').html(time);
};

setTime();
</script>
