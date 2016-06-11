function GO_url(obj){

		host = window.location.href; 
		http_or_https=host.split("//")[0];
		hostdomain=host.split("//")[1].split("/")[0];
		replace_url=http_or_https+"//"+hostdomain+"/";
		dir_path = $(obj).attr("linkme");
		new_urlss=replace_url+dir_path;
		window.open(new_urlss);
        		
		//$("a.mydomain").attr("href",new_urlss); 
	  
	  }
	  
function go_my_site(){

		host = window.location.href; 
		http_or_https=host.split("//")[0];
		hostdomain=host.split("//")[1].split("/")[0];
		replace_url=http_or_https+"//"+hostdomain+"/";
        window.open(replace_url);		
		//$("a.mydomain").attr("href",new_urlss); 
	  
	  }

$(function(){
	//目录树折叠按钮 -------------------------------
	function setTreeStyle(obj){
		var objStyle = obj.children("b");
		var objList = obj.siblings("ul");
		if(objList.length == 1){
			var style = objStyle.attr("class");
			objStyle.attr("class","On2Off");
			setTimeout(
				function(){
					if(style == "Off"){
						objList.parent().siblings("li").children("span").children(".On").each(function(){
							setTreeStyle($(this).parent());	
						});
						var H = objList.innerHeight()
						objList.css({display:"block",height:"0"});
						objList.animate({height:H},300,function(){$(this).css({height:"auto"});});
						objStyle.attr("class","On");
					}
					else if(style == "On"){
						objList.find("li").children("span").children(".On").each(function(){
							setTreeStyle($(this).parent());	
						});
						var H = objList.innerHeight()
						objList.animate({height:0},300,function(){$(this).css({height:"auto",display:"none"})});
						objStyle.attr("class","Off");
					}
				},
				42
			);
		}
	}
	$("#tree_root").find("li").children("span").click(function(){
		setTreeStyle($(this));
	});
	// -----------------------------------------	
})