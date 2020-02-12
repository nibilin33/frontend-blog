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
[javascript问题](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/questions/javascript-questions.md)       
[HTML问题](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/questions/html-questions.md)       
[CSS问题](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/questions/css-questions.md)     
[技术面试手册](https://yangshun.github.io/tech-interview-handbook/algorithms/array)     

3你是怎么理解HTML的语义化的     

4HTML的盒子模型有哪些构成，盒子模型有哪几种，默认的是哪一种     

5盒子模型有没有办法把宽度设置为包含padding的        

6浮动元素有没有什么特征     

7清除浮动的所有方法     

8js基本数据类型     

9typeof去判断数据类型时返回值有哪些     

10说说事件代理利用的原理是什么      

11阻止冒泡的函数是什么      

12cookie有哪些特征      

13假设访问了A.com存了一个cookie，在另一个页面用ajax向A的域名的发请求的话，会携带cookie吗        

14cookie的其他解决方案（很方，没想过）      

15localstorage存数据的格式是什么        

16怎样将一个数组存入localstorage        

17storage有哪些存储方法     

18html5的一些新的特性       

19假设两台电脑之间同步画板怎么实现      

20es6用的比较多的有哪些     

21promise的两个方法，具体实现       

22箭头函数      

23es6不能在有的浏览器中执行，编译过程是怎样的       

24如果一个页面要做性能优化，从哪方面考察，从哪些地方优化        

25vue的开发模式和jQuery的开发模式有哪些不同，有哪些优点     

26jQuery有没有办法组件化        

27能用es6写jQuery       

28VUE数据双向绑定是怎么实现的       

29假设一个object A里面的值n为1，怎么知道n改变的，有事件绑定吗       

30有学过其他的框架吗   
诸如我现在需要监听那种频繁发生的事件        
埋点的实现思路      
非递归的二叉树遍历      
文件上传断点、续传      
设计模式的应用场景考核       
VUE 双向绑定原理        
VUE/React diff 算法的大概思路       
现有的状态管理的实现        
webpack中 loader、plugin 的实现思路     
简易版 webpack 的实现       
KOA、Express 中间件的实现       
React fiber 的理解和原理        
前端构建工具的、vue-cli、create-react-app 的原理和实现思路      
事件委托？原理、好处、应用场景。          
vue和react的区别。        
vue的原理。       
闭包         
let和var的区别。let产生的背景？
定宽定高，如何垂直居中？那不定宽高呢？      
HTTPS的请求过程     
代码规范            
尾递归问题   
实现函数的柯里化          
Promise的用法以及实现原理。 
有一个进度条，进度条中间有一串文字，当我的进度条覆盖了文字之后，文字要与进度条反色:mix-blend-mode       
问：跨域问题有几种解决方式？
答：CORS 头，jsonp，设置 document.domain。

问：如何让一个元素在页面内上下左右居中？
答：绝对定位+负的外边距。

问：如何清除浮动？
答：clear 属性，以及 overflow:hidden。
追问：overflow:hidden 有什么副作用？
答：元素多时，可能会隐藏掉部分元素。
追问：overflow:hidden 为什么能清除浮动？
答：不清楚。

问：如何实现动画？
答：CSS3 transition 属性，类库如 jQuery，或者用 js 手写。
追问：如何手写？
答：创建一个函数，传入动画元素、属性、目标值、动画时长，以及可选的时间函数。根据当前时间戳、起始时间戳、动画时长、属性初始值和目标值计算出任意时刻的值。时间函数默认为单位区间到单位区间的线性函数…（被打断：好了，这个问题差不多了）

问：CSS 选择器的优先级是怎样的？
答：首先，所有带!important 的属性比不带的高。其次，行内样式> 内嵌样式> 外置式。然后总地来说，选择器越精细，优先级越高。比如说，id 选择器> 类选择器> 标签名选择器>*选择器，子元素选择器> 后代元素选择器。同样优先级的样式，后面的会覆盖前面的。

问：熟悉什么类库吗？
答：jQuery 以前比较熟悉，不过很久没用了。因为我的理念是这样的：在基础没有完全掌握牢固之前，不去依赖框架和类库，防止被惯坏了。
追问：那说说原生 js 怎么获取某个类名的所有元素。
答：document.querySelectorAll 和 document.getElementsByClassName。

问：原生 js 怎么发起 ajax 请求？
答：新建一个 XMLHttpRequest 实例，用 open 和 send 方法发起请求，添加状态变更监听器。
追问：一个 XMLHttpRequest 实例有多少种状态？
答：常用已完成状态，别的不记得了。
追问：怎样发起 post 请求？或者说 post 请求的过程是怎样的？
我坦白地说没有 get 到这个问题的点，面试官表示不纠结了，下一个问题。

问：用 js 怎样实现一个类？
答：抛开 ES6 的 class 关键字不谈，可以用构造函数。要继承的话，可以把父类的原型拷贝到子类上。讲了一下原型链上的查找过程。
追问：那如果后面动态地在父类的原型上添加一个方法，拷贝继承这种方式，子类不就找不到这个方法了吗？
答：你说得对，对于这种情况，把子类原型指向父类的实例更好。
追问：js 中怎么实现封装和多态？
我表示非科班出身，它们的概念已经不记得了。

问：js 的闭包了解吗？
答：函数中返回另一个函数，那么被返回的函数可以 “记忆” 被创建时的环境。
追问：为什么会有这样的特性？
答：作用域链？没有深入思考过。

问：js 的作用域有几种？
答：var 有全局作用域、函数作用域，let 和 const 外加块作用域。

问：了解 Promise 吗？
答：Promise 是 ES6 的新特性，可以用来碾平异步回调。简要地描述了一下 resolve、reject 函数和 then 方法。

问：svn 和 git 的主要区别？
答：svn 的仓库有中央服务器，而 git 是分布式的。别的区别不清楚。

问：让一个 100px 的方形元素从页面的最左边过渡到最右边，最高效的动画方式是什么？
答：css3 transition 使用底层渲染，比所有 js 动画都要高效。可以让元素绝对定位，从 left:0 变换为 left:calc(100vw-100px)。
追问：有没有更高效的方式？
答：想不到（可能想问我 animation 属性？当时的确没想到）。

问：有没有做过移动端应用？
答：在公司主要做中后台的内网项目，移动端经验不足。
追问：那谈谈对移动端开发的理解吧。
答：最显著的，是尺寸的差异。其次是触控方式的差别，移动端有一系列以 touch 开头的事件。还有要注意优化性能和加载速度，因为移动端一般不能多任务，用户可能没有那么耐心，设备性能也不能跟 pc 比。

问：你的前端学习历程是怎样的？
答：在学校时，主要通过图书馆的书籍。之后把 MDN 上教程和文档刷了一遍。

问：对于以后的职业规划？
答：想做个专门的前端工程师。在公司实际上大部分时间在写 php，所以对这种精力分散、各方面都泛而不精的状态不太满意。目前已抛弃 php 技能，在深入学习 Node.js 和 ES6。等到把它们烂熟于心之后，挑一门比较顺手的前端框架，可能是 Reactjs 或 Vuejs。

问：感觉面试得如何？还有什么想问的？

我说，之前朋友要帮我内推时，其实我婉拒了。因为知道你们在招工作三年以上的、能带队的高级工程师，我达不到。今天面试比较仓促、紧张，好多东西没答上来。总之，能有这个机会我就满足了，结果，我并不看重。

面试官笑笑说，其实三年经验是虚的，只是希望新人能快速融入项目。我觉得你基础掌握得不错，帮你争取一下机会。如果我们能共事的话，公司会先组织一些培训，总之工作年限不是大问题。

回顾面试过程，真的能体会到到面试官的耐心，可惜忘了问花名，有点遗憾。

## 解题     
推荐[tech-interview-handbook/algorithms](https://yangshun.github.io/tech-interview-handbook/algorithms)     
### 数组

#### 1. 子域名访问计数

[子域名访问计数](https://leetcode-cn.com/problems/subdomain-visit-count/)       

第一次提交      
::: details 

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

::: 

52/52 cases passed (92 ms)              
Your runtime beats 68.04 % of javascript submissions            
Your memory usage beats 28.39 % of javascript submissions (39.3 MB)             
第二次提交
::: details 

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

:::

52/52 cases passed (84 ms)              
Your runtime beats 88.66 % of javascript submissions            
Your memory usage beats 64.2 % of javascript submissions (38.9 MB)              

#### 2. 种花问题

[种花问题](https://leetcode-cn.com/problems/can-place-flowers/) 
::: details 

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

::: 
123/123 cases passed (84 ms)            
Your runtime beats 46.2 % of javascript submissions             
Your memory usage beats 57.35 % of javascript submissions (36.6 MB)         

#### 4. 三数之和

[三数之和](https://leetcode-cn.com/problems/3sum/)    

#### 5. 买卖股票的最佳时间

[买卖股票的最佳时间](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

#### 6. 包含重复项

[包含重复项](https://leetcode.com/problems/contains-duplicate/) 

#### 7. 阵列除自身的乘积 

[阵列除自身的乘积](https://leetcode.com/problems/product-of-array-except-self/)

#### 8. 装满水的容器

[装满水的容器](https://leetcode.com/problems/container-with-most-water/)    

### 排序和搜索          

#### 1. 二分查找
[二分查找](https://leetcode-cn.com/problems/binary-search/)     
第一反应=-=：     

``` 
nums.indexOf(target)
```

46/46 cases passed (104 ms)   
Your runtime beats 6.85 % of javascript submissions   
Your memory usage beats 44.47 % of javascript submissions (36.8 MB)     
老实用二分法：         
::: details

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

:::

46/46 cases passed (64 ms)  
Your runtime beats 94.63 % of javascript submissions  
Your memory usage beats 44.68 % of javascript submissions (36.8 MB) 

#### 2. 二维数组中的查找   

 [搜索二维矩阵](https://leetcode-cn.com/problems/search-a-2d-matrix/) 
 方法一：       
::: details

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

:::

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
::: details 

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

::: 

136/136 cases passed (60 ms)    
Your runtime beats 91.48 % of javascript submissions    
Your memory usage beats 29.32 % of javascript submissions (34.8 MB)   

#### 3. 数组中重复的数据 

给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。  

找到所有出现两次的元素。    

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？    

示例：  

输入:   
[4, 3, 2, 7, 8, 2, 3, 1]   

输出:   
[2, 3]   
::: details 

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

:::

28/28 cases passed (132 ms)     
Your runtime beats 63 % of javascript submissions       
Your memory usage beats 30.12 % of javascript submissions (45.4 MB)     

#### 4. 删除排序数组中的重复项 II       

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
::: details  

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

::: 
166/166 cases passed (76 ms)            
Your runtime beats 89.09 % of javascript submissions        
Your memory usage beats 34.32 % of javascript submissions (35.9 MB)     
::: details code

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

::: 
### 二进制      
#### 1.计数位数
[counting-bits](https://leetcode.com/problems/counting-bits/)       
#### 2.缺少号码
[Missing Number](https://leetcode.com/problems/missing-number/)     
### 链表    

1. 合并有序链表    

::: details code

``` js
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
```

::: 

2. 对链表进行插入排序     

::: details 

``` js
var insertionSortList = function(head) {
    if (!head) return head;
    var preHead = new ListNode(-Infinity);
    var curr = head;
    // 找下一个插入的位置
    var pre = preHead;
    var next = null;
    while (curr) {
        next = curr.next;
        while (pre.next && pre.next.val < curr.val) {
            pre = pre.next;
        }
        curr.next = pre.next;
        pre.next = curr;
        pre = preHead;
        curr = next;
    }
    return preHead.next;
};
```

:::    

3. 旋转链表         

给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。      
思路：      
链表倒置，移动的几位放到链表头，未移动的放到链表尾巴           
::: details

``` js
var rotateRight = function(head, k) {
    if (!head) return head;
    if (k < 0) return null;
    var first = head;
    var preHead = head;
    var pre = head;
    var count = 0;
    while (head) {
        count++;
        head = head.next;
    }
    k = k > count ? k % count : k;
    if (k == 0 || k === count) {
        return first;
    }
    k = count - k;
    head = first;
    while (head && head.next) {
        if (k === 1) {
            pre = head;
        }
        head = head.next;
        k--;
    }
    preHead = pre.next;
    pre.next = null;
    head.next = first;
    return preHead;

};
```

231/231 cases passed (80 ms)    
Your runtime beats 48.61 % of javascript submissions    
Your memory usage beats 87.75 % of javascript submissions (35.4 MB) 
:::

4. 分隔链表  

给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。  
你应当保留两个分区中每个节点的初始相对位置。    
思路：
拿两个空链表装比较的结果，最后拼接起来      
::: details

``` js
var partition = function(head, x) {
    var left = new ListNode(0);
    var right = new ListNode(0);
    var preHead = left;
    var preRight = right;
    while (head) {
        var next = head.next;
        head.next = null;
        if (head.val >= x) {
            right.next = head;
            right = right.next;
        } else {
            left.next = head;
            left = left.next;
        }
        head = next;
    };
    left.next = preRight.next;
    return preHead.next;
};
```

166/166 cases passed (72 ms)    
Your runtime beats 59.94 % of javascript submissions    
Your memory usage beats 57.43 % of javascript submissions (34.1 MB)

``` js
var partition = function(head, x) {
    var left = new ListNode(0);
    var right = new ListNode(0);
    var preHead = left;
    var preRight = right;
    while (head) {
        if (head.val >= x) {
            right.next = head;
            right = right.next;
        } else {
            left.next = head;
            left = left.next;
        }
        head = head.next;
    };
    right.next = null;
    left.next = preRight.next;
    return preHead.next;
};
```

166/166 cases passed (56 ms)        
Your runtime beats 99.04 % of javascript submissions    
Your memory usage beats 49.51 % of javascript submissions (34.1 MB) 
::: 

5. 二叉树展开为链表         

将当前节点的右子树放到左子树的最右边的节点上        
::: details
递归本质是一个栈结构        

``` js
var flatten = function(root) {
    if (!root) return;
    flatten(root.left);
    flatten(root.right);
    if (root.left) {
        var left = root.left;
        var right = root.right;
        root.right = left;
        while (left.right) {
            left = left.right;
        }
        left.right = right;
        root.left = null;
    }
};
```

:::

6. 删除链表的倒数第N个节点      

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。     
思路： 快慢指针 
::: details

``` js
var removeNthFromEnd = function(head, n) {
    var preHead = new ListNode(0);
    preHead.next = head;
    var before = preHead;
    var tail = preHead;
    var index = 0;
    while (tail) {
        tail = tail.next;
        if (index > n) {
            before = before.next;
        }
        index++;
    }
    before.next = before.next.next;
    return preHead.next;
};
```

:::

### 二叉树      

1. 从前序与中序遍历序列构造二叉树       

::: details 

:::

### 动态规划    
### 图      
### 字符串      


