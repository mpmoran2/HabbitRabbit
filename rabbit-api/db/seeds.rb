# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Habit.create(name: 'Daily Walk', goal: '31 days', start_day: 2020-12-21, streak: 1)
Habit.create(name: '30min Journaling', goal: '18 days', start_day: 2020-12-01, completed: 2020-12-20)

Done.create(completed: 2020-12-21, do_nodo: 'Done', habit_id: 1)