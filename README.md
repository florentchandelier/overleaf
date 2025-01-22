## Community Edition - with community-enabled modules

[Overleaf](https://www.overleaf.com) is an open-source online real-time collaborative LaTeX editor. This repo is meant for self-hosting overleaf (or a local version of it).

A professional version, with free-tier, is available from the original developers at [www.overleaf.com](https://www.overleaf.com), and enterprise support is available at [Overleaf Server Pro](https://www.overleaf.com/for/enterprises).

### Community-enabled Modules and other enhancements
* comments: created by [yu-i-i/overleaf-cep](https://github.com/yu-i-i/overleaf-cep), tracked by community issue [1193](https://github.com/overleaf/overleaf/issues/1193)
* track change: created by [yu-i-i/overleaf-cep](https://github.com/yu-i-i/overleaf-cep), tracked by community issue [1193](https://github.com/overleaf/overleaf/issues/1193)
* build full TexLive base distros (see below) with `make full` from `server-ce/` 

<h2 align="center">
  <br>
  <a href="https://www.overleaf.com"><img src="doc/logo.png" alt="Overleaf" width="300"></a>
</h2>

<h4 align="center">An open-source online real-time collaborative LaTeX editor.</h4>

<p align="center">
  <a href="https://github.com/overleaf/overleaf/wiki">Wiki</a> •
  <a href="https://mailchi.mp/overleaf.com/community-edition-and-server-pro">Mailing List</a> •
  <a href="#authors">Authors</a> •
  <a href="#license">License</a>
</p>

<img src="doc/screenshot.png" alt="A screenshot of a project being edited in Overleaf Community Edition">
<p align="center">
  Figure 1: A screenshot of a project being edited in Overleaf Community Edition.
</p>

## Installation

We have detailed installation instructions in the [Overleaf Toolkit](https://github.com/overleaf/toolkit/).

## Upgrading

If you are upgrading from a previous version of Overleaf, please see the [Release Notes section on the Wiki](https://github.com/overleaf/overleaf/wiki#release-notes) for all of the versions between your current version and the version you are upgrading to.

## Overleaf Docker Images

This repository contains Dockerfiles for building Docker images of Overleaf, both with a lean setup (minimal TeX Live) and a full setup (complete TeX Live distribution). These images are used to deploy Overleaf with varying levels of TeX Live support depending on your needs.

### Dockerfiles
1. **[`Dockerfile-base`](server-ce/Dockerfile-base):**
   - Builds the base image: `sharelatex/sharelatex-ce-base`.
   - This image provides the foundational environment needed for Overleaf with minimal TeX Live tools.

2. **[`Dockerfile`](server-ce/Dockerfile):**
   - Builds the community image: `sharelatex/sharelatex-ce`.
   - This image extends the base image and includes Overleaf's core services and code.
   - This is the primary image **used by the overleaf-toolkit** for deploying Overleaf with a minimal TeX Live setup.

3. **[`Dockerfile-base-full`](server-ce/Dockerfile-base-full):**
   - Builds the full base image: `sharelatex/sharelatex-ce-base-fulltexlive`.
   - This image provides the foundational environment with the full TeX Live distribution preinstalled.

4. **[`Dockerfile`](server-ce/Dockerfile) (with full TeX Live):**
   - Builds the full community image: `sharelatex/sharelatex-ce-fulltexlive`.
   - This image extends the full base image and includes Overleaf's core services and code, with full TeX Live support.
   - This is the image **used by the overleaf-toolkit** for deploying Overleaf with complete TeX Live capabilities.

### Building Images

To build the Docker images, navigate to the `server-ce/` directory and use the provided `Makefile` commands:

#### Lean Setup (Minimal TeX Live):
1. **Build the base image:**
    ```bash
    make build-base
    ```
    Produces: sharelatex/sharelatex-ce-base

2. **Build the community image:**
    ```bash
    make build-community
    ```

    Produces: sharelatex/sharelatex-ce

#### Full Setup (Complete TeX Live):

1. **Build the full base image:**
    ```bash
    make build-base-fulltexlive
    ```

    Produces: sharelatex/sharelatex-ce-base-fulltexlive

2. **Build the full community image:**
    ```bash
    make build-community-fulltexlive
    ```

    Produces: sharelatex/sharelatex-ce-fulltexlive

### Summary of Images

| Image Name                                | Description                                | TeX Live Setup  |
|-------------------------------------------|--------------------------------------------|------------------|
| `sharelatex/sharelatex-ce-base`           | Base image for Overleaf                   | Minimal          |
| `sharelatex/sharelatex-ce`                | Community image with Overleaf services    | Minimal          |
| `sharelatex/sharelatex-ce-base-fulltexlive`| Full base image with complete TeX Live    | Full             |
| `sharelatex/sharelatex-ce-fulltexlive`    | Full community image with Overleaf services and complete TeX Live | Full |


## Original Authors

[The Overleaf Team](https://www.overleaf.com/about)

## License

The code in this repository is released under the GNU AFFERO GENERAL PUBLIC LICENSE, version 3. A copy can be found in the [`LICENSE`](LICENSE) file.

Copyright (c) Overleaf
