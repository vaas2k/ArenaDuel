const  problems = [
  {
    "id": 1,
    "title": "Weird Algorithm",
    "statement": "Consider an algorithm that takes as input a positive integer n. If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this until n becomes one. For example, the sequence for n=3 is as follows: 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1. Your task is to simulate the execution of the algorithm for a given value of n.",
    "input": "The only input line contains an integer n.",
    "output": "Print a line that contains all values of n during the algorithm.",
    "constraints": "1 <= n <= 10^6",
    "testCases": [
      "3",
      "3 10 5 16 8 4 2 1"
    ]
  },
  {
    "id": 2,
    "title": "Missing Number",
    "statement": "You are given all numbers between 1,2,...,n except one. Your task is to find the missing number.",
    "input": "The first input line contains an integer n. The second line contains n-1 numbers. Each number is distinct and between 1 and n (inclusive).",
    "output": "Print the missing number.",
    "constraints": "2 <= n <= 2 * 10^5",
    "testCases": [
      "5\n2 3 1 5",
      "4"
    ]
  },
  {
    "id": 3,
    "title": "Repetitions",
    "statement": "You are given a DNA sequence: a string consisting of characters A, C, G, and T. Your task is to find the longest repetition in the sequence. This is a maximum-length substring containing only one type of character.",
    "input": "The only input line contains a string of n characters.",
    "output": "Print one integer: the length of the longest repetition.",
    "constraints": "1 <= n <= 10^6",
    "testCases": [
      "ATTCGGGA",
      "3"
    ]
  },
  {
    "id": 4,
    "title": "Increasing Array",
    "statement": "You are given an array of n integers. You want to modify the array so that it is increasing, i.e., every element is at least as large as the previous element. On each move, you may increase the value of any element by one. What is the minimum number of moves required?",
    "input": "The first input line contains an integer n: the size of the array. Then, the second line contains n integers x_1,x_2,...,x_n: the contents of the array.",
    "output": "Print the minimum number of moves.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= x_i <= 10^9",
    "testCases": [
      "5\n3 2 5 1 7",
      "5"
    ]
  },
  {
    "id": 5,
    "title": "Permutations",
    "statement": "A permutation of integers 1,2,...,n is called beautiful if there are no adjacent elements whose difference is 1. Given n, construct a beautiful permutation if such a permutation exists.",
    "input": "The only input line contains an integer n.",
    "output": "Print a beautiful permutation of integers 1,2,...,n. If there are several solutions, you may print any of them. If there are no solutions, print \"NO SOLUTION\".",
    "constraints": "1 <= n <= 10^6",
    "testCases": [
      "5",
      "4 2 5 3 1",
      "3",
      "NO SOLUTION"
    ]
  },
  {
    "id": 6,
    "title": "Number Spiral",
    "statement": "A number spiral is an infinite grid whose upper-left square has number 1. Here are the first five layers of the spiral. The first input line contains an integer t: the number of tests. After this, there are t lines, each containing integers y and x. For each test, print the number in row y and column x.",
    "input": "The first input line contains an integer t: the number of tests. After this, there are t lines, each containing integers y and x.",
    "output": "For each test, print the number in row y and column x.",
    "constraints": "1 <= t <= 10^5, 1 <= y,x <= 10^9",
    "testCases": [
      "3\n2 3\n1 1\n4 2",
      "8\n1\n15"
    ]
  },
  {
    "id": 7,
    "title": "Two Knights",
    "statement": "Your task is to count for k=1,2,...,n the number of ways two knights can be placed on a k x k chessboard so that they do not attack each other.",
    "input": "The only input line contains an integer n.",
    "output": "Print n integers: the results.",
    "constraints": "1 <= n <= 10000",
    "testCases": [
      "8",
      "0\n6\n28\n96\n252\n550\n1056\n1848"
    ]
  },
  {
    "id": 8,
    "title": "Two Sets",
    "statement": "Your task is to divide the numbers 1,2,...,n into two sets of equal sum.",
    "input": "The only input line contains an integer n.",
    "output": "Print \"YES\", if the division is possible, and \"NO\" otherwise. After this, if the division is possible, print an example of how to create the sets. First, print the number of elements in the first set followed by the elements themselves in a separate line, and then, print the second set in a similar way.",
    "constraints": "1 <= n <= 10^6",
    "testCases": [
      "7",
      "YES\n4\n1 2 4 7\n3\n3 5 6",
      "6",
      "NO"
    ]
  },
  {
    "id": 9,
    "title": "Bit Strings",
    "statement": "Your task is to calculate the number of bit strings of length n.",
    "input": "The only input line has an integer n.",
    "output": "Print the result modulo 10^9+7.",
    "constraints": "1 <= n <= 10^6",
    "testCases": [
      "3",
      "8"
    ]
  },
  {
    "id": 10,
    "title": "Trailing Zeros",
    "statement": "Your task is to calculate the number of trailing zeros in the factorial n!. For example, 20!=2432902008176640000 and it has 4 trailing zeros.",
    "input": "The only input line has an integer n.",
    "output": "Print the number of trailing zeros in n!.",
    "constraints": "1 <= n <= 10^9",
    "testCases": [
      "20",
      "4"
    ]
  },
  {
    "id": 11,
    "title": "Coin Piles",
    "statement": "You have two coin piles containing a and b coins. On each move, you can either remove one coin from the left pile and two coins from the right pile, or two coins from the left pile and one coin from the right pile. Your task is to efficiently find out if you can empty both the piles.",
    "input": "The first input line has an integer t: the number of tests. After this, there are t lines, each of which has two integers a and b: the numbers of coins in the piles.",
    "output": "For each test, print \"YES\" if you can empty the piles and \"NO\" otherwise.",
    "constraints": "1 <= t <= 10^5, 0 <= a, b <= 10^9",
    "testCases": [
      "3\n2 1\n2 2\n3 3",
      "YES\nNO\nYES"
    ]
  },
  {
    "id": 12,
    "title": "Palindrome Reorder",
    "statement": "Given a string, your task is to reorder its letters in such a way that it becomes a palindrome (i.e., it reads the same forwards and backwards).",
    "input": "The only input line has a string of length n consisting of characters A–Z.",
    "output": "Print a palindrome consisting of the characters of the original string. You may print any valid solution. If there are no solutions, print \"NO SOLUTION\".",
    "constraints": "1 <= n <= 10^6",
    "testCases": [
      "AAAACACBA",
      "AACABACAA"
    ]
  },
  {
    "id": 13,
    "title": "Gray Code",
    "statement": "A Gray code is a list of all 2^n bit strings of length n, where any two successive strings differ in exactly one bit (i.e., their Hamming distance is one). Your task is to create a Gray code for a given length n.",
    "input": "The only input line has an integer n.",
    "output": "Print 2^n lines that describe the Gray code. You can print any valid solution.",
    "constraints": "1 <= n <= 16",
    "testCases": [
      "2",
      "00\n01\n11\n10"
    ]
  },
  {
    "id": 14,
    "title": "Tower of Hanoi",
    "statement": "The Tower of Hanoi game consists of three stacks (left, middle and right) and n round disks of different sizes. Initially, the left stack has all the disks, in increasing order of size from top to bottom. The goal is to move all the disks to the right stack using the middle stack. On each move you can move the uppermost disk from a stack to another stack. In addition, it is not allowed to place a larger disk on a smaller disk. Your task is to find a solution that minimizes the number of moves.",
    "input": "The only input line has an integer n: the number of disks.",
    "output": "First print an integer k: the minimum number of moves. After this, print k lines that describe the moves. Each line has two integers a and b: you move a disk from stack a to stack b.",
    "constraints": "1 <= n <= 16",
    "testCases": [
      "2",
      "3\n1 2\n1 3\n2 3"
    ]
  },
  {
    "id": 15,
    "title": "Creating Strings",
    "statement": "Given a string, your task is to generate all different strings that can be created using its characters.",
    "input": "The only input line has a string of length n. Each character is between a–z.",
    "output": "First print an integer k: the number of strings. Then print k lines: the strings in alphabetical order.",
    "constraints": "1 <= n <= 8",
    "testCases": [
      "aabac",
      "20\naaabc\naaacb\naabac\naabca\naacab\naacba\nabaac\nabaca\nabcaa\nacaab\nacaba\nacbaa\nbaaac\nbaaca\nbacaa\nbcaaa\ncaaab\ncaaba\ncabaa\ncbaaa"
    ]
  },
  {
    "id": 16,
    "title": "Apple Division",
    "statement": "There are n apples with known weights. Your task is to divide the apples into two groups so that the difference between the weights of the groups is minimal.",
    "input": "The first input line has an integer n: the number of apples. The next line has n integers p_1,p_2,\\dots,p_n: the weight of each apple.",
    "output": "Print one integer: the minimum difference between the weights of the groups.",
    "constraints": "1 <= n <= 20, 1 <= p_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5\n3 2 7 4 1",
      "1"
    ]
  },
  {
    "id": 17,
    "title": "Chessboard and Queens",
    "statement": "Your task is to place eight queens on a chessboard so that no two queens are attacking each other. As an additional challenge, each square is either free or reserved, and you can only place queens on the free squares. However, the reserved squares do not prevent queens from attacking each other.",
    "input": "The input has eight lines, and each of them has eight characters. Each square is either free (.) or reserved (*).",
    "output": "Print one integer: the number of ways you can place the queens.",
    "constraints": "Time limit: 1.00 s, Memory limit: 512 MB",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "........\n........\n..*.....\n........\n........\n.....**.\n...*....\n........",
      "65"
    ]
  },
  {
    "id": 18,
    "title": "Digit Queries",
    "statement": "Consider an infinite string that consists of all positive integers in increasing order. Your task is to process q queries of the form: what is the digit at position k in the string?",
    "input": "The first input line has an integer q: the number of queries. After this, there are q lines that describe the queries. Each line has an integer k: a 1-indexed position in the string.",
    "output": "For each query, print the corresponding digit.",
    "constraints": "1 <= q <= 1000, 1 <= k <= 10^{18}",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "3\n7\n19\n12",
      "7\n4\n1"
    ]
  },
  {
    "id": 19,
    "title": "Grid Paths",
    "statement": "There are 88418 paths in a 7x7 grid from the upper-left square to the lower-left square. Each path corresponds to a 48-character description consisting of characters D (down), U (up), L (left) and R (right). You are given a description of a path which may also contain characters ? (any direction). Your task is to calculate the number of paths that match the description.",
    "input": "The only input line has a 48-character string of characters ?, D, U, L and R.",
    "output": "Print one integer: the total number of paths.",
    "constraints": "Time limit: 1.00 s, Memory limit: 512 MB",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "??????R??????U??????????????????????????LD????D?",
      "201"
    ]
  },
  {
    "id": 20,
    "title": "Distinct Numbers",
    "statement": "You are given a list of n integers, and your task is to calculate the number of distinct values in the list.",
    "input": "The first input line has an integer n: the number of values. The second line has n integers x_1,x_2,\\dots,x_n.",
    "output": "Print one integer: the number of distinct values.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= x_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5\n2 3 2 2 3",
      "2"
    ]
  },
  {
    "id": 21,
    "title": "Apartments",
    "statement": "There are n applicants and m free apartments. Your task is to distribute the apartments so that as many applicants as possible will get an apartment. Each applicant has a desired apartment size, and they will accept any apartment whose size is close enough to the desired size.",
    "input": "The first input line has three integers n, m, and k: the number of applicants, the number of apartments, and the maximum allowed difference. The next line contains n integers a_1, a_2, \\ldots, a_n: the desired apartment size of each applicant. If the desired size of an applicant is x, he or she will accept any apartment whose size is between x-k and x+k. The last line contains m integers b_1, b_2, \\ldots, b_m: the size of each apartment.",
    "output": "Print one integer: the number of applicants who will get an apartment.",
    "constraints": "1 <= n, m <= 2 * 10^5, 0 <= k <= 10^9, 1 <= a_i, b_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "4 3 5\n60 45 80 60\n30 60 75",
      "2"
    ]
  },
  {
    "id": 22,
    "title": "Ferris Wheel",
    "statement": "There are n children who want to go to a Ferris wheel, and your task is to find a gondola for each child. Each gondola may have one or two children in it, and in addition, the total weight in a gondola may not exceed x. You know the weight of every child.",
    "input": "The first input line contains two integers n and x: the number of children and the maximum allowed weight. The next line contains n integers p_1,p_2,\\ldots,p_n: the weight of each child.",
    "output": "Print one integer: the minimum number of gondolas.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= x <= 10^9, 1 <= p_i <= x",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "4 10\n7 2 3 9",
      "3"
    ]
  },
  {
    "id": 23,
    "title": "Concert Tickets",
    "statement": "There are n concert tickets available, each with a certain price. Then, m customers arrive, one after another. Each customer announces the maximum price they are willing to pay for a ticket, and after this, they will get a ticket with the nearest possible price such that it does not exceed the maximum price.",
    "input": "The first input line contains integers n and m: the number of tickets and the number of customers. The next line contains n integers h_1,h_2,\\ldots,h_n: the price of each ticket. The last line contains m integers t_1,t_2,\\ldots,t_m: the maximum price for each customer in the order they arrive.",
    "output": "Print, for each customer, the price that they will pay for their ticket. After this, the ticket cannot be purchased again. If a customer cannot get any ticket, print -1.",
    "constraints": "1 <= n, m <= 2 * 10^5, 1 <= h_i, t_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5 3\n5 3 7 8 5\n4 8 3",
      "3\n8\n-1"
    ]
  },
  {
    "id": 24,
    "title": "Restaurant Customers",
    "statement": "You are given the arrival and leaving times of n customers in a restaurant. What was the maximum number of customers in the restaurant at any time?",
    "input": "The first input line has an integer n: the number of customers. After this, there are n lines that describe the customers. Each line has two integers a and b: the arrival and leaving times of a customer.",
    "output": "Print one integer: the maximum number of customers.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= a < b <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "3\n5 8\n2 4\n3 9",
      "2"
    ]
  },
  {
    "id": 25,
    "title": "Movie Festival",
    "statement": "In a movie festival n movies will be shown. You know the starting and ending time of each movie. What is the maximum number of movies you can watch entirely?",
    "input": "The first input line has an integer n: the number of movies. After this, there are n lines that describe the movies. Each line has two integers a and b: the starting and ending times of a movie.",
    "output": "Print one integer: the maximum number of movies.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= a < b <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "3\n3 5\n4 9\n5 8",
      "2"
    ]
  },
  {
    "id": 26,
    "title": "Sum of Two Values",
    "statement": "You are given an array of n integers, and your task is to find two values (at distinct positions) whose sum is x.",
    "input": "The first input line has two integers n and x: the array size and the target sum. The second line has n integers a_1,a_2,\\dots,a_n: the array values.",
    "output": "Print two integers: the positions of the values. If there are several solutions, you may print any of them. If there are no solutions, print IMPOSSIBLE.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= x,a_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "4 8\n2 7 5 1",
      "2 4"
    ]
  },
  {
    "id": 27,
    "title": "Maximum Subarray Sum",
    "statement": "Given an array of n integers, your task is to find the maximum sum of values in a contiguous subarray.",
    "input": "The first input line has an integer n: the size of the array. The second line has n integers a_1,a_2,\\dots,a_n: the array values.",
    "output": "Print one integer: the maximum subarray sum.",
    "constraints": "1 <= n <= 2 * 10^5, -10^9 <= a_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "8\n-1 3 -2 5 3 -5 2 2",
      "9"
    ]
  },
  {
    "id": 28,
    "title": "Stick Lengths",
    "statement": "There are n sticks with some lengths. Your task is to modify the sticks so that each stick has the same length.\nYou can either lengthen and shorten each stick. Both operations cost x where x is the difference between the new and original length.\nWhat is the minimum total cost?",
    "input": "The first input line contains an integer n: the number of sticks.\nThen there are n integers: p_1, p_2, ..., p_n: the lengths of the sticks.",
    "output": "Print one integer: the minimum total cost.",
    "constraints": "1 ≤ n ≤ 200000\n1 ≤ p_i ≤ 1000000000",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5\n2 3 1 5 2",
      "5"
    ]
  },
  {
    "id": 29,
    "title": "Missing Coin Sum",
    "statement": "You have n coins with positive integer values. What is the smallest sum you cannot create using a subset of the coins?",
    "input": "The first input line has an integer n: the number of coins.\nThe second line has n integers x_1, x_2, ..., x_n: the value of each coin.",
    "output": "Print one integer: the smallest coin sum.",
    "constraints": "1 ≤ n ≤ 200000\n1 ≤ x_i ≤ 1000000000",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5\n2 9 1 2 7",
      "6"
    ]
  },
  {
    "id": 30,
    "title": "Collecting Numbers",
    "statement": "You are given an array that contains each number between 1 and n exactly once. Your task is to collect the numbers from 1 to n in increasing order.\nOn each round, you go through the array from left to right and collect as many numbers as possible. What will be the total number of rounds?",
    "input": "The first line has an integer n: the array size.\nThe next line has n integers x_1, x_2, ..., x_n: the numbers in the array.",
    "output": "Print one integer: the number of rounds.",
    "constraints": "1 ≤ n ≤ 200000",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5\n4 2 1 5 3",
      "3"
    ]
  },
  {
    "id": 31,
    "title": "Collecting Numbers II",
    "statement": "You are given an array that contains each number between 1 and n exactly once. Your task is to collect the numbers from 1 to n in increasing order.\nOn each round, you go through the array from left to right and collect as many numbers as possible.\nGiven m operations that swap two numbers in the array, your task is to report the number of rounds after each operation.",
    "input": "The first line has two integers n and m: the array size and the number of operations.\nThe next line has n integers x_1, x_2, ..., x_n: the numbers in the array.\nFinally, there are m lines that describe the operations. Each line has two integers a and b: the numbers at positions a and b are swapped.",
    "output": "Print m integers: the number of rounds after each swap.",
    "constraints": "1 ≤ n, m ≤ 200000\n1 ≤ a, b ≤ n",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5 3\n4 2 1 5 3\n2 3\n1 5\n2 3",
      "2\n3\n4"
    ]
  },
  {
    "id": 32,
    "title": "Playlist",
    "statement": "You are given a playlist of a radio station since its establishment. The playlist has a total of n songs.\nWhat is the longest sequence of successive songs where each song is unique?",
    "input": "The first input line contains an integer n: the number of songs.\nThe next line has n integers k_1, k_2, ..., k_n: the id number of each song.",
    "output": "Print the length of the longest sequence of unique songs.",
    "constraints": "1 ≤ n ≤ 200000\n1 ≤ k_i ≤ 1000000000",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "8\n1 2 1 3 2 7 4 2",
      "5"
    ]
  },
  {
    "id": 33,
    "title": "Towers",
    "statement": "You are given n cubes in a certain order, and your task is to build towers using them. Whenever two cubes are one on top of the other, the upper cube must be smaller than the lower cube.\nYou must process the cubes in the given order. You can always either place the cube on top of an existing tower, or begin a new tower. What is the minimum possible number of towers?",
    "input": "The first input line contains an integer n: the number of cubes.\nThe next line contains n integers k_1, k_2, ..., k_n: the sizes of the cubes.",
    "output": "Print one integer: the minimum number of towers.",
    "constraints": "1 ≤ n ≤ 200000\n1 ≤ k_i ≤ 1000000000",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5\n3 8 2 1 5",
      "2"
    ]
  },
  {
    "id": 34,
    "title": "Traffic Lights",
    "statement": "There is a street of length x whose positions are numbered 0, 1, ..., x. Initially there are no traffic lights, but n sets of traffic lights are added to the street one after another.\nYour task is to calculate the length of the longest passage without traffic lights after each addition.",
    "input": "The first input line contains two integers x and n: the length of the street and the number of sets of traffic lights.\nThen, the next line contains n integers p_1, p_2, ..., p_n: the position of each set of traffic lights. Each position is distinct.",
    "output": "Print the length of the longest passage without traffic lights after each addition.",
    "constraints": "1 ≤ x ≤ 1000000000\n1 ≤ n ≤ 200000\n0 < p_i < x",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "8 3\n3 6 2",
      "5 3 3"
    ]
  },
  {
    "id": 35,
    "title": "Josephus Problem I",
    "statement": "Consider a game where there are n children (numbered 1, 2, ..., n) in a circle. During the game, every other child is removed from the circle until there are no children left. In which order will the children be removed?",
    "input": "The only input line has an integer n.",
    "output": "Print n integers: the removal order.",
    "constraints": "1 ≤ n ≤ 200000",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "7",
      "2 4 6 1 5 3 7"
    ]
  },
  {
    "id": 36,
    "title": "Josephus Problem II",
    "statement": "Consider a game where there are n children (numbered 1, 2, ..., n) in a circle. During the game, repeatedly k children are skipped and one child is removed from the circle. In which order will the children be removed?",
    "input": "The only input line has two integers n and k.",
    "output": "Print n integers: the removal order.",
    "constraints": "1 ≤ n ≤ 200000\n0 ≤ k ≤ 1000000000",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "7 2",
      "3 6 2 7 5 1 4"
    ]
  },
  {
    "id": 37,
    "title": "Nested Ranges Check",
    "statement": "Given n ranges, your task is to determine for each range if it contains some other range and if some other range contains it.\nRange [a, b] contains range [c, d] if a ≤ c and d ≤ b.",
    "input": "The first input line has an integer n: the number of ranges.\nAfter this, there are n lines that describe the ranges. Each line has two integers x and y: the range is [x, y].",
    "output": "First print a line that describes for each range (in the input order) if it contains some other range (1) or not (0).\nThen print a line that describes for each range (in the input order) if some other range contains it (1) or not (0).",
    "constraints": "1 ≤ n ≤ 200000\n1 ≤ x < y ≤ 1000000000",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "4\n1 6\n2 4\n4 8\n3 6",
      "1 0 0 0\n0 1 0 1"
    ]
  },
  {
    "id": 38,
    "title": "Nested Ranges Count",
    "statement": "Given n ranges, your task is to count for each range how many other ranges it contains and how many other ranges contain it.\nRange [a, b] contains range [c, d] if a ≤ c and d ≤ b.",
    "input": "The first input line has an integer n: the number of ranges.\nAfter this, there are n lines that describe the ranges. Each line has two integers x and y: the range is [x, y].",
    "output": "First print a line that describes for each range (in the input order) how many other ranges it contains.\nThen print a line that describes for each range (in the input order) how many other ranges contain it.",
    "constraints": "1 ≤ n ≤ 200000\n1 ≤ x < y ≤ 1000000000",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "4\n1 6\n2 4\n4 8\n3 6",
      "2 0 0 0\n0 1 0 1"
    ]
  },
  {
    "id": 39,
    "title": "Room Allocation",
    "statement": "There is a large hotel, and n customers will arrive soon. Each customer wants to have a single room.\nYou know each customer's arrival and departure day. Two customers can stay in the same room if one arrives after the other leaves.\nWhat is the minimum number of rooms that are needed? And how can the customers be assigned to the rooms?",
    "input": "The first input line contains an integer n: the number of customers.\nAfter this, there are n lines, each containing two integers a and b: the arrival and departure day of each customer.",
    "output": "Print first an integer k: the minimum number of rooms required.\nAfter this, print a line that contains the room number of each customer in the same order as in the input.",
    "constraints": "1 ≤ n ≤ 200000\n1 ≤ a ≤ b ≤ 1000000000",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "3\n1 2\n2 4\n4 4",
      "2\n1 2 1"
    ]
  },
  {
    "id": 40,
    "title": "Factory Machines",
    "statement": "A factory has n machines which can be used to make products. Your goal is to make a total of t products. For each machine, you know the number of seconds it needs to make a single product. The machines can work simultaneously, and you can freely decide their schedule. What is the shortest time needed to make t products?",
    "input": "The first input line has two integers n and t: the number of machines and products. The next line has n integers k_1,k_2,\\dots,k_n: the time needed to make a product using each machine.",
    "output": "Print one integer: the minimum time needed to make t products.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= t <= 10^9, 1 <= k_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "3 7\n3 2 5",
      "8"
    ]
  },
  {
    "id": 41,
    "title": "Tasks and Deadlines",
    "statement": "You have to process n tasks. Each task has a duration and a deadline, and you will process the tasks in some order one after another. Your reward for a task is d-f where d is its deadline and f is your finishing time. (The starting time is 0, and you have to process all tasks even if a task would yield negative reward.) What is your maximum reward if you act optimally?",
    "input": "The first input line has an integer n: the number of tasks. After this, there are n lines that describe the tasks. Each line has two integers a and d: the duration and deadline of the task.",
    "output": "Print one integer: the maximum reward.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= a,d <= 10^6",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "3\n6 10\n8 15\n5 12",
      "2"
    ]
  },
  {
    "id": 42,
    "title": "Reading Books",
    "statement": "There are n books, and Kotivalo and Justiina are going to read them all. For each book, you know the time it takes to read it. They both read each book from beginning to end, and they cannot read a book at the same time. What is the minimum total time required?",
    "input": "The first input line has an integer n: the number of books. The second line has n integers t_1,t_2,\\dots,t_n: the time required to read each book.",
    "output": "Print one integer: the minimum total time.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= t_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "3\n2 8 3",
      "16"
    ]
  },
  {
    "id": 43,
    "title": "Sum of Three Values",
    "statement": "You are given an array of n integers, and your task is to find three values (at distinct positions) whose sum is x.",
    "input": "The first input line has two integers n and x: the array size and the target sum. The second line has n integers a_1,a_2,\\dots,a_n: the array values.",
    "output": "Print three integers: the positions of the values. If there are several solutions, you may print any of them. If there are no solutions, print IMPOSSIBLE.",
    "constraints": "1 <= n <= 5000, 1 <= x,a_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "4 8\n2 7 5 1",
      "1 3 4"
    ]
  },
  {
    "id": 44,
    "title": "Sum of Four Values",
    "statement": "You are given an array of n integers, and your task is to find four values (at distinct positions) whose sum is x.",
    "input": "The first input line has two integers n and x: the array size and the target sum. The second line has n integers a_1,a_2,\\dots,a_n: the array values.",
    "output": "Print four integers: the positions of the values. If there are several solutions, you may print any of them. If there are no solutions, print IMPOSSIBLE.",
    "constraints": "1 <= n <= 1000, 1 <= x,a_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "8 15\n3 2 5 8 1 3 2 3",
      "2 4 6 7"
    ]
  },
  {
    "id": 45,
    "title": "Nearest Smaller Values",
    "statement": "Given an array of n integers, your task is to find for each array position the nearest position to its left having a smaller value.",
    "input": "The first input line has an integer n: the size of the array. The second line has n integers x_1,x_2,\\dots,x_n: the array values.",
    "output": "Print n integers: for each array position the nearest position with a smaller value. If there is no such position, print 0.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= x_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "8\n2 5 1 4 8 3 2 5",
      "0 1 0 3 4 3 3 7"
    ]
  },
  {
    "id": 48,
    "title": "Subarray Divisibility",
    "statement": "Given an array of n integers, your task is to count the number of subarrays where the sum of values is divisible by n.",
    "input": "The first input line has an integer n: the size of the array. The next line has n integers a_1,a_2,\\dots,a_n: the contents of the array.",
    "output": "Print one integer: the required number of subarrays.",
    "constraints": "1 <= n <= 2 * 10^5, -10^9 <= a_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5\n3 1 2 7 4",
      "1"
    ]
  },
  {
    "id": 49,
    "title": "Subarray Distinct Values",
    "statement": "Given an array of n integers, your task is to calculate the number of subarrays that have at most k distinct values.",
    "input": "The first input line has two integers n and k. The next line has n integers x_1,x_2,\\dots,x_n: the contents of the array.",
    "output": "Print one integer: the number of subarrays.",
    "constraints": "1 <= k <= n <= 2 * 10^5, 1 <= x_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5 2\n1 2 3 1 1",
      "10"
    ]
  },
  {
    "id": 50,
    "title": "Array Division",
    "statement": "You are given an array containing n positive integers. Your task is to divide the array into k subarrays so that the maximum sum in a subarray is as small as possible.",
    "input": "The first input line contains two integers n and k: the size of the array and the number of subarrays in the division. The next line contains n integers x_1,x_2,\\ldots,x_n: the contents of the array.",
    "output": "Print one integer: the maximum sum in a subarray in the optimal division.",
    "constraints": "1 <= n <= 2 * 10^5, 1 <= k <= n, 1 <= x_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "5 3\n2 4 7 3 5",
      "8"
    ]
  },
  {
    "id": 51,
    "title": "Sliding Window Median",
    "statement": "You are given an array of n integers. Your task is to calculate the median of each window of k elements, from left to right. The median is the middle element when the elements are sorted. If the number of elements is even, there are two possible medians and we assume that the median is the smaller of them.",
    "input": "The first input line contains two integers n and k: the number of elements and the size of the window. Then there are n integers x_1,x_2,\\ldots,x_n: the contents of the array.",
    "output": "Print n - k + 1 values: the medians.",
    "constraints": "1 <= k <= n <= 2 * 10^5, 1 <= x_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "8 3\n2 4 3 5 8 1 2 1",
      "3 4 5 5 2 1"
    ]
  },
  {
    "id": 52,
    "title": "Sliding Cost",
    "statement": "You are given an array of n integers, and an integer k. Your task is to calculate the cost of each window of k elements, from left to right. The cost of a window is the sum of absolute differences between each element and the median of the window.",
    "input": "The first input line contains two integers n and k: the number of elements and the size of the window. Then there are n integers x_1,x_2,\\ldots,x_n: the contents of the array.",
    "output": "Print n - k + 1 values: the costs.",
    "constraints": "1 <= k <= n <= 2 * 10^5, 1 <= x_i <= 10^9",
    "time_limit": "1.00 s",
    "memory_limit": "512 MB",
    "testCases": [
      "8 3\n2 4 3 5 8 1 2 1",
      "2 2 5 7 7 1"
    ]
  }
]

export default problems;