## 阅读源码（etherpad） 
makeChangesetTracker -- 比较changeset       
incorporateUserChanges  -- 定时执行     
doIncorpLineSplice  --触发发送修改的消息        
doRepApplyChangeset     
    if (changesetTracker.isTracking())      
    {
      changesetTracker.composeUserChangeset(changes);       
    }
setChangeCallbackTimeout ----   执行changeCallback -- setUserChangeNotificationCallback（handleUserChanges）对changeCallback 进行赋值       
handleUserChanges/collab_client  --- sendMessage 发送 change提交消息        

## 参考文档
[http://fex.baidu.com/blog/2014/04/realtime-collaboration/](http://fex.baidu.com/blog/2014/04/realtime-collaboration/)
[http://www.codecommit.com/blog/java/understanding-and-applying-operational-transformation](http://www.codecommit.com/blog/java/understanding-and-applying-operational-transformation) 
[https://operational-transformation.github.io/ot-for-javascript.html](https://operational-transformation.github.io/ot-for-javascript.html) 
[http://objcer.com/2018/03/05/SharePen-Operational-Transformation/](http://objcer.com/2018/03/05/SharePen-Operational-Transformation/)
