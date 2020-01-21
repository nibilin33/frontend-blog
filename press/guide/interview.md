## 项目经历描述 
::: tip
项目经历中扮演的角色、  
负责的模块、  
碰到的问题、  
解决的思路、  
达成的效果以及最后的总结与沉淀
:::   


## 面试题  

[前端面试与进阶指南](https://www.cxymsg.com)  

## 解题

### 子域名访问计数
/
  @lc app=leetcode.cn id=811 lang=javascript
 
  [811] 子域名访问计数
        
  一个网站域名，如"discuss.leetcode.com"，包含了多个子域名。作为顶级域名，常用的有"com"，下一级则有"leetcode.com"，最低的一级为"discuss.leetcode.com"。当我们访问域名"discuss.leetcode.com"时，也同时访问了其父域名"leetcode.com"以及顶级域名
  "com"。
 
  给定一个带访问次数和域名的组合，要求分别计算每个域名被访问的次数。其格式为访问次数+空格+地址，例如："9001
  discuss.leetcode.com"。
 
  接下来会给出一组访问次数和域名组合的列表cpdomains 。要求解析出所有域名的访问次数，输出格式和输入格式相同，不限定先后顺序。
 
 
  示例 1:
  输入:
  ["9001 discuss.leetcode.com"]
  输出:
  ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
  说明:
 
  例子中仅包含一个网站域名："discuss.leetcode.com"。按照前文假设，子域名"leetcode.com"和"com"都会被访问，所以它们都被访问了9001次。
 
 
 
  示例 2
  输入:
  ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
  输出:
  ["901 mail.com", "50 yahoo.com", "900 google.mail.com", "5 wiki.org", "5 org", "1
  intel.mail.com", "951 com"]
  说明:
  按照假设，会访问"google.mail.com" 900次，"yahoo.com" 50次，"intel.mail.com"
  1次，"wiki.org" 5次。
  而对于父域名，会访问"mail.com" 900+1 = 901次，"com" 900 + 50 + 1 = 951次，和 "org" 5 次。
 
 
  注意事项：
 
 
  cpdomains 的长度小于 100。
  每个域名的长度小于100。
  每个域名地址包含一个或两个"."符号。
  输入中任意一个域名的访问次数都小于10000。
 
 
 /

第一次提交

``` 
var subdomainVisits = function(cpdomains) {
  var split_result = {};
  for (var i = 0; i < cpdomains.length; i++) {
    var item = cpdomains[i];
    var split_arr = item.split(" ");
    var dom = split_arr[1].split(".");
    split_result[split_arr[1]] = split_result[split_arr[1]]
      ? parseInt(split_result[split_arr[1]]) + parseInt(split_arr[0])
      : split_arr[0];
    for (var j = dom.length; j > 1; j--) {
      var name = dom[j - 1] + (dom[j] ? "." + dom[j] : "");
      split_result[name] = split_result[name]
        ? parseInt(split_result[name]) + parseInt(split_arr[0])
        : split_arr[0];
    }
  }
  return Object.keys(split_result).map(function(key) {
    return split_result[key] + " " + key;
  });
};
```

52/52 cases passed (92 ms)              
Your runtime beats 68.04 % of javascript submissions            
Your memory usage beats 28.39 % of javascript submissions (39.3 MB)             
第二次提交

``` 
var subdomainVisits = function(cpdomains) {
  var split_result = {};
  for (var i = 0; i < cpdomains.length; i++) {
      var currentNum = 0;
      Array.from(cpdomains[i].match(/(\d+) ([\w\d]+.?([\w\d]+.?([\w\d]+)?)?)/)||[]).forEach(function(name, index){
        if (index < 2) {
            currentNum = parseInt(name);
            return;
        }
        if (!name) {
            return;
        }
        split_result[name] = split_result[name]
            ? parseInt(split_result[name]) + currentNum
            : currentNum;
    });
  }
  return Object.keys(split_result).map(function(key) {
    return split_result[key] + " " + key;
  });
};
```

52/52 cases passed (84 ms)              
Your runtime beats 88.66 % of javascript submissions            
Your memory usage beats 64.2 % of javascript submissions (38.9 MB)              

### 种花问题

/
  @lc app=leetcode.cn id=605 lang=javascript
 
  [605] 种花问题
  假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
  
  给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n
  朵花？能则返回True，不能则返回False。
  
  示例 1:
  输入: flowerbed = [1, 0, 0, 0, 1], n = 1
  输出: True
  
  示例 2:
  
  输入: flowerbed = [1, 0, 0, 0, 1], n = 2
  输出: False
  
  
  注意:
  
  
  数组内已种好的花不会违反种植规则。
  输入的数组长度范围为 [1, 20000]。
  n 是非负整数，且不会超过输入数组的大小。
 /
 

``` 
 var canPlaceFlowers = function(flowerbed, n) {
    var canFlowers = false;                                                                                                                            
    for(var i=0; i<flowerbed.length;i++) {
        if(flowerbed[i] === 0) {
            if (flowerbed[i-1]!=1&&flowerbed[i+1]!=1) {
                n--;
                i=i+1;
            }
        }
        if (n<1) {
            canFlowers = true;
            break;
        }
    }
    return canFlowers;
};
 ```

123/123 cases passed (84 ms)            
Your runtime beats 46.2 % of javascript submissions             
Your memory usage beats 57.35 % of javascript submissions (36.6 MB)             

### 在LR字符串中交换相邻字符

/
  [777] 在LR字符串中交换相邻字符
  在一个由 'L' , 'R' 和 'X'
  三个字符组成的字符串（例如"RXXLRXRXL"）中进行移动操作。一次移动操作指用一个"LX"替换一个"XL"，或者用一个"XR"替换一个"RX"。现给定起始字符串start和结束字符串end，请编写代码，当且仅当存在一系列移动操作使得start可以转换成end时，
  返回True。
  
  示例 :
  
  输入: start = "RXXLRXRXL", end = "XRLXXRRLX"
  输出: True
  解释:
  我们可以通过以下几步将start转换成end:
  RXXLRXRXL ->
  XRXLRXRXL ->
  XRLXRXRXL ->
  XRLXXRRXL ->
  XRLXXRRLX
  
  
  注意:
  
  
  1 <= len(start) = len(end) <= 10000。
  start和end中的字符串仅限于'L', 'R'和'X'。
  
 /

 ### 二分查找
 /
  @lc app=leetcode.cn id=704 lang=javascript
  给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的
  target，如果目标值存在返回下标，否则返回 -1。
   
  示例 1:
  
  输入: nums = [-1, 0, 3, 5, 9, 12], target = 9
  输出: 4
  解释: 9 出现在 nums 中并且下标为 4
  
  
  示例 2:
  
  输入: nums = [-1, 0, 3, 5, 9, 12], target = 2
  输出: -1
  解释: 2 不存在 nums 中因此返回 -1
  
  
  
  
  提示：
  
  
  你可以假设 nums 中的所有元素是不重复的。
  n 将在 [1, 10000]之间。
  nums 的每个元素都将在 [-9999, 9999]之间。
  
  
 /
第一反应=-=：     

``` 
nums.indexOf(target)
```

46/46 cases passed (104 ms)   
Your runtime beats 6.85 % of javascript submissions   
Your memory usage beats 44.47 % of javascript submissions (36.8 MB)   
老实用二分法：    

``` 
var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    while(start<=end) {
        var mid = start+Math.floor((end - start)/2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            end = mid -1;
        }else{
            start = mid +1;
        }
    }
    return -1;
};
```

46/46 cases passed (64 ms)  
Your runtime beats 94.63 % of javascript submissions  
Your memory usage beats 44.68 % of javascript submissions (36.8 MB) 

### 不相交的线  

/
  我们在两条独立的水平线上按给定的顺序写下 A 和 B 中的整数。
  
  现在，我们可以绘制一些连接两个数字 A[i] 和 B[j] 的直线，只要 A[i] == B[j]，且我们绘制的直线不与任何其他连线（非水平线）相交。
  
  以这种方法绘制线条，并返回我们可以绘制的最大连线数。
  
  
  
  示例 1：
  
  输入：A = [1, 4, 2], B = [1, 2, 4]
  输出：2
  解释：
  我们可以画出两条不交叉的线，如上图所示。
  我们无法画出第三条不相交的直线，因为从 A[1]=4 到 B[2]=4 的直线将与从 A[2]=2 到 B[1]=2 的直线相交。
  
  示例 2：
  
  输入：A = [2, 5, 1, 2, 5], B = [10, 5, 2, 1, 5, 2]
  输出：3
  
  
  示例 3：
  
  输入：A = [1, 3, 7, 1, 7, 5], B = [1, 9, 2, 5, 1]
  输出：2
  
  
  
 
 /
 ### 二维数组中的查找    
/
  @lc app=leetcode.cn id=74 lang=javascript
 
  [74] 搜索二维矩阵
  编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
  
  每行中的整数从左到右按升序排列。
  每行的第一个整数大于前一行的最后一个整数。
  
  
  示例 1:
  
  输入:
  matrix = [
  ⁠ [1, 3, 5, 7], 
  ⁠ [10, 11, 16, 20], 
  ⁠ [23, 30, 34, 50]
  ]
  target = 3
  输出: true
  
  
  示例 2:
  
  输入:
  matrix = [
  ⁠ [1, 3, 5, 7], 
  ⁠ [10, 11, 16, 20], 
  ⁠ [23, 30, 34, 50]
  ]
  target = 13
  输出: false
  
 /

// @lc code=start
/
  @param {number[][]} matrix
  @param {number} target
  @return {boolean}
 /
 方法一：

``` 
 var searchMatrix = function(matrix, target) {
    var rows = matrix.length;
    var columns = rows > 0 ? matrix[0].length: 0;
    if(!columns||!rows) {
        return false;
    }
    var row = 0;
    var column = columns -1;
    while(row<rows && column >= 0) {
        if(matrix[row][column] === target) {
            return true;
        }
        if(matrix[row][column] > target) {
            column--;
        }else {
            row++;
        }
    }
    return false;
};
 ```

136/136 cases passed (160 ms)   
Your runtime beats 6.44 % of javascript submissions   
Your memory usage beats 5.25 % of javascript submissions (44.8 MB)    
(ˇˍˇ)好慢，继续尝试... 
方法二：

``` 
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0) {
        return false;
    }
    return `,${matrix.toString()},` .match( `,${target},` )!==null;    
};
```

136/136 cases passed (76 ms)        
Your runtime beats 20.92 % of javascript submissions        
Your memory usage beats 5.25 % of javascript submissions (37.5 MB)      
(ˇˍˇ)额... ..
方法三：

``` 
var searchMatrix = function(matrix, target) {
    var rows = matrix.length;
    var columns = rows > 0 ? matrix[0].length: 0;
    if(!columns||!rows) {
        return false;
    }
    var left =0,right = rows  columns -1;
    while(left<=right) {
        var mid = left + Math.floor((right - left)/2);
        var x = Math.floor(mid/columns);
        if(matrix[x][mid%columns] > target) {
            right = mid - 1;
        }else if(matrix[x][mid%columns] < target) {
            left = mid + 1;
        }else{
            return true;
        }
    }
    return false;
};
```

136/136 cases passed (60 ms)    
Your runtime beats 91.48 % of javascript submissions    
Your memory usage beats 29.32 % of javascript submissions (34.8 MB)   

### 数组中重复的数据 

给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。  

找到所有出现两次的元素。    

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？    

示例：  

输入:   
[4, 3, 2, 7, 8, 2, 3, 1]   

输出:   
[2, 3]   

``` 
分析：如果没有重复，排序后数字i在位置i上     
抽屉原理1：把n+1个元素放入n个集合内，必定有一个集合至少含有两个或两个以上元素。     

抽屉原理2：把m个元素放进n个集合内，至少有一个集合含有k个元素，其中  k=m/n (n整除m)  
k=[m/n]+1 (n不整除m)。
抽屉原理3：把无穷多个元素放进有限个集合，必然至少有一个集合里有无穷多个元素。       
var findDuplicates = function(nums) {
    if (!nums||nums.length == 0) {
        return [];
    }
    var result = [];
    for(var i=1;i<=nums.length;++i) {
        while(nums[i-1]!=i) {
            if(nums[i-1]>nums.length||nums[i-1]<0) {
                break;
            }
            if(nums[i-1] === nums[nums[i-1]-1]) {
                result.push(nums[i-1]);
                break;
            }
            var temp = nums[i-1];
            nums[i-1] = nums[temp-1];
            nums[temp-1] = temp;
        }
    }
    return Array.from(new Set(result));
};
```

28/28 cases passed (132 ms)     
Your runtime beats 63 % of javascript submissions       
Your memory usage beats 30.12 % of javascript submissions (45.4 MB)     

### 删除排序数组中的重复项 II       

给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定 nums = [1, 1, 1, 2, 2, 3], 

函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0, 0, 1, 1, 1, 1, 2, 3, 3], 

函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。

你不需要考虑数组中超出新长度后面的元素。
::: tip
思路：相同数字向前移动覆盖
:::   
``` 

var removeDuplicates = function(nums) {
    for(var i=0;i<nums.length;i++) {
        var j = i+1;
        while(nums[i]===nums[j]&&j<nums.length) {
            j++;
            if(nums[i] === nums[j]) {
                for(var s = j;s<nums.length-1;s++) {
                    nums[s] = nums[s+1];
                }
                nums.length-=1;
                i--;
            }else{
                i++;
            }
        }
    }
    return nums.length;
};
```

166/166 cases passed (76 ms)            
Your runtime beats 89.09 % of javascript submissions        
Your memory usage beats 34.32 % of javascript submissions (35.9 MB)     

``` 
var removeDuplicates = function(nums) {
    let i=0,j=1;
    while(j<nums.length){
        if(i>=1&&nums[j]==nums[i]&&nums[j]==nums[i-1]){
            j++
        }
        else{
            nums[++i]=nums[j++]
        }
    }
    nums.length-=j-i-1
};
```

