/* This program shows user-defined function with
   arguments but no return value 
*/

#include<stdio.h>

void checkPrimeNumber(int); //function declaration

int main(void) {

	int num;

	printf("Enter a positive integer: ");
	scanf("%d", &num);

	checkPrimeNumber(num);
	return 0;

}

void checkPrimeNumber(int number) {

	int counter, flag = 0;

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
			 
