#include <stdio.h>

int maximum(int, int, int); //function prototyping also function declaration
                            //argument names not needed

int main() {

	int number1, number2, number3;

	printf("%s", "Enter three integers: ");
	scanf("%d %d %d", &number1, &number2, &number3);

	printf("Maximum of %d, %d and %d is %d.\n", number1, number2, number3, maximum(number1, number2, number3)); //function call as an argument in printf

	return 0;

}

//function definition
int maximum(int num1, int num2, int num3) {

	int max = num1;

	if (num2 > max)
		max = num2;  //single statement so parantheses are optional

	if (num3 > max)
		max = num3;  

	return max;
}
