/* This program shows user-defined function with
   no arguments and no return 
*/

#include<stdio.h>

void checkPrimeNumber(void); //function declaration

int main(void) {

	checkPrimeNumber();
	return 0;

}

void checkPrimeNumber(void) {

	int number, counter, flag = 0;

	printf("Enter a positive integer: ");
	scanf("%d", &number);

	for(counter = 2; counter <= number/2; ++counter) {

		if (number%counter == 0) {
			flag = 1;
			break;
		}
	}

	if (flag == 1)
		printf("%d is not a prime number.\n", number);
	else
		printf("%d is a prime number.\n", number);

}
			 
