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

# Build array from version string.

a=( "v0.0" )
major_version=0
# Check for v in version (e.g. v1.0 not just 1.0)
v="${BASH_REMATCH[1]}"
major_version=${BASH_REMATCH[2]}
((major_version++))
a[0]=${v}${major_version}


echo "${a[0]}"
version=$(echo "${a[0]}")
just_numbers=$(echo "${major_version}")
echo "::set-output name=version::${version}"
echo "::set-output name=stripped-version::${just_numbers}"
