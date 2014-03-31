#
# Cookbook Name:: sharelatex
# Recipe:: default
#
# Copyright 2014, ShareLaTeX
#

for dir in ["compiles", "clsi-cache", "user_files"] do
	directory "/var/lib/sharelatex/#{dir}" do
		user "www-data"
		recursive true
	end
end

sharelatex_app "web-sharelatex" do
	repository "https://github.com/sharelatex/web-sharelatex.git"
	revision   "master"
end

sharelatex_app "document-updater-sharelatex" do
	repository "https://github.com/sharelatex/document-updater-sharelatex.git"
	revision   "master"
end

sharelatex_app "filestore-sharelatex" do
	repository "https://github.com/sharelatex/filestore-sharelatex.git"
	revision   "master"
end

sharelatex_app "track-changes-sharelatex" do
	repository "https://github.com/sharelatex/track-changes-sharelatex.git"
	revision   "master"
end

sharelatex_app "clsi-sharelatex" do
	repository "https://github.com/sharelatex/clsi-sharelatex.git"
	revision   "master"
end

