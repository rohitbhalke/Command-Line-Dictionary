# Command Line Dictionary Tool

Create a command line dictionary tool using [wordnik](http://wordnik.com) api.
Check [Wordnik DOCS here](http://developer.wordnik.com/docs).


## Requirements
The command line tool should have following functions -
The output should be nicely formatted on console, and show all relevant information.


### Word Definitions
Display definitions of a word.
```
./dict def <word>
```

### Word Synonyms
Display synonyms of a word.
```
./dict syn <word>
```

### Word Antonyms
Display antonyms of a word
```
./dic ant <word>
```

### Word Examples
Display examples of a word
```
./dict ex <word>
```

### Word Full Dict
Display all above details for a word
```
./dict <word>
```
or
``` 
./dict dict <word>
```

### Word of the Day Full Dict
Display all above details of word of the day
```
./dict
```

### Word Game
```
./dict play
```
The program should display a definition, synonym, or antonym and ask the user to enter the word.

If correct word is entered, program should tell that the word is correct 
(Synonyms of the word should also be accepted as correct answer).

If incorrect word is entered, program should ask for
1. try again

	Lets user enter word again
2. hint

	Display a hint, and let user enter word again
	Hint can be
	1. Display the word randomly jumbled (cat -> atc).
	2. Display another definition of the word.
	3. Display another antonym of the word.
	4. Display another synonym of the word.
3. quit

	Display the word, its full dict, and quit

-----------------------------------------------------------------------

## Technology Stack : Node.JS

How To Run
1) The code is written in NodeJS.
2) Pull this repo, and run `npm install`, this will install all the dependencies required.
3) To run the program type `node app`.
4) Now type the any of the aforementioned command.
