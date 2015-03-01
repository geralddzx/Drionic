drionic = {}
drionic.regions = 6

drionic.initialize = function(){
	[1,2,3,4,5].forEach(function(i){
		var id = "region" + i
		$("#" + id).click(function(){
			$("#content").html(JST["regions/" + id]())
			drionic.selectTab(id)
		})
	})

	$("#forum").click(function(){
		drionic.selectTab("forum")
		var collection = new Drionic.Collections.Comments()
		var view = new Drionic.Views.Comments({collection: collection})
		$("#content").html(view.$el)
	})

	$('#region1').trigger("click")
}

drionic.selectTab = function(id){
	var jEl = $("#" + id)
	$(".tab").removeClass("active")
	jEl.addClass("active")
}

$(document).ready(drionic.initialize)