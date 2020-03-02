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
const quickSort=()=>{

}
const partition=(arr,start,end)=>{
    let priv = arr[start];
    let mask = start;
    for(let i=start+1;i<end;i++) {
        if(arr[i]<priv) {
            mark++;
            let tmp = arr[mark];
        }
    }

}
```

### 二叉树
![前序+中序](https://pic.leetcode-cn.com/beff309937462b352940c1925de8ff50c22b65bada872cf286b0228a45054ea2-2.jpg)