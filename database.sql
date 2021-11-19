CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (64) NOT NULL,
	"details" VARCHAR (255) NOT NULL,
	"due" DATE,
  "notes" VARCHAR (255),
  "inProgress" BOOLEAN DEFAULT FALSE,
  "isComplete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "tasks" 
	("task", "details", "due", "notes", "inProgress", "isComplete") 
VALUES 
	('Full-Stack To-Do List', 'Weekend homework with full CRUD implementation', '11/22/2021', 'see https://github.com/AllenJoeG/FullStack-ToDoList', true, false);