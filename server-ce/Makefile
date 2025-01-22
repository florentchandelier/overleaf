# Makefile for building Overleaf with texlive lean and full releases

MONOREPO_ROOT := ../
# Revision must be >5.0.0 for overleaf-toolkit to operate.
export MONOREPO_REVISION := 6.0.0
export OVERLEAF_BASE_LATEST ?= sharelatex/sharelatex-ce-base:latest
export OVERLEAF_BASE_FULL_LATEST ?= sharelatex/sharelatex-ce-base-fulltexlive:latest
export OVERLEAF_LATEST ?= overleaf/overleaf-ce:latest
export OVERLEAF_REV ?= overleaf/overleaf-ce:$(MONOREPO_REVISION)
export OVERLEAF_FULL_LATEST ?= overleaf/overleaf-ce-fulltexlive:latest
export OVERLEAF_FULL_REV ?= overleaf/overleaf-ce-fulltexlive:$(MONOREPO_REVISION)

# Allow optional no-cache builds
NO_CACHE ?= false
CACHE_OPTION := $(if $(filter true,$(NO_CACHE)),--no-cache,)

# Default target
.PHONY: help
help:
	@echo "Makefile for building Overleaf releases"
	@echo
	@echo "Available targets:"
	@echo "  lean                     Build the lean release (base + community)"
	@echo "  full                     Build the full release (base-fulltexlive + community-fulltexlive)"
	@echo "  build-base               Build the base image for lean release"
	@echo "  build-base-fulltexlive   Build the base image for full release with full texlive"
	@echo "  build-community          Build the community image for lean release"
	@echo "  build-community-fulltexlive Build the community image for full release"
	@echo "  help                     Display this help message"
	@echo
	@echo "Optional environment variables:"
	@echo "  NO_CACHE=true            Force rebuild of all Docker layers (disable cache)"
	@echo

# Build the lean release
.PHONY: lean
lean: build-base build-community

# Build the full release
.PHONY: full
full: build-base build-base-fulltexlive build-community-fulltexlive

# Build the base image for lean release
.PHONY: build-base
build-base:
	cp .dockerignore $(MONOREPO_ROOT)
	docker build $(CACHE_OPTION) \
	  --build-arg BUILDKIT_INLINE_CACHE=1 \
	  --progress=plain \
	  --file Dockerfile-base \
	  --tag $(OVERLEAF_BASE_LATEST) \
	  $(MONOREPO_ROOT)

# Build the base image for full release with full texlive
.PHONY: build-base-fulltexlive
build-base-fulltexlive:
	cp .dockerignore $(MONOREPO_ROOT)
	docker build $(CACHE_OPTION) \
	  --build-arg "OVERLEAF_BASE_TAG=$(OVERLEAF_BASE_LATEST)" \
	  --build-arg TLMGR_UPGRADE_MODE=no-upgrade \
	  --build-arg BUILDKIT_INLINE_CACHE=1 \
	  --progress=plain \
	  --file Dockerfile-base-full \
	  --tag $(OVERLEAF_BASE_FULL_LATEST) \
	  $(MONOREPO_ROOT)

# Build the community image for lean release
.PHONY: build-community
build-community:
	cp .dockerignore $(MONOREPO_ROOT)
	docker build $(CACHE_OPTION) \
	  --build-arg "OVERLEAF_BASE_TAG=$(OVERLEAF_BASE_LATEST)" \
	  --build-arg BUILDKIT_INLINE_CACHE=1 \
	  --progress=plain \
	  --build-arg OVERLEAF_BASE_TAG \
	  --build-arg MONOREPO_REVISION \
	  --file Dockerfile \
	  --tag $(OVERLEAF_REV) \
	  $(MONOREPO_ROOT)

# Build the community image for full release
.PHONY: build-community-fulltexlive
build-community-fulltexlive:
	cp .dockerignore $(MONOREPO_ROOT)
	docker build $(CACHE_OPTION) \
	  --build-arg "OVERLEAF_BASE_TAG=$(OVERLEAF_BASE_FULL_LATEST)" \
	  --build-arg BUILDKIT_INLINE_CACHE=1 \
	  --progress=plain \
	  --build-arg MONOREPO_REVISION \
	  --file Dockerfile \
	  --tag $(OVERLEAF_FULL_REV) \
	  $(MONOREPO_ROOT)

