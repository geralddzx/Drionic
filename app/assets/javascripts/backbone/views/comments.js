Drionic.Views.Comments = Backbone.View.extend({
	initialize: function(){
		this.collection.fetch()
		this.listenTo(this.collection, "sync add remove", this.render)
	},

	events: {
		"click #submit-comment": "submit",
		"click .remove-comment": "remove",
	},

	render: function(){
		var content = JST["regions/forum"]({comments: this.collection})
		this.$el.html(content)
	},

	submit: function(){
		var content = this.$("#new-comment").val()
		var comment = new Drionic.Models.Comment({content: content})
		var view = this
		comment.save({}, {
			success: function(){
				alert("comment has been saved")
				view.collection.add(comment)
			}
		})
	},

	remove: function(event){
		var id = $(event.target).attr("id")
    	var comment = this.collection.get(id)
    	debugger
    	comment.destroy({
    		success: function(){
    			alert("Comment has been removed.")
    		}
    	})
	},
})