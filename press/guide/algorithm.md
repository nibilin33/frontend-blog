## 算法之旅 
处于工作的状态，算法这个东西基本是说再见了。    
重要且一次次又一次想尝试捡起来的...     

## 排序        
1. 冒泡排序     
相邻元素两两比较，当一个元素大于右侧相邻元素，交换他们的位置。  
每一次都把最重的沉在了最右边，所以交换的时候最右的不用再次交换。    
每一轮都要遍历所有元素，遍历n-1轮
```js
const bubble = (array) => {
    for(let i=0;i<array.length-1;i++) {
        for(let j=0;j<array.length-i;j++) {
            let temp = 0;
            if(array[j]>array[j+1]) {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
```
::: tip
冒泡的优化         
1. 如果发现当前已经有序，就跳出比较。   
2. 记录最后一次交换的位置，在这之后的就不用在比较了。       
::: 

2. 快速排序算法  
在每一轮挑选一个基准元素， 让其他比它大的移动到数列一边，比它小的   
另一边。   
     
```js
const quickSort=(arr,start,end)=>{
    if(start>=end) {
        return;
    }
    let partionIndex = partition(arr,start,end);
    // 分治，基准两边同时进行排序，递归地进行
    quickSort(arr,start,partionIndex-1);
    quickSort(arr,partionIndex+1,end);
}
const partition=(arr,start,end)=>{
    let priv = arr[start];
    let mark = start;
    // 比基准小的都仍到基准左边
    for(let i=start+1;i<end;i++) {
        if(arr[i]<priv) {
            mark++;
            let tmp = arr[mark];
            arr[mark] = arr[i];
            arr[i] = tmp;
        }
    }
    // 最后把基准移动到mark的位置
    arr[start] = arr[mark];
    arr[mark] = priv;
    return mark;

}
```
3. 堆排序   
堆是具有以下性质的完全二叉树：每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆；或者每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆。      
大顶堆：arr[i] >= arr[2i+1] && arr[i] >= arr[2i+2]  

小顶堆：arr[i] <= arr[2i+1] && arr[i] <= arr[2i+2]          
堆排序的基本思路：      
a.将无需序列构建成一个堆，根据升序降序需求选择大顶堆或小顶堆;       
b.将堆顶元素与末尾元素交换，将最大元素"沉"到数组末端;       
c.重新调整结构，使其满足堆定义，然后继续交换堆顶元素与当前末尾元素，反复执行调整+交换步骤，直到整个序列有序。   

3. 计数排序    

## Bitmap算法       
[漫画：什么是Bitmap算法](https://zhuanlan.zhihu.com/p/54783053?utm_source=wechat_timeline)      
所谓的BitMap就是用一个bit位来标记某个元素所对应的value，而key即是该元素，由于BitMap使用了bit位来存储数据，因此可以大大节省存储空间。        
应用范围：快速查找、去重、排序、压缩数据等。    
## HashMap      
[漫画：什么是HashMap？](https://zhuanlan.zhihu.com/p/31610616)    
HashMap中实现的散列表是一个链表类型的数组，即数组+链表，用来存储key-value数据对。       
散列表的做法是将key映射到数组的某个下标，存取的时候通过key获取到下标（index）然后通过下标直接存取。     
美团面试题：[hashmap的实现](https://www.cnblogs.com/xuhaopei/articles/12668064.html)   
js 模拟实现hashtable,核心需要的函数如下     
```js
class HashTable{
    constructor(){
    }
    /**
     * 哈希函数
     * 作用：返回key在哈希表的中的下标位置
     * 参数：key（String） size(哈希表长度)
     */
    hashcode(){
    }
    push(key,value){
    }
    get(key){
    }
    remove(key){
    }
    size(){
    }
    /**
     * 哈希表扩容
     * 参数limit哈希表新的长度。
    */
    resize(limit){
    }
    /**
     * 打印哈希表
     */
    toString(){
    }
}
```    
[hashtable.js](https://github.com/nibilin33/Interviews/blob/master/codes/hashtable.js)      
## 入门到放弃：动态规划        
[漫画：什么是动态规划](https://zhuanlan.zhihu.com/p/31628866)  
### 思想      
动态规划解决的问题多数有重叠子问题这个特点，为减少重复计算，对每一个子问题只解一次，将其不同阶段的不同状态保存在一个二维数组中。      
### 一般步骤             
确定决策序列                     
明确问题状态                 
验证优化原理              
构造、求解优化值递归方程            
回溯构造优化解          
### 例子   
1. leetcode  70.爬楼梯      
每次可以爬 1 或 2 个台阶。有多少种不同的方法可以爬到楼顶呢？     
到达第i阶的方法总数就是到第(i-1)阶和第(i−2) 阶的方法数之和。        
dp[i]=dp[i-1]+dp[i-2]           
```js
var climbStairs = function(n) {
    if(n===1) {
        return 1;
    }
    let dp=[];
    dp[1]=1;
    dp[2]=2;
    for(let i=3;i<=n;i++) {
        dp[i]=dp[i-1]+dp[i-2];
    }
    return dp[n];
};
```

## 滑动窗口算法        
滑动窗口算法 的本质是 双指针法中的左右指针法 ,      
滑动窗口算法是双指针法中的左右指针法更为形象的一种表达方式。        
求解的步骤与模板        
滑动窗口算法的解题步骤（以在字符串S中,找最小的子元素使之包含字符串T为例）：       
1. 初始化窗口         
我们在字符串 S 中使用双指针中的左右指针技巧，初始化 left = right = 0，把索引闭区间 [left, right] 称为一个「窗口」。

2. 寻找可行解        
我们先不断地增加 right 指针扩大窗口 [left, right]，直到窗口中的字符串符合要求（包含了 T 中的所有字符）。

3. 优化可行解        
此时，我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right]，直到窗口中的字符串不再符合要求（不包含 T 中的所有字符了）。同时，每次增加 left，我们都要更新一轮结果。

4. 滑动窗口,直至一次遍历结束     
重复第 2 和第 3 步，直到 right 到达字符串 S 的尽头。

[无重复字符的最长子串](https://github.com/nibilin33/Interview-Days/blob/master/code-practice/3-5/3.%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.js)            
## 二叉树
![前序+中序](https://github.com/nibilin33/frontend-blog/raw/master/press/guide/img/beff309937462b352940c1925de8ff50c22b65bada872cf286b0228a45054ea2-2.jpg)   
1. 中序遍历首先遍历左子树，然后访问根结点，最后遍历右子树。   
2. 前序遍历根左右。 
3. 高度平衡二叉树:一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。   
```js
    // 高度计算
    const height = (node)=>{
        if(!node) {
            return -1;
        }
        return 1+Math.max(height(node.left),height(node.right));
    }
``` 
## 二叉堆       
[漫画：什么是二叉堆？](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653195207&idx=2&sn=12689c6c1a92e7ec3cce4d423019ec2a&chksm=8c99f91dbbee700b8e760d06b27582037ab0713295dacf2b5a7a7f954c0032fe860aa0bf8b74&scene=21#wechat_redirect)      
[优先级队列的实现原理](https://leetcode-cn.com/circle/article/bNtb4J/)      
二叉堆是一种特殊的堆，其实质是完全二叉树。      
二叉堆有两种：最大堆和最小堆。      
最大堆是指父节点键值总是大于或等于任何一个子节点的键值。        
而最小堆恰恰相反，指的是父节点键值总是小于任何一个子节点的键值。        
二叉堆主要就是上浮和下沉，来维护堆的性质（堆有序）。
优先级队列是基于二叉堆实现的，主要操作是插入和删除。    
插入是先插到最后，然后上浮到正确位置；删除是调换位置后再删除，然后下沉到正确位置。    
优先队列不再遵循先入先出的原则，而是分为两种情况：
最大优先队列，无论入队顺序，当前最大的元素优先出队。        
最小优先队列，无论入队顺序，当前最小的元素优先出队。         
[二叉堆具体实现](https://github.com/nibilin33/Interviews/blob/master/codes/%E4%BA%8C%E5%8F%89%E5%A0%86.js)
```js
class Heap{
}
```
## 图遍历算法(DFS/BFS)      
### DFS(递归) 
从图中的某个顶点v出发，访问此顶点，然后依次从v的未被访问的邻接点出发深度优先遍历图，  
直至图中所有和v有路径相通的顶点都被访问到； 
若此时图中尚有顶点未被访问，则另选图中一个未被访问的顶点作起始点，重复上述过程，直至图中所有顶点都被访问到为止。        
```js
function Node(val, neighbors) {
     this.val = val === undefined ? 0 : val;
     this.neighbors = neighbors === undefined ? [] : neighbors;
 };
var cloneGraph = function(node) {
    let visited = {};
    function dfs(node) {
        if(!(node instanceof Node)) {
            return node;
        }
        if(visited[node.val]) {
            return visited[node.val];
        }
        let clone = new Node(node.val,[]);
        visited[node.val] = clone;
        for(let i=0;i<node.neighbors.length;i++) {
            let item = node.neighbors[i];
            clone.neighbors.push(dfs(item));
        }
        return clone;

    }
    return dfs(node);
};
```
### BFS
从图中某顶点v出发，在访问了v之后依次访问v的各个未曾访问过的邻接点， 
然后分别从这些邻接点出发依次访问它们的邻接点，并使得先被访问的顶点的邻接点先于后被访问的顶点的邻接点被访问，    
直至图中所有已被访问的顶点的邻接点都被访问到。如果此时图中尚有顶点未被访问，则需要另选一个未曾被访问过的顶点作为新的起始点，       
重复上述过程，直至图中所有顶点都被访问到为止。  

```js
var cloneGraph = function(node) {
    let visited = {};
    function bfs(node) {
        if(!(node instanceof Node)) {
            return node;
        }
        let clone = new Node(node.val,[]);
        visited[clone.val] = clone;
        let visiteque = [];
        visiteque.unshift(node);
        while(visiteque.length){
            let tmp = visiteque.pop();//当前访问的节点
            tmp.neighbors.forEach((item)=>{
                if(!visited[item.val]) {//如果临节点未访问，进入访问队列，在当前节点的临接节点都访问过后作为新的遍历节点
                    visited[item.val] = new Node(item.val,[]);
                    visiteque.unshift(item);
                }
                visited[tmp.val].neighbors.push(visited[item.val]);
            })
        }
        return clone;
    }
    return bfs(node);
};
```

## 回溯算法     
回溯算法的基本思想是：从一条路往前走，能进则进，不能进则退回来，换一条路再试。      
回溯算法的框架：    
```
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```
典型问题：全排列        
  
```js
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
var permute = function(nums) {
    let result = [];
    function backtrack(list){
        if(nums.length == list.length) {
            console.log(list);
            let copy = JSON.parse(JSON.stringify(list));
            result.push(copy);
            return;
        }
        for(let i=0;i<nums.length;i++) {
            if(list.indexOf(nums[i])>-1) {
                continue;
            }
            list.push(nums[i]);
            backtrack(list);
            list.pop();
        }
    }
    backtrack([]);
    return result;
};
```