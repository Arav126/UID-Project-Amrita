/* This function demonstrates the role of function prototyping.
   If the functions defined appear before main() then function
   prototyping is not needed!!

   Or in general if a function definition preceeds its usage
   function prototyping or declaration is not needed.

   delay() is used in dropBomb() and the latter is used in main()
   so if delay() is defined first, followed by dropBomb() both
   before main(), then function declaration is not needed.
*/

#include<stdio.h>

void delay(void) { //function to slow down the bombing

	long int count;

	for(count = 100000000; count > 1; count--); //for loop with no body!!!!!
						    //notice the semicolon
}

void dropBomb() { //see void in input to show dropBomb takes no input

	int count; //same variable name without conflict!!!

	for(count = 20; count > 1; count--) { 
		puts("          *");
		delay(); //delay function called here     
	}

	puts("          KABOOM");

	//no return since function does not return anything
}

int main(void) {     //ideally main should have void too if you
                     //do not want main to take inputs

	printf("Press Enter to drop the bomb!");
	getchar();  //makes the program await user input
	dropBomb(); //dropBomb function called here
	printf("Yikes!!\n");
	
	return 0;
}
