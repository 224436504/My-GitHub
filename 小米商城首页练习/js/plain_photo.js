$(function(){	
	$(".contorl_left").click(function(){
		control_left();
						
	});
	$(".contorl_right").click(function(){
		
			control_right();
	});	
		var turn=0;
	timer=setInterval(function(){

		if(turn%2==0){
			control_left();
			turn+=1;
		}else{
			control_right();
			turn+=1;
		}
		},4500)


		
	})
		var control_left=function(){
			$(".plain_photo_list").css({
			"margin-left":"-100%"
		});
		$(".control_left").css({
			"color":"#ff6700"
		})
		
		}
		
		var control_right=function(){					
			$(".plain_photo_list").css({
				"margin-left":"0"
			});
		}				

	

	
