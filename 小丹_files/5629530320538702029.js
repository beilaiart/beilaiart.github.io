$(function(){
	function mainWid(){
		var n,wrapWid;
		n = Math.floor(($(window).width()-100)/371);
		wrapWid = n*371;
		$('.index .m-posts').css({'width':wrapWid,'margin':'0 auto'});
		//$(".index .m-posts").masonry();
		$(".index .m-posts").imagesLoaded(function(){$(this).masonry();});	
	}
	
	function reOrder(){
		var _totalLen = 0;
		var _totalLen2 = 0;
		
		$('.listc li').each(function(n){
			_totalLen = _totalLen + $(this).width() + 40;
			_totalLen2 = _totalLen + $(this).next().width();
			
			if(_totalLen2 < 560){
				$(this).next().css('left',_totalLen);
			}else{
				_totalLen = -15 + _totalLen;
				var itmNode= $(this).nextAll().detach();
				$('.moreList').append(itmNode);
				if($('.moreList li').length > 1){
					$('.moreList').css('left',_totalLen);
					$('.more').show().siblings().hide();
					$('.moreList').mouseover(function(){
						$(this).find('.more').siblings().show();
					});
					$('.moreList').mouseout(function(){
						$(this).find('.more').siblings().hide();
					});
				}
				return false;
			}
		})
	}	

	reOrder();
	mainWid();
	$(window).resize(mainWid);
})