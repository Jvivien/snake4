
$(function(){
			 
			 var bgpd=1;//背景标志位
			//初始化界面
			var snakegame=new Snake();
			startImg.onload=function(){
				snakegame.init();
			}
			
			$("#start").click(function(){
				$("#start").css("display","none");
				$("#down").css("display","block");
				snakegame.start();

				$("#Lv").css("display","none");
				$("#other").css("display","none");
			});
			
			//点击选择样式按钮进行背景选择
			$("#other").click(function(){
				$(".bgType").show(200);
				$(".btns").hide(200);
			});
			
			//选择背景样式进行游戏背景切换
			$("#lev1").click(function(){
				bgpd=1;
			});
			$("#lev2").click(function(){
				bgpd=2;
			});
			$("#lev3").click(function(){
				bgpd=3;
			});
			
//			直接进入游戏界面
//			var snakegame=new Snake();
//			bgImg.onload=function(){
//				snakegame.start();
//			}
    //点击头像div显示积分
	$("#down").click(function(event) {
$("#user").slideToggle();
});
	
	//点击底部div时 显示功能div
	$(".foot").click(function(){
		$(".prop").slideToggle();
	});
	
	
});
