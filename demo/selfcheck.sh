#!/bin/bash

# change these per each homework
#	link to tests:
testsurl="https://webcourse.cs.technion.ac.il/fc159753hw_236360_201902/hw/WCFiles/hw1-tests.zip"
#	number of tests:
numtests=2
#	command to execute test:
command="./a.out < t\$i.in >& t\$i.res"

hostname="cscomp"
tmpdir="selfcheck_tmp"

if [ $( hostname ) != "$hostname" ]
	then
		echo "This script is only intended to run on "$hostname"!"
		exit
fi

if [ -z "$1" ]
	then
		echo "Usage: ./"$( basename "$0" )" <your submission zip file>"
		exit
fi

if [ ! -f "$1" ]
	then
		echo "Submission zip file not found!"
		exit
fi

rm -rf "$tmpdir" &> /dev/null
if [ -d "$tmpdir" ]
	then
		echo "Cannot clear tmp directory. Please delete '"$tmpdir"' manually and try again"
		exit
fi
mkdir "$tmpdir" &> /dev/null

unzip "$1" -d "$tmpdir" &> /dev/null
if [[ $? != 0 ]] 
	then
		echo "Unable to unzip submission file!"
		exit
fi

cd "$tmpdir"
if [ ! -f hw1.lex ]
	then
		echo "File hw1.lex not found!"
		exit
fi
if [ $( ls -1 | wc -l ) != 1 ]
	then
		echo "Zip file should only contain hw1.lex!"
		exit
fi

flex hw1.lex &> /dev/null
if [[ $? != 0 ]] 
	then
		echo "Cannot build submission!"
		exit
fi
gcc -ll lex.yy.c &> /dev/null
if [[ $? != 0 ]] 
	then
		echo "Cannot build submission!"
		exit
fi
if [ ! -f a.out ]
	then
		echo "Cannot build submission!"
		exit
fi

wget  --no-check-certificate "$testsurl" &> /dev/null -O hw1-tests.zip
if [ ! -f $( basename "$testsurl" ) ]
	then
		echo "Unable to download tests!"
		exit
fi

unzip $( basename "$testsurl" ) &> /dev/null
if [[ $? != 0 ]] 
	then
		echo "Unable to unzip tests!"
		exit
fi

i="1"
while [ $i -le $numtests ]
	do
		eval $command
		diff t$i.res t$i.out &> /dev/null
		if [[ $? != 0 ]] 
			then
				echo "Failed test #"$i"!"
				exit
		fi
		i=$[$i+1]
done

cd - &> /dev/null
rm -rf "$tmpdir"

echo "Ok to submit :)"
exit
