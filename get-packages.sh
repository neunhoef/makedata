#!/bin/bash
# use script like this
# $USER=obi ext=rpm ./get-packages

set -u

ferr() {
    echo "$*"
    exit 1
}

##please modify this variables
user="${user:-$USER}"
server="${server:-c9}"
destination="${destination:-$HOME/release-test-packages}"
os="${os:-Linux}" #Linux, MacOSX or Windows
ext="${ext:-deb}"
version="${version:-3.6.0-1}"
old_version="${old_version:-3.5.3-1}"

if [[ $os == "MacOSX" ]]; then
    ext="dmg"
    echo "not implemented"
    exit 1
elif [[ $os == "Windows" ]]; then
    ext="exe"
    echo "not implemented"
    exit 1
fi

mkdir -p $destination || ferr "could not create folder ${destination}"
#ssh $user@$server ls -lisah /mnt/buildfiles/stage2/${version:0:3}/packages/Community/$os/arangodb*

for edition in Enterprise Community; do
    suffix=""
    if [[ $edition == "Enterpise" ]]; then
        suffix="e"
    fi

    for ver in $version $old_version; do
        echo "using command $user@$server:/mnt/buildfiles/stage2/${ver:0:3}/packages/$edition/$os/arangodb${suffix}"*"$ver"*"$ext" "$destination"
        scp "$user@$server:/mnt/buildfiles/stage2/${ver:0:3}/packages/$edition/$os/arangodb${suffix}"*"$ver"*"$ext" "$destination" || ferr "command failed"
    done
done
