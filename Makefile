build:
	docker build -t test-task .
run:
	docker run -d -p 3000:4000 --rm --name test-task test-task
stop:
	docker stop test-task