let wr = (msg='--------') => document.write(`<br>${msg}`);

function basicRecursion(max, current) {
  if (current > max) return;
  wr(current);
  basicRecursion(max, current+1);
}

basicRecursion(5,1);
wr();
wr();

wr('**********');
wr();
wr();

function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

for (var i = 1; i <= 20; i++) {
  wr(`${i}. ${fibonacci(i)}`);
}

wr();
wr();


//the output
/*

1
2
3
4
5
--------
--------
**********
--------
--------
1. 1
2. 1
3. 2
4. 3
5. 5
6. 8
7. 13
8. 21
9. 34
10. 55
11. 89
12. 144
13. 233
14. 377
15. 610
16. 987
17. 1597
18. 2584
19. 4181
20. 6765
--------
-------- 

*/