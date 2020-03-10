## 算法之旅 
处于工作的状态，算法这个东西基本是说再见了。    
重要且一次次又一次想尝试捡起来的...     

### 排序        
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

### 入门到放弃：动态规划        
思想：      
动态规划解决的问题多数有重叠子问题这个特点，为减少重复计算，对每一个子问题只解一次，将其不同阶段的不同状态保存在一个二维数组中。      
一般步骤：      
确定决策序列                     
明确问题状态                 
验证优化原理              
构造、求解优化值递归方程            
回溯构造优化解          
算法复杂性：            
动态规划递归方程往往不能直接用递归实现, 会引发大量重复计算,算法的计算量将非常可观。     
最好是用迭代法求解动态规划法列出的递归方程          
迭代实现需要存贮所有子问题的优化解的值，        
因此动态规划法设计的算法往往需要较大的存储空间      
算法的复杂性来自子问题的数目,通常子问题的数目往往很大       

### 滑动窗口算法        
滑动窗口算法 的本质是 双指针法中的左右指针法 ,      
滑动窗口算法是双指针法中的左右指针法更为形象的一种表达方式。        
求解的步骤与模板        
滑动窗口算法的解题步骤（以在字符串S中,找最小的子元素使之包含字符串T为例）：       
（1） 初始化窗口         
我们在字符串 S 中使用双指针中的左右指针技巧，初始化 left = right = 0，把索引闭区间 [left, right] 称为一个「窗口」。

（2） 寻找可行解        
我们先不断地增加 right 指针扩大窗口 [left, right]，直到窗口中的字符串符合要求（包含了 T 中的所有字符）。

（3） 优化可行解        
此时，我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right]，直到窗口中的字符串不再符合要求（不包含 T 中的所有字符了）。同时，每次增加 left，我们都要更新一轮结果。

（4） 滑动窗口,直至一次遍历结束     
重复第 2 和第 3 步，直到 right 到达字符串 S 的尽头。

[无重复字符的最长子串](https://github.com/nibilin33/Interview-Days/blob/master/code-practice/3-5/3.%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.js)            
### 二叉树
![前序+中序](https://pic.leetcode-cn.com/beff309937462b352940c1925de8ff50c22b65bada872cf286b0228a45054ea2-2.jpg)