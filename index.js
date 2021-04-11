// fizzbus
/*Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.*/



for (let i=1;i<=100;i++) console.log(!(i%15)&&"fizzbuzz"||!(i%5)&&"buzz"||!(i%3)&&"fizz"||i);



