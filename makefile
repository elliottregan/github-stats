all: run

build:
	docker build -t typescript-tests .

run: build
	docker run --rm -it \
	--name typescript-tests \
	-p 8080:8080 \
	-v `pwd`:/app \
	typescript-tests $(c)

develop:
	make run c="npm run develop"

test:
	make run c="npm run test"

get_user_stats:
	make run c="npm run get-stats $(username)"