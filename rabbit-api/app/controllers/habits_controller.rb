class HabitsController < ApplicationController
	#C
    def create 
		@habit = Habit.new(habit_params)
		if @habit.save
			render json: @habit
		else
			render json: { message: habit.errors }
		end
	end

	#R
	def index
		render json: Habit.all
	end

    def show
        render json: Habit.find(params[:id])
	end

	#U

	#D
	def destroy 
		Habit.find_by(:id => params[:id]).destroy
	end

    private

	def habit_params 
		params.require(:habit).permit(:name, :goal, :streak)
	end
end

