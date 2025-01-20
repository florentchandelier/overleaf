# Makefile

MONOREPO_ROOT := ../
export MONOREPO_REVISION := $(shell git rev-parse HEAD)
export BRANCH_NAME ?= $(shell git rev-parse --abbrev-ref HEAD)
export OVERLEAF_BASE_BRANCH ?= sharelatex/sharelatex-base:$(BRANCH_NAME)
export OVERLEAF_BASE_LATEST ?= sharelatex/sharelatex-base
export OVERLEAF_BASE_TAG ?= sharelatex/sharelatex-base:$(BRANCH_NAME)-$(MONOREPO_REVISION)
export OVERLEAF_BASE_FULL_BRANCH ?= sharelatex/sharelatex-base-fulltexlive:$(BRANCH_NAME)
export OVERLEAF_BASE_FULL_LATEST ?= sharelatex/sharelatex-base-fulltexlive
export OVERLEAF_BASE_FULL_TAG ?= sharelatex/sharelatex-base-fulltexlive:$(BRANCH_NAME)-$(MONOREPO_REVISION)
export OVERLEAF_BRANCH ?= sharelatex/sharelatex-ce:$(BRANCH_NAME)
export OVERLEAF_LATEST ?= sharelatex/sharelatex-ce
export OVERLEAF_TAG ?= sharelatex/sharelatex-ce:$(BRANCH_NAME)-$(MONOREPO_REVISION)
export OVERLEAF_FULL_BRANCH ?= sharelatex/sharelatex-ce-full:$(BRANCH_NAME)
export OVERLEAF_FULL_LATEST ?= sharelatex/sharelatex-ce-full
export OVERLEAF_FULL_TAG ?= sharelatex/sharelatex-ce-full:$(BRANCH_NAME)-$(MONOREPO_REVISION)

all: build-base build-community

full: build-base build-base-fulltexlive build-community-fulltexlive

build-base:
	cp .dockerignore $(MONOREPO_ROOT)
	docker build \
	  --build-arg BUILDKIT_INLINE_CACHE=1 \
	  --progress=plain \
	  --file Dockerfile-base \
	  --pull \
	  --cache-from $(OVERLEAF_BASE_LATEST) \
	  --cache-from $(OVERLEAF_BASE_BRANCH) \
	  --tag $(OVERLEAF_BASE_TAG) \
	  --tag $(OVERLEAF_BASE_BRANCH) \
	  $(MONOREPO_ROOT)
	  
build-base-fulltexlive:
	cp .dockerignore $(MONOREPO_ROOT)
	docker build \
	  --build-arg BUILDKIT_INLINE_CACHE=1 \
	  --progress=plain \
	  --file Dockerfile-base-full \
	  --pull \
	  --cache-from $(OVERLEAF_BASE_FULL_LATEST) \
	  --cache-from $(OVERLEAF_BASE_FULL_BRANCH) \
	  --tag $(OVERLEAF_BASE_FULL_TAG) \
	  --tag $(OVERLEAF_BASE_FULL_BRANCH) \
	  $(MONOREPO_ROOT)

build-community:
	cp .dockerignore $(MONOREPO_ROOT)
	docker build \
	  --build-arg "OVERLEAF_BASE_TAG=$(OVERLEAF_LATEST)" \
	  --build-arg BUILDKIT_INLINE_CACHE=1 \
	  --progress=plain \
	  --build-arg OVERLEAF_BASE_TAG \
	  --build-arg MONOREPO_REVISION \
	  --cache-from $(OVERLEAFLATEST) \
	  --cache-from $(OVERLEAF_BRANCH) \
	  --file Dockerfile \
	  --tag $(OVERLEAF_TAG) \
	  --tag $(OVERLEAF_BRANCH) \
	  $(MONOREPO_ROOT)
	  
build-community-fulltexlive:
	cp .dockerignore $(MONOREPO_ROOT)
	docker build \
	  --build-arg "OVERLEAF_BASE_TAG=$(OVERLEAF_FULL_LATEST):overleaf-ce" \
	  --build-arg BUILDKIT_INLINE_CACHE=1 \
	  --progress=plain \
	  --build-arg MONOREPO_REVISION \
	  --file Dockerfile \
	  --tag $(OVERLEAF_FULL_TAG) \
	  --tag $(OVERLEAF_FULL_BRANCH) \
	  $(MONOREPO_ROOT)


.PHONY: all full build-base build-base-fulltexlive build-community build-community-fulltexlive
