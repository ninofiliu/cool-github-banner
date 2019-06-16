#!/bin/bash
# Reads dates from stdin, useless-commits at the specified dates
# Usage: ./dates-to-commits.sh
# Example: cat ./banner | ./banner-to-dates.js 2015-12-27 | ./dates-to-commits.sh

while read DATE
do
    echo -en "A" >> ./WRITEME.txt
    git add ./WRITEME.txt
    git commit --message "(useless commit)" --date $DATE
done