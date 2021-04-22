
var photos=function(data){
		length=data.length;
		var ul=document.createElement("ul");
			ul.className="item_container";		
		var ul_point=document.createElement("ul");
			ul_point.className="point_container";			
			for(var i=0;i<length;i++){			
			var li=document.createElement("li");
			var li_point=document.createElement("li");
			li.className="item";
			li_point.className="point";
			var img=document.createElement("img");
			img.setAttribute("src",data[i].src);
			img.setAttribute("alt",data[i].alt);
			li.appendChild(img);
			ul.appendChild(li);
			ul_point.appendChild(li_point);
			}
		var btn_1=document.createElement("div");
		 	btn_1.className="btn btn_left";
		var btn_2=document.createElement("div");
		 	btn_2.className="btn btn_right";
		$("#contianer").append(ul);
		$("#contianer").append(ul_point);
/*		$("#contianer").append(btn_1);
		$("#contianer").append(btn_2);	*/
}	
	//预设事件
	$(function(){
		i=0;//全局索引值
		play_time=2000;//轮播时长
		shownow();
		loopshow();
	//当前显示
	function shownow(){
		$(".item").eq(i).fadeIn(800).siblings().fadeOut(600);
		$(".point").eq(i).addClass("now").siblings().removeClass("now");
	};
	//循环显示
	 function loopshow(){
		timer=setInterval(function(){
		if(i==length){
		i=0;shownow();i=1;
		}else{
		shownow();
		i++;
		}


	},play_time);
	};			
	//事件绑定
	$(".point").hover(
		function(){
			i=$(this).index();
			shownow();
			clearInterval(timer);
			},
		function(){
				loopshow();
			}
	);
	$(".btn_right").click(
		function(){
			clearInterval(timer);
			if(i==length-1){
				i=-1;
			}
			i++;
			shownow();
			loopshow();
		}
	);
		$(".btn_left").click(
		function(){
			clearInterval(timer);
			if(i==0){
				i=length;
			}
			i--;
			shownow();
			loopshow();
		}
	);
	})
	
	var ph1=new photos(
		[
	{"src":"img/xmad_14955448033584_znTYv.jpg","alt":"图片加载失败"},
	{"src":"img/xmad_14944040497808_tjOJz.jpg","alt":"图片加载失败"},
	{"src":"img/xmad_14944969051726_ZUBwA.jpg","alt":"图片加载失败"},
	{"src":"img/xmad_14954424891071_jBKPf.jpg","alt":"图片加载失败"},
	{"src":"img/xmad_14956124530958_LahRY.jpg","alt":"图片加载失败"}
	]
	);
