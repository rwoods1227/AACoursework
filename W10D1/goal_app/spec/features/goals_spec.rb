require 'spec_helper'
require 'rails_helper'

feature "create a goal" do 
    scenario "Has a new goal page" do 
        visit new_goal_url
        expect(page).to have_content "New Goal"
    end

    scenario "Shows the new goal after creation" do 
        make_goal
        expect(page).to have_content "sometitle"
    end

end

feature "Reading a goal" do 
    scenario "Shows all goals" do 
        make_more_goals
        visit goals_url
        expect(page).to have_content "sometitle"
        expect(page).to have_content "sometitle2"
    end
end

feature "Updating a goal" do 

    scenario "Has an update page" do 
        goal = Goal.first 
        visit edit_goal_url(goal)
        expect(page).to have_content "Edit goal"
    end

    scenario "Updates a goal" do 
        goal = Goal.first 
        visit edit_goal_url(goal)
        old_title = goal.title 
        fill_in "title", with: "new title"
        click_on "Update goal"
        expect(page).to have_content "new title"
    end
end

feature "Deleting a goal" do 
    scenario "Deletes a goal" do 
        visit goals_url
        goal = Goal.first 
        old_title = goal.title
        click_on "delete #{goal.title}"
        expect(page).not_to have_content "#{old_title}"
    end
end

