# filediff
A simple file diff function that prints differences between two files

Uses the [node-readlines](https://github.com/nacholibre/node-readlines) package to read from file.

## Explanation

Reads the file line by line, converting each line to a object dictionary to enable fast lookup.
After the files are read, iterates through each set of keys to lookup whether the line is present in the other file.


## Usage

Clone the repository.

Then  npm install.

node index.js file1.txt file2.txt


## Sample Input

### File1

abc

def

ghi 

### File2

def

jkl

mno


### Program output —
Common — def

File1 - File2 — abc, ghi

File2 - File1 - jkl, mno
