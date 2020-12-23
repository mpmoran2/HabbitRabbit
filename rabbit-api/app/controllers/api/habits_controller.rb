class Api::HabitsController < ApplicationController
    def create 
		@habit = Habit.new(habit_params)
		if @habit.save
			render json: @habit
		else
			render json: { message: habit.errors }, status: 400
		end
	end

	def index
		@habits = Habit.all
		render json: @habits 
	end

    def show
        @habit = Habit.find_by(:id => params[:id])
		render json: @habit
	end

	def destroy 
		@habit = Habit.find_by(:id => params[:id])
		@habit.destroy
	end

    private

	def habit_params 
		params.require(:habit).permit(:name, :goal, :streak)
	end
end

