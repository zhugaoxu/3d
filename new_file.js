 window.onload=function(){
	var stage=document.querySelector(".stage");
	var images=document.querySelectorAll("img");
	var imglen=images.length;
	var degree=360/imglen;
	var stepX=null;
	var stepY=null;
	var degX=null;
	var degY=null;
	
	for(var i=0;i<imglen;i++){
		var str="rotateY("+degree*i+"deg)translateZ(500px)";
		cssTransform(images[i],str);
	}
	
	document.onmousedown=function(e){
		var eve=e||event;
		var mouX=eve.clientX;
		var mouY=eve.clientY;
		document.onmousemove=function(e){
			var eve1=e||event;
			var mouseX=eve1.clientX;
		    var mouseY=eve1.clientY;
		    stepX=mouseX-mouX;
		    
		    stepY=mouseY-mouY;
		    degX-=stepY*0.2;
		    degY+=stepX*0.1;
		    var str="perspective(1600px)rotateX(-30deg)rotateX("+degX+"deg)rotateY("+degY+"deg)";
		    cssTransform(stage,str);
		    mouX=mouseX;
		    mouY=mouseY;
		}
	}
	document.onmouseup=function(){
		document.onmousemove=function(){
			return false;
		}
	}
	
	
	function cssTransform(element,value){
		var arr=["o","ms","Moz","webkit",""];
		var length=arr.length;
		for(var i=0;i<length;i++){
			element.style[arr[i]+"Transform"]=value;
		}
	}
	document.ondragstart=function(){
		return false;
	}
	

}