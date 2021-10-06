var width = window.innerWidth; 
var height = window.innerHeight; 

//Setting Origin
var x = 0; //width
var y = 0; //height

function calculate(){
    x = Math.floor(Math.random()*(width-100));
    y = Math.floor(Math.random()*(height-100));

    return ((x+23)+"px,"+(y+42));
}

setInterval(()=>{ 
    
    document.getElementById("blob1").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob2").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob3").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob4").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob5").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob6").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob7").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob8").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob9").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob10").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob11").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob12").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob13").style.transform = "translate("+calculate()+"px)";
    document.getElementById("blob14").style.transform = "translate("+calculate()+"px)";
    

    document.getElementById("blob1").animate([
        // keyframes
        { opacity: '1', width: '0', height: '0' },
        { opacity: '0', width: '20vmax', height: '20vmax' },
      ], 
      {
        // timing options
        delay: 500,
        duration: (2500 - 500),
        iterations: 1     
      });

      document.getElementById("blob2").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '23vmax', height: '23vmax' },
      ], 
      {
        // timing options
        delay: 200,
        duration: (2500 - 200),
        iterations: 1     
      });

      document.getElementById("blob3").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '19vmax', height: '19vmax' },
      ], 
      {
        // timing options
        delay: 400,
        duration: (2500 - 400),
        iterations: 1     
      });

      document.getElementById("blob4").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '14vmax', height: '14vmax' },
      ], 
      {
        // timing options
        delay: 320,
        duration: (2500 - 320),
        iterations: 1      
      });

      document.getElementById("blob5").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '12vmax', height: '12vmax' },
      ], 
      {
        // timing options
        delay: 140,
        duration: (2500 - 140),
        iterations: 1     
      });

      document.getElementById("blob6").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '15vmax', height: '15vmax' },
      ], 
      {
        // timing options
        delay: 330,
        duration: (2500 - 330),
        iterations: 1      
      });

      document.getElementById("blob7").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '16.6vmax', height: '16.6vmax' },
      ], 
      {
        // timing options
        delay: 260,
        duration: (2500 - 260),
        iterations: 1      
      });

      document.getElementById("blob8").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '18vmax', height: '18vmax' },
      ], 
      {
        // timing options
        delay: 290,
        duration: (2500 - 290),
        iterations: 1      
      });

      document.getElementById("blob9").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '11vmax', height: '11vmax' },
      ], 
      {
        // timing options
        delay: 465,
        duration: (2500 - 465),
        iterations: 1      
      });

      document.getElementById("blob10").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '15.3vmax', height: '15.3vmax' },
      ], 
      {
        // timing options
        delay: 138,
        duration: (2500 - 138),
        iterations: 1      
      });

      document.getElementById("blob11").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '12.7vmax', height: '12.7vmax' },
      ], 
      {
        // timing options
        delay: 549,
        duration: (2500 - 549),
        iterations: 1      
      });

      document.getElementById("blob12").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '19.2vmax', height: '19.2vmax' },
      ], 
      {
        // timing options
        delay: 610,
        duration: (2500 - 610),
        iterations: 1      
      });

      document.getElementById("blob13").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '13.3vmax', height: '13.3vmax' },
      ], 
      {
        // timing options
        delay: 412,
        duration: (2500 - 412),
        iterations: 1      
      });

      document.getElementById("blob14").animate([
        // keyframes
        { opacity: '1', width: '2vmin', height: '2vmin' },
        { opacity: '0', width: '17.8vmax', height: '17.8vmax' },
      ], 
      {
        // timing options
        delay: 193,
        duration: (2500 - 193),
        iterations: 1      
      });


}, 2500);
