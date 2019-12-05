.PHONY: build deploy guard-% help install test build

# tasks with double #'s will be displayed in help

help: ## this help text
	@echo 'Available targets'
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# pathing

yarn_path := yarn
node_tsc_path := ./node_modules/.bin/tsc
node_nodemon_path := ./node_modules/.bin/nodemon

# environment
install: ## install all the things
	${yarn_path} install

# testing
test: ## test all the things
	npm run test

nodemon_extensions := ts
nodemon_commands := make test || true

watch: ## watch and run on change
	${node_nodemon_path} -e ${nodemon_extensions} -x '${nodemon_commands}'

# development
build: ## build all the things
	npm run build

# system
guard-%: # ensure required vars are set
	@ if [ "${${*}}" = "" ]; then \
		echo "Variable $* not set. Specify via $*=<value>"; \
		exit 1; \
	fi
