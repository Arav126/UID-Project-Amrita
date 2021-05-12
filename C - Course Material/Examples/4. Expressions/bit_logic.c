/* This program demonstrates logical and
   bitwise operators
*/

#include<stdio.h>

int main() {

	int a = 12, b = 25, c = 35; //notice multiple declaration
                            //cum initialization

	printf("%d AND %d                = %d\n", a, b, a&&b);
	printf("%d bitwise-AND %d        = %d\n", a, b, a&b);
	printf("\n");

	printf("%d OR %d                 = %d\n", a, b, a||b);
	printf("%d bitwise-OR %d         = %d\n", a, b, a|b);
	printf("\n");

	printf("%d bitwise-XOR %d        = %d\n", a, b, a^b);
	printf("\n");

	printf("Not %d                   = %d\n", c, !c);
	printf("Bitwise Complement of %d = %d\n", c, ~c);
	printf("\n");

	//Note that right-shifts is equivalent to division
	printf("Right-shifts of %d       = %d, %d, %d, ...\n", a, a>>0, a>>1, a>>2);
	printf("\n");

	//and left-shits is equivalent to multiplication
	printf("Left-shifts of %d        = %d, %d, %d, ...\n", a, a<<0, a<<1, a<<2); 

	return 0;

}
