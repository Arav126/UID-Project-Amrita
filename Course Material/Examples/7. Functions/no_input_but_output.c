/* This program shows user-defined function with
   no arguments but with a return value 
*/

#include<stdio.h>

int getNumber(void); //function declaration

int main(void) {

	int number, counter, flag = 0;

	number = getNumber();

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

	return 0;

}

int getNumber(void) {

	int number;

	printf("Enter a positive integer: ");
	scanf("%d", &number);

	return number;
}
			 
