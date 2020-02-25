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
[virtual DOM](https://github.com/livoras/blog/issues/13)

## 面试经
### 淘宝电话一面40分钟      
这是一场极度紧张and没有自信的面试......
头痛了两天...挂断电话的瞬间头就不痛了...心态炸裂...     
```
1. 自我介绍             
2. 聊一下最近的项目经历     
3. 根据我简历提到的问了：       
内存泄漏是什么场景，GC的原理是什么？              
如果上百个复杂组件要展示如何优化？            
离线资源包的方案是什么样的？            
混合H5是如何通信的？    
（前提：我提到H5和native的通信都采用异步方式）就如果想要同步获得native的数据要怎么做？      
4. 基础知识：
首屏加载优化？
CDN是如何能做到优化效果的？ 
服务端渲染的原理？  
客户端渲染的引擎有了解吗？      
跨域请求有哪些方式？    
JSONP如何保证不被劫持，被任何人调用         
了解前端哪些安全方面?         
了解Option请求吗？             
了解HTTP2吗？   
箭头函数的优点？        
知道ES6哪些特性？await,async实现原理               
这些性特性浏览器不能支持怎么做？        
babel是用来做什么的？有写过babel的loader吗？        
webpack是用来做什么的？知道loader和Plugin的原理吗？           
（我有写过webpack的loader）写过loader是用来做什么的？   
vue 的双向绑定的原理，vue template是如何知道哪些数据要双向绑定的？
5. 你还有什么想问的吗？      
```
知道自己没有答好，也料到过不了，最后也收到没有过的邮件，反思了一下：       
1. GC 场景没有描述好，去循环引用是三个对象形成环，不是两个对象互相成环，在被反问A=B，B=A的时候，
没有反应过来和上面不是一个问题，给了一个错误答案。事后用node模拟查看GC情况，加深了印象。        
2. 上百个复杂组件要展示如何优化，我的理念只有按需...再复杂，用户不需要立马用到的...就不展示...  
虽然好像不是对方要的答案的感觉...好迷... 我就去问了给我内推的人类，她回答我说是大型电商比较常见的问题，最好 
还是有项目经验会比较清楚<span class="emoj">🙉</span>这给我一入ToB无缘ToC的感觉，心好累。           
3. Options 请求是不清楚，只见过，没有深入了解<span class="emoj">🙉</span>      
OPTIONS请求旨在发送一种“探测”请求以确定针对某个目标地址的请求必须具有怎样的约束（比如应该采用怎样的HTTP方法以及自定义的请求报头），然后根据其约束发送真正的请求。比如针对"跨域资源"的预检（Preflight）请求采用的HTTP方法就是OPTIONS。
>浏览器想服务端发送一个post/patch请求,实际上产生了两个请求，一个是Option,另一个才是真实的Post/Patch请求, 而get请求则不会产生Options请求。 
Options请求出现的情况有两种：
1、获取后台服务器支持的HTTP的通信方式       
2、对跨域请求进行preflight request(预检请求)。      
预检请求首先需要向另外一个域名的资源发送一个Http Options的请求头，      
以检测实际发送的请求是否是安全的。options请求是浏览器自发起的preflight request(预检请求)。
preflight request请求报文中有两个需要关注的首部字段：       
（1）Access-Control-Request-Method：告知服务器实际请求所使用的HTTP方法。    
（2）Access-Control-Request-Headers：告知服务器实际请求所携带的自定义首部字段。 
同时服务器也会添加origin header,告知服务器实际请求的客户端的地址。      
服务器基于从预检请求获得的信息来判断，是否接受接下来的实际请求。        
服务器所返回的Access-Control-Allow-Methods首部字段将所有允许的请求方法告知客户端，  
返回将所有Access-Control-Request-Headers首部字段将所有允许的自定义首部字段告知客户端。  
此外，服务器端可返回Access-Control-Max-Age首部字段，允许浏览器在指定时间内，无需再发送预检请求，直接用本次结果即可。        
在我们开发过程中出现的浏览器自发起的options请求就是上面的第二种情况。
实际上，跨域请求中的”复杂请求”发出前会进行一次方法是options的preflight request。               
当跨域请求是简单请求时不会进行preflight request,只有复杂请求才会进行preflight request。
跨域请求分两种：简单请求、复杂请求；
符合以下任一情况的就是复杂请求：    
1.使用方法put/delete/patch/post;        
2.发送json格式的数据（content-type: application/json）      
3.请求中带有自定义头部；        
其他情况则可理解为是简单请求。      
为什么跨域的复杂请求需要preflight request？                    
复杂请求可能对服务器数据产生副作用。例如delete或者put,都会对服务器数据进行修改,     
所以在请求之前都要先询问服务器，当前网页所在域名是否在服务器的许可名单中，      
服务器允许后，浏览器才会发出正式的请求，否则不发送正式请求。             
4. 安全方面<span class="emoj">🙉</span> 虽然知道有两个比较关键，死活只想起了XSS，另一是CSRF。            
5. <span class="emoj">🙉</span>引擎不了解，react 没用过，服务端渲染没做过。     
6. 混合H5同步获取，用promise改写callback=-=讲道理一直是这么做，突然问通信都是异步，想同步怎么办，我的   
脑回路一直在终端的小伙子他们的执行都是异步...

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


