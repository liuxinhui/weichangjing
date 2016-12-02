var nowSlipPage = 0;
function slipEnd(slipObj){
	activaAnim();
	slipObj.end(function() {
		console.log(slipObj)
		if(slipObj.page!=nowSlipPage){
			nowSlipPage = slipObj.page
		}else{
			return;
		}
		var swipe =  $('.swipe')
		var page = this.page
		swipe.children().removeClass('active');
		swipe.children().eq(page).addClass('active');
		var dataObjs = $('*[data-anim="animated"]');
		dataObjs.each(function(i,n){
			var obj = $(n);
			var dataAnim = obj.attr('data-anim')
			var dataType = obj.attr('data-type')
			obj.removeClass(dataAnim);
			obj.removeClass(dataType)					
	    });
	    activaAnim();
	});
}
function activaAnim(){
	var activeDataObjs = $('.active *[data-anim="animated"]')
    activeDataObjs.each(function(i,n){
		var obj = $(n);
		var dataAnim = obj.attr('data-anim')
		var dataType = obj.attr('data-type')
		var dataDelay = obj.attr('data-delay')
		if(dataDelay){
			obj.css('visibility','hidden');
			setTimeout(function(){
				obj.css('visibility','visible');
				obj.addClass(dataAnim);
				obj.addClass(dataType)
			},parseInt(dataDelay));
		}else{
			obj.addClass(dataAnim);
			obj.addClass(dataType);
		}					
   });
}