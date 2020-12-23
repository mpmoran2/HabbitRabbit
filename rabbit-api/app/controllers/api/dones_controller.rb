class Api::DonesController < ApplicationController
    before_action :set_habit

	
	def create 
		@done = @habit.dones.new(done_params)
		if @habit.update_streak(@done) != 'There is no Streak going'
			@done.save
			render json: @done
		else
			render json: {error: 'There is no Streak going'}
		end
	end
	
	def index
		@dones = @habit.dones
		render json: @dones
	end
	
	def show
        @done = @habit.dones.find_by(:id => params[:id])
		render json: @done
	end

	# def destroy 
	# 	@done = @habit.dones.find_by(:id => params[:id])
	# 	@done.destroy
	# end

	private

	def set_habit
		@habit = Habit.find_by(params[:habit_id])
	end

	def done_params 
		params.require(:done).permit(:completed, :do_nodo)
	end
end
