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