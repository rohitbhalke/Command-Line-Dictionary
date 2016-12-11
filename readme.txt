Command Line Dictionary Tool

Create a command line dictionary tool using wordnik (http://wordnik.com) api.
Check Wordnik API here -  http://developer.wordnik.com/docs


Requirements
The command line tool should have following functions -
The output should be nicely formatted on console, and show all relevant information.


1. Word Definitions
	Display definitions of a word.
	./dict def <word>


2. Word Synonyms
	Display synonyms of a word.
	./dict syn <word>
3. Word Antonyms
	Display antonyms of a word
	./dic ant <word>


4. Word Examples
	Display examples of a word
	./dict ex <word>


5. Word Full Dict
	Display all above details for a word
	./dict <word> or ./dict dict <word>


6. Word of the Day Full Dict
	Display all above details of word of the day
	./dict


7. Word Game
	./dict play
	The program should display a definition, synonym, or antonym
	And ask the user to enter the word


	If correct word is entered, program should tell that the word is correct
	* Other(not displayed) Synonyms of the word should be accepted as correct answer.
	If incorrect word is entered, program should ask for
		- 1. try again
			Lets user enter word again


		- 2. hint
			Display a hint, and let user enter word again
			Hint can be
Display the word randomly jumbled (cat -> atc)
OR Display another definition of the word
OR Display another antonym of the word
OR Display another synonym of the word
		-3 quit
			Display the word, its full dict, and quit


#############################################################################

Technology Stack : Node.JS

How To Run
1) The code is written in NodeJS.
2) Pull this repo, and run npm install, this will install all the dependencies required.
3) To run the program type 'node app'.
4) Now type the above mentioned command