#!/bin/bash

# Increment a version string using Semantic Versioning (SemVer) terminology.

# Parse command line options.

while getopts ":Mmp" Option
do
  case $Option in
    M ) major=true;;
    m ) minor=true;;
    p ) patch=true;;
  esac
done

shift $(($OPTIND - 1))

#version="0.0.0"
echo "cd to github workspace"
git config --global --add safe.directory /github/workspace
echo ${GITHUB_WORKSPACE}
echo $(git for-each-ref refs/tags/ --count=1 --sort=-version:refname --format='%(refname:short)')
cd ./.github/actions
git for-each-ref refs/tags/ --count=1 --sort=-version:refname --format='%(refname:short)'

version=$(git for-each-ref refs/tags/ --count=1 --sort=-version:refname --format='%(refname:short)')
echo "Version: ${version}"


# Build array from version string.

a=( ${version//./ } )

# If version string is missing or has the wrong number of members, show usage message.

if [ ${#a[@]} -ne 3 ]
then
  echo "usage: $(basename $0) [-Mmp] major.minor.patch"
  exit 1
fi

# Increment version numbers as requested.

if [ ! -z $major ]
then
  ((a[0]++))
  a[1]=0
  a[2]=0
fi

if [ ! -z $minor ]
then
  ((a[1]++))
  a[2]=0
fi

if [ ! -z $patch ]
then
  ((a[2]++))
fi

echo "${a[0]}.${a[1]}.${a[2]}"
version=$(echo "${a[0]}.${a[1]}.${a[2]}")
just_numbers=$(echo "${major_version}.${a[1]}.${a[2]}")
echo "::set-output name=version::${version}"
echo "::set-output name=stripped-version::${just_numbers}"
