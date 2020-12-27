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
		habits = Habit.all
		render json: habits.to_json(except: [:updated_at, :created_at])
	end

    def show
        render json: Habit.find(params[:id])
	end
	
	#U
	def update 
		@habit = Habit.find(params[:id])
		@habit.update(name: params["habits"]["name"])
		@habit.save
		render json: @habit
	end 
	
	#D
	def destroy 
		Habit.find_by(:id => params[:id]).destroy
	end
	
	private
	
	def habit_params 
		params.require(:habit).permit(:name, :goal, :start_day)
	end
end