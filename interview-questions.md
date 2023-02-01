# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I believe you can rename the columns with rename_column, and then migrate to update the database.

Researched answer: If you forget a foreign key, you can rename the column using rename_column, or add a column with add_column. Then you can run a db:migrate to update the database.

2. Which RESTful routes must always be passed params? Why?

Your answer: I believe show, edit, and update must always be passed params, because you are accessing a specific url.

Researched answer: Destroy, show, edit, and update must always be passed params, because you are accessing a specific url.

3. Name three rails generator commands. What is created by each?

Your answer: rails generate model will create a class with data inputs as the columns for our database. rails generate migration will create a new file to migrate. Stumped on a third generate command.

Researched answer: rails generate model will create a class with data inputs as the columns for our database. rails generate migration will create a new file to migrate, this will update the schema. You can also use a rails generate controller command to setup a controller and create a a directory in your app.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

#index is the method, and it would display all students

action: "POST" location: /students

#create is the controller method, and this will create a new student.

action: "GET" location: /students/new

#new is the controller method, and this will create a form to create a new student

action: "GET" location: /students/2

#show is the method, and this will display a specific student. 

action: "GET" location: /students/2/edit

#edit is the method, and this will display a form to update data for an existing student.

action: "PATCH" location: /students/2

#update is the method, and this will do the actual updating of the student.

action: "DELETE" location: /students/2

#destroy is the method, and this will delete a specific student.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


As a user, I can fill out a form to add a task
As a user, I can create that task and have it be displayed
As a user, I can see all tasks that I've created on a landing page
As a user, I can see an edit button to edit tasks
As a user, I can delete existing tasks
As a user, I can navigate from task to task
As a user, I can sort tasks by start date
As a user, I can prevent empty entries into task forms
As a user, the page is simple, and styled nicely.
As a user, I can search for a specific task.



