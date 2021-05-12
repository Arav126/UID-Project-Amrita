/* This program demonstrates the
   working of conditional operator
*/

#include<stdio.h>

int main() {

	char leap;
	short int  days; //Note since days won't exceed 31
                     //let's be economical in our need

	printf("If leap year enter 1 else enter any number ");
	leap = getchar(); //The number 1 will be read as character

	days = (leap == '1') ? 29 : 28; //if condition true then else

	printf("No. of days in February = %d\n", days);

	return 0;
}
