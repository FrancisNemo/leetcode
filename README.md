# leetcode
I hope i was a snail
##100. Same Tree
所有节点和都需要判断是否为空，并且值相等，只要保证根节点判断正确，递归调用，多测试几个案例即可。
##118. Pascal's Triangle
第一组和第二组特殊数组，第三组开始数字是杨辉三角值。
##36. Valid Sudoku
记录状态，submatrix行列映射关系,每次遍历前清理，parseInt取整。
##229. Majority Element II
统计数字出现次数
##155. Min Stack
使用数组和一个数字来表示，注意this的引用、数字大小关系。
##58. Length of Last Word
index位置和trim除去尾部的空格干扰。
##84. Largest Rectangle in Histogram
method 1 :找出所有的subArray，O(n^2), 超时。
methed 2 : O(n), stack中保证坐标(非数组值)递增，因而出栈依次递减，末尾补零执行计，看图帮助思考。
##328. Odd Even Linked List
从even出发，依次往后找
##160. Intersection of Two Linked Lists
同步起点，以短的list中head起点，同步往后找。
同步有两种方法，先遍历一次，算出差值; 先到终点的，重新指向长链表的head，第二个到终点，指向短的链表head,减少计算，交换指针位置即可。
##326. Submission Details
y = logn/log3, 浮点数精度。
##125. Valid Palindrome
保证字符合法，去除非法带来性能开销。
##11. Container With Most Water
求最大体积，长度在缩小，必须用高度来弥补。
##242. Valid Anagram
重新排序对比或者bitmap比次数。
##224. Basic Calculators
使用栈结构，将表达式转化成后缀表达式，遇到')' 需找'('匹配，并返回()中运算结果; 遇到'-'，变+(-).
##175. Combine Two Tables
数据来源于两个表很自然就想到需要用某种 JOIN。题目中说到无论 Address 表有无那个人对应记录都应该列出来，说明应该用LEFT JOIN
http://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins
## 70. Climbing Stairs
f(n) = f(n-1)+ f(n-2), 空间换时间，用数组记录中间值，代替递归。
##130. Surrounded Regions
找到最外围一圈中所有的'O'并加入队列中，依次取出将其变成'$'表示已访问过，最后将'O'变成'X','$'变回'O'。