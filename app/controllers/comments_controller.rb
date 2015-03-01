class CommentsController < ApplicationController
	def index
		@comments = Comment.all
		render :index 
	end

	def create
		@comment = Comment.new(comment_params)
		@comment.save
		render :show
	end

	def destroy
		@comment = Comment.find(params[:id])
		@comment.destroy
		render :show
	end

	def comment_params
		params.require(:comment).permit(:content)
	end
end
