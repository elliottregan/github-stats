all: run

build:
	docker build -t github-stats .

run: build
	docker run --rm -it \
	--name github-stats \
	-p 8080:8080 \
	-v `pwd`:/app \
	-v /app/node_modules \
	github-stats $(c)

develop:
	make run c="npm run develop"

test:
	make run c="npm run test"

get_user_stats:
	make run c="npm run get-stats $(username)"