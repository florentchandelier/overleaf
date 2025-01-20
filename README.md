<h1 align="center">
  <br>
  <a href="https://www.overleaf.com"><img src="doc/logo.png" alt="Overleaf" width="300"></a>
</h1>

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

## Community Edition - with community-enabled modules

[Overleaf](https://www.overleaf.com) is an open-source online real-time collaborative LaTeX editor. This repo is meant for self-hosting overleaf (or a local version of it).

A professional version, with free-tier, is available from the original developers at [www.overleaf.com](https://www.overleaf.com), and enterprise support is available at [Overleaf Server Pro](https://www.overleaf.com/for/enterprises).

### Community-enabled Modules and other enhancements
* comments: created by [yu-i-i/overleaf-cep](https://github.com/yu-i-i/overleaf-cep), tracked by community issue [1193](https://github.com/overleaf/overleaf/issues/1193)
* track change: created by [yu-i-i/overleaf-cep](https://github.com/yu-i-i/overleaf-cep), tracked by community issue [1193](https://github.com/overleaf/overleaf/issues/1193)
* build full TexLive base distros (fix version issues and more) with `make full` from from `server-ce/` 

## Installation

We have detailed installation instructions in the [Overleaf Toolkit](https://github.com/overleaf/toolkit/).

## Upgrading

If you are upgrading from a previous version of Overleaf, please see the [Release Notes section on the Wiki](https://github.com/overleaf/overleaf/wiki#release-notes) for all of the versions between your current version and the version you are upgrading to.

## Overleaf Docker Image

This repo contains two dockerfiles, [`Dockerfile-base`](server-ce/Dockerfile-base), which builds the
`sharelatex/sharelatex-base` image, and [`Dockerfile`](server-ce/Dockerfile) which builds the
`sharelatex/sharelatex` (or "community") image.


Use `make build-base` and `make build-community` from `server-ce/` to build these images. The `sharelatex/sharelatex-ce` 
image extends the base image and adds the actual Overleaf code and services. 
The `sharelatex/sharelatex-ce` is the image **used by the overleaf-toolkit**.

    OR

Use `make build-base-fulltexlive` and `make build-community-fulltexlive` to build Overleaf with the full TexLive distro. 
The `sharelatex/sharelatex-ce-full` 
image extends the base image and adds the actual Overleaf code and services. 
The `sharelatex/sharelatex-ce-full` is the image **used by the overleaf-toolkit**.

## Original Authors

[The Overleaf Team](https://www.overleaf.com/about)

## License

The code in this repository is released under the GNU AFFERO GENERAL PUBLIC LICENSE, version 3. A copy can be found in the [`LICENSE`](LICENSE) file.

Copyright (c) Overleaf, 2014-2024.
