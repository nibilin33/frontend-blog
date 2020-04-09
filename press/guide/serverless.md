Serverless 这个名词最近出现频率有点小高，让我有点好奇， 
所以买了本闲暇翻一下，补补文盲,做一些简单的实践。     
## 什么是serverless
Serverless 它是由开发者实现的服务端逻辑运行在无状态的计算容器中，它是由事件触发，完全被第三方管理的。
分为 Backend as a Service(BaaS) 和 Functions as a Service(FaaS) 两种。
比如 HTTP 请求，API Gateway 接受请求、解析和认证，传递对应参数给云函数平台，平台中执行对应回调函数，配合 DB、MQ 等 BaaS 服务在特定容器中完成计算，最终将结果返回给用户。函数执行完成后，一般会被 FaaS 平台销毁，释放对应容器，等待下一个函数运行。  

## Fission Linux 环境搭建   
::: tip  
目前流行的Fass平台有以下几个：  
1. OpenWhisk    
2. Fission    
3. Kubeless    
4. OpenFaaS    
目前主流开源平台都是基于Kebernetes 和 Docker实现。
::: 
参考[install-fission](https://docs.fission.io/docs/installation/#install-fission)   
1. 安装kubectl    
```
curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.18.0/bin/linux/amd64/kubectl      
chmod +x ./kubectl  
mv ./kubectl /usr/local/bin/kubectl 
kubectl version --client    
出现下面一串安装成功        
Client Version: version.Info{Major:"1", Minor:"18", GitVersion:"v1.18.0", GitCommit:"9e991415386e4cf155a24b1da15becaa390438d8", GitTreeState:"clean", BuildDate:"2020-03-25T14:58:59Z", GoVersion:"go1.13.8", Compiler:"gc", Platform:"linux/amd64"}

```
2. 安装Minikube
```
查看是否支持虚拟化，如果有输出就是支持
grep -E '(svm|vmx)' /proc/cpuinfo   
如果不支持，开启虚拟化  
modinfo kvm_intel | grep nested 
modprobe -r kvm-intel
modprobe kvm-intel nested=1
cat /sys/module/kvm_intel/parameters/nested 
```

## 遇到的问题       
