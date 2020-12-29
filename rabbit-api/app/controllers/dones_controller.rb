class DonesController < ApplicationController
    before_action :set_habit
	
	#C
	def create 
		@done = @habit.dones.new(done_params)		
		if @habit.update_streak(@done) 
			@done.save
			render json: @habit
		else
			render json: {error: 'Cannot Save Carrot'}
		end
	end
	
	#R
	def index
		@dones = Done.all
		render json: @dones#.to_json(except: [:updated_at, :created_at])
	end
	
	def show
        @done = @habit.dones.find_by(:id => params[:id])
		render json: @done
	end
	
	#D
	def destroy 
		@done = Done.find_by(:id => params[:id])
		@habit = Habit.find(@done.habit_id)

		if @habit.update_streak_on_delete(@done)
			@done.destroy
			render json: @habit
		else
			render json: {error: "No Streaks"}
		end 
	end

	private

	def set_habit
		@habit = Habit.find(params[:habit_id])
	end

	def done_params 
		params.require(:done).permit(:completed, :do_nodo)
	end
end
