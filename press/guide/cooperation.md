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


http://fex.baidu.com/blog/2014/04/realtime-collaboration/       
http://www.codecommit.com/blog/java/understanding-and-applying-operational-transformation       