/* This program shows user-defined function with
   arguments and return value.
	
   Which approach is better of all 4 possibilities?
   It depends on the problem.

   Here, this approach is better. Bcoz the function
   neither takes input from user nor displays any
   message but just checks whether a number is prime
   or not.

   It is modular, easy to understand and debug.

*/

#include<stdio.h>

int checkPrimeNumber(int); //function declaration

int main(void) {

	int num, flag;

	printf("Enter a positive integer: ");
	scanf("%d", &num);

	flag = checkPrimeNumber(num);

	if (flag == 1)
		printf("%d is not a prime number.\n", num);
	else
		printf("%d is a prime number.\n", num);


	return 0;

}

int checkPrimeNumber(int number) {

	int counter;

	for(counter = 2; counter <= number/2; ++counter) {

		if (number%counter == 0) {
			return 1;
		}
	}

	return 0;

}
			 
