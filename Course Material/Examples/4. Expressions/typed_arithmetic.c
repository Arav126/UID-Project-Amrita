/* This program shows the implication of
   data types on arithmetic expressions.
*/

#include<stdio.h>

int main() {

	int integer;
	float floating;

	printf("1/2       = %d", 1/2);
	printf("\n1.0/2.0   = %f", 1.0/2.0); //atleast one operand should
	printf("\n1/2.0     = %f", 1/2.0);   //be float to get the result
	printf("\n1.0/2     = %f", 1.0/2);   //of float type
	printf("\n");

	floating = 3.0/2.0;
	//When float is assigned to int information loss happens
	integer = floating; 
	printf("3.0/2.0   = %f, when result assigned to integer becomes %d\n", floating, integer);

	return 0;
}
