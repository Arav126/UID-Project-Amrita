/* This program demonstrates how
   pre-increment and post-increment
   operator works
*/

#include<stdio.h>

int main() {

	int a, b, c = 5, d = 5;

	a = c++;//post-increment use c and then increment
	b = ++d;//pre-increment increment and use d

	//increment operators on numbers will lead to
	//compile error. So never do 5++ or ++5 for example

	printf("Value of a = %d\n", a);
	printf("Value of b = %d\n", b);
	printf("Value of c = %d\n", c);
	printf("Value of d = %d\n", d);	

	return 0;

}
