## 编码风格

这份文档仅供统一项目编码风格

#### 基本概念

**实体（Entities）**，实体用于封装企业范围的业务规则。实体可以是拥有方法的对象，也可以是数据结构和函数的集合。如果没有企业，只是单个应用，那么实体就是应用里的业务对象。这些对象封装了最通用和高层的业务规则，极少会受到外部变化的影响。任何操作层面的改动都不会影响到这一层。  
**用例（Use Cases）**，用例是特定于应用的业务逻辑，一般用来完成用户的某个操作。用例协调数据流向或者流出实体层，并且在此过程中通过执行实体的业务规则来达成用例的目标。用例层的改动不会影响到内部的实体层，同时也不会受外层的改动影响，比如数据库、UI 和框架的变动。只有而且应当应用的操作发生变化的时候，用例层的代码才随之修改。  
**接口适配器（Interface Adapters）** ，接口适配器层的主要作用是转换数据，数据从最适合内部用例层和实体层的结构转换成适合外层（比如数据持久化框架）的结构。反之，来自于外部服务的数据也会在这层转换为内层需要的结构。

#### 目录即分层的具体实践

![目录即分层的具体实践](https://github.com/nibilin33/frontend-blog/raw/master/press/guide/img/目录即分层.png)  
>---- example  
>---- mock  
>---- public  
>---- src  
>>---- api  
>>---- assets  
>>---- components  
>>---- directives  
>>---- i18n  
>>---- lib  
>>---- router  
>>---- store  
>>---- utils  
>>---- views  
>>>---- login  
>>>---- \_\_tests\_\_  
>>>---- adapters  
>>>---- entity  
>>>---- interface 
>>>index.vue  
- 具体业务包含自己的适配器,实体,单元测试的目录     
- 实体的目录包含简单的数据模型，核心的业务逻辑  
- 适配器做一些数据的转换        
- .vue 做为用例层，编写用户行为的一些方法，其余的都只负责调用ts文件的方法。    
这边与TS的整合，.vue 文件不使用vue-class-component来达到class的写法，保留之前的写法。   
因为这种写法本身觉得绕了很多弯，是2.x为TS的支持补丁方式(vue-class-component.js 通过gzip 有3.8KB，
源文件大小 11KB。vue-property-decorator.js 通过gzip 有2.4KB ，源文件大小9KB)。3.0会更好地支持，  
至于如何更好地支持，都必然能向下兼容。（3.0兼容性到IE11。）    


planA:    
```
.vue文件
<template>
    <div>
        <button
        v-for="(it,index) in loginType"
        :key="index"
        @click="setLoginType(it)">
        {{it}}</button>
        <p>&nbsp;</p>
         用户名：
         <input v-model="userForm.username"/>
         密码：
         <input v-model="userForm.code"/>
         <button @click="submit">提交</button>
    </div>
</template>
<script>
import StrategyLogin from './adapters/login';
import PlatformApi from '@/lib/PlatformApi';
import { PbxAPI } from './entity/pbx';
import { getLoginConfig } from '@/api/pbx';
import { transformToUse } from './adapters/pbx';
export default {
  data() {
    return {
      loginType: ['notice', 'vote'],
      result: {},
      isShow: false,
      userForm: new PbxAPI().params,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      getLoginConfig()
      .then((res)=> {
          this.userForm = new PbxAPI(transformToUse(res)).params;
          console.log(this.userForm);
      });
    },
    submit() {
      // 只负责接口调用
      new PbxAPI(this.userForm).tramsfrom().submit();
    },
    setLoginType(value) {
      const instance = StrategyLogin.getLoginInstance(value);
      instance.login('12121212');
    },
  },
};
</script>
``` 


```
entity 文件  
// 一个实体考虑它拥有哪些属性，数据，拿着这些能做什么
import { 
  transformToServer,
  transformToUse,
 } from '../adapters/pbx';
import {userData} from '../interface/pbx';

export class PbxAPI {
    private user: userData = { username: '', code: '' }

    constructor(value:userData) {
      this.user = transformToUse(value);
    }
    
    get params() {
      return Object.create(this.user);
    }

    tramsfrom() {
      this.user = transformToServer(this.user);
      return this;
    }

    submit() {
      console.log(this.user, 'submit');
    }
}

```

```
adapters 文件  

import {userDataKeys} from '../interface/pbx';

export const transformToServer = (data:any) => {
// 如果提交的数据需要格式化,比如页面的交互数据为[{id:xx,name:xxx}],提交只需要[id,id,id]
  console.log(data);
  return data;
}

export const transformToUse = (data:any) => {
  // 拿到服务器数据做处理后给页面使用
  // 比如：依据userDataKeys进行复制
  console.log(data);
  return data;
};


```
```
interface 文件
import { keys } from 'ts-transformer-keys';
export interface userData {
    username:string
    code:string
}
export const userDataKeys = keys<userData>();
```
planB:  
```
.vue
<template>
    <div>
        <button
        v-for="(it,index) in loginType"
        :key="index"
        @click="setLoginType(it)">
        {{it}}</button>
        <p>&nbsp;</p>
         用户名：
         <input v-model="userForm.username"/>
         密码：
         <input v-model="userForm.code"/>
         <button @click="submit">提交</button>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StrategyLogin from './adapters/login';
import { PbxAPI,userData } from './entity/pbx';
import { getLoginConfig } from '@/api/pbx';
import { transformToUse } from './adapters/pbx'
export default class Login extends Vue {
    isShow: boolean = false
    userForm: userData = { username: '', code: '' }
    loginType: Array<string> = ['Notice', 'Vote']
    result:Object = {}
    created() {
        this.init();
    }
    init() {
      getLoginConfig()
      .then((res)=> {
          //即使我在construct 定义了userData的接口，后端数据进来如果没有做任何过滤，  
          //里面有什么属性依然什么值都能进去，类型不符都不会有什么问题，  
          //那么依然需要适配器在每个进入实体数据时候做处理。
          this.userForm = new PbxAPI(res).params;
          console.log(this.userForm);
      });
    }
    submit() {
      // 只负责接口调用
      new PbxAPI(this.userForm).tramsfrom().submit();
    }
    setLoginType(value:string) {
      const instance = StrategyLogin.getLoginInstance(value);
      instance.login('12121212');
    }
}
</script>
```
1.业务逻辑剥离的.vue，剩下一些什么？控制显隐，文案切换，渲染？对于最大核心只有渲染模板的功能，  
是否需要多那么绕。  
2.vue文件lang=ts？ 统一。   
jsx  Duplicate declaration "h"
其他 any/@ts-ignore       
#### 文件名文件结构

1.文件名全部为小写或包含-  
2.单文件组件的顶级元素的顺序 template,script,style  
3.有需要的生命周期按照被调用的顺序书写  
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- activated
- deactivated
- beforeDestroy
- destroyed
```
<template>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  watch: {
  },
  created() {
  },
  beforeDestroy() {
  },
  methods: {
  }
};
</script>
<style lang="scss">
</style>
```

#### 命名规则

- css 采用 BEM 命名规则    
eg：    
.listCard 块，高层次组件  
.listCard\_\_title 元素  
.listCard--feature 修饰符，表示不同状态    

- script 采用驼峰  
类的命名:首字母必须采用大写的形式  
变量的命名：首字母小写  

#### 样式变量  
样式中有需要颜色的地方，统一定义到body下面。  
给多彩提供脚本直接在当前替换能力。  
兼容性问题：css-vars-ponyfill  
```
document.body.style.setProperty('--bgColor','red'); 
```     
eg ：    
body{
  --bgColor: blue;
}    
使用:    
```
<style lang="scss" scoped>
.title{
  color:var(--bgColor);
}
</style>
```
#### 注释

尽量利用函数名称，参数或者返回值自身就足够传达信息。  
短函数不需要太多描述，为只做一件事的短函数选个好名字，比写函数头注释要好。  
**好注释**  
1.对意图解释的注释  
2.用于警告其他程序员会出现某种后果的注释  
3.TODO 注释  
**写注释的常见动机之一是糟糕代码的存在，与其花时间编写解释你搞出的**  
**糟糕的代码的注释，不如花时间清洁代码。如果编程语言足够有表达里，就不那么需要注释**  
eg:
```
// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow: () => number = Date.now
这段代码第一反应让人觉得没有必要，但加了上面的解释，达到认同。  
```
```
这段代码从命名完全看不出想做什么，为什么这么做，作者的解释，让阅读代码者更快地理解。    
function createInvoker(
  initialValue: any,
  instance: ComponentInternalInstance | null
) {
  const invoker: Invoker = (e: Event) => {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (e.timeStamp >= invoker.lastUpdated - 1) {
      const args = [e]
      const value = invoker.value
      if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          callWithAsyncErrorHandling(
            value[i],
            instance,
            ErrorCodes.NATIVE_EVENT_HANDLER,
            args
          )
        }
      } else {
        callWithAsyncErrorHandling(
          value,
          instance,
          ErrorCodes.NATIVE_EVENT_HANDLER,
          args
        )
      }
    }
  }
  invoker.value = initialValue
  initialValue.invoker = invoker
  invoker.lastUpdated = getNow()
  return invoker
}
```
#### 函数

函数的第一个规则是要短小，第二条规则是只做一件事。

#### 项目 README

- 运行命令
- 线上的示例或者最后的运行环境
- 相关的文档链接
- 相关人员的联系方式或群
- 代码组织结构图  

## 开发前可考虑的事情       
- 是否满足最小复杂度  
- 设计时为维护工作的程序员考虑  
- 信息隐藏： 这类，方法，组件该隐藏什么 
- 找出容易改变的区域做划分  
- 考虑潜在的变化，让这些变化的影响或范围与发生该变化的可能性成比  
- 如何便于测试  
- 层次性： 比如当需要调用设计不佳的旧代码的时候，就要编写一层同旧  
代码交互的一层，这一层要隐藏代码的低劣质量，同时提供一组一致的服务。  
- 参考常用的设计模式形成类似的解决方案  
## OOP的设计步骤  
- 辨识对象及其属性（方法和数据）  
- 确定可以对各个对象进行的操作  
- 确定各个对象能对其他对象进行的操作  
- 确定对象的哪些部分对其他对象可见，哪些部分而已是public，哪些是private  
- 定义每个对象的公开接口,即向其他对象暴露的数据及方法  
## 测试驱动开发的具体实践  
- 1.先编写伪代码，只有方法名以及流程    
- 2.编写测试用例，描述功能点    
- 3.交叉编写模块测试用例    
- 4.具体逻辑开发  
先编写测试，我们就能设身处地从代码使用者的角度考虑问题。  
这种方式确保我们设计的每一个函数都由一系列测试驱动。  
编写验证可考虑的类型：  
- 正向测试： 当前置条件满足时，验证代码的结果确实符合预期。  
- 反向测试： 当前置条件或输入不符合要求时，代码能优雅地进行处理。  
- 异常测试： 代码在应该抛出异常的地方正确地抛出异常。  
[jest官网](https://jestjs.io/docs/en/getting-started)
```
import { PbxAPI } from '../entity/pbx';
import { transformToUse } from '../adapters/pbx';

test('测试构建函数对数据的限制', ()=> {
    const pbxWrong = new PbxAPI(Object.create({id:''})).params;
    expect(pbxWrong).toEqual({username:'',code:''});
    const pbxRight = new PbxAPI().params;
    expect(pbxRight).toEqual({username:'',code:''});
})
test('测试接口转换的结果', ()=> {
    const data =  transformToUse({id:'xxx'});
    expect(data).toEqual({username:'',code:''});
})
```
其实最后会发现，最好写测试的就是无副作用的函数，只需要考虑，输入，输出。  
## Typescript 运用

1.interface ,type
使用接口来确保类拥有的指定结构，或者约束对象。  
接口好比一个协议，当我们签署它的时候，必须遵守他的规则。

```
interface ChinaMobile {
    name: string;
    website: string;
}
interface ChinaMobileList {
    // 动态属性
    [phone: string]: ChinaMobile
}
```

2.enum  
旧版：

```
const typeMach = {
    image: 'browse_original_image',
    file: 'down_file'
}
```

改版：

```
enum typeMach {
    image = 'browse_original_image',
    file = 'down_file'
}
```

3.class,extends  
在 .jsx 文件里，泛型可能会被当做 jsx 标签
```
const toArray = <T>(element: T) => [element]; // Error in .jsx file.  
```
修改方式
```
const toArray = <T extends {}>(element: T) => [element]; // No errors.  
```
<details>
<summary>旧版代码，点击查看详细</summary>
<code> 
export const network = { 

        post(url, data, loading = false, warn = true) {  
            service.loading = service.loading||loading;  
            service.warn = warn;  
            return Promise.resolve(  
                service.post(url, {  
                    data  
                })  
            )  
        },

    get(url, data, loading = false, warn = true) {
        service.loading = service.loading||loading;
        service.warn = warn;
        return Promise.resolve(
            service.get(url + (IS_IE_BROWSER ? `?T=${ new Date().getTime()}` : ''), {
                params: data ? data : {}
            })
        )
    },

    delete(url, data, loading = true, warn = true) {
        service.loading = loading;
        service.warn = warn;
        return Promise.resolve(
            service.delete(url, {
                params:data
            })
        )
    },

    put(url, data, loading = true, warn = true) {
        service.loading = loading;
        service.warn = warn;
        return Promise.resolve(
            service.put(url, {
                data
            })
        )
    },

    patch(url, data, loading = true, warn = true) {
        service.loading = loading;
        service.warn = warn;
        return Promise.resolve(
            service.patch(url, {
                data
            })
        )
    }};  
    export default network;  
</code>

</details>


<details>
<summary>改版代码，点击查看详细</summary>

```
  import axios from 'axios';
  const CancelToken = axios.CancelToken;
  const instance = axios.create({
      headers: {
          'Content-Type': 'application/json',
      },
      transformRequest: [function (data) {
          return JSON.stringify(data);
      }],
  });

  /**
  *
  * @description 阻止重复提交，错误处理，等待效果，过期处理
  */

  interface customConfig {
      url:string,
      data?: any,
      isLoading?: boolean
      error?: string
  }
  class Axios {
      private pedding: Object
      constructor() {
          this.pedding = {};
          this.intercepteRequest();
          this.intercepteResponse();
      }

      post(params:customConfig) {
          return instance.post(params.url,{data:params.data});
      }

      get(params:customConfig) {
          return instance.get(params.url,
              { params: params.data? params.data : {} });
      }

      delete(params:customConfig) {
          return instance.delete(params.url,
              { params: params.data? params.data : {} });
      }

      put(params:customConfig) {
          return instance.put(params.url,{data:params.data});
      }

      patch(params:customConfig) {
          return instance.patch(params.url,{data:params.data});
      }

      cancel() {
          const source = CancelToken.source();
          source.cancel('Operation canceled by the user');
      }

      intercepteRequest(options?:any) {
          instance.interceptors.request.use((config) => {
              // do something with the request data
              console.log('Request was sent',config);
              return config;
            }, (error) => {
              return Promise.reject(error);
            });
      }

      intercepteResponse(options?:any) {
          instance.interceptors.response.use((response) => {
              // do something with the response data
              console.log('Response was received');
              return response;
          }, (error) => {
              return Promise.reject(error);
          }); 
      }
  }
  export default Axios;
```
</details>

4.namespace  
命名空间，又称内部模块，用于组织一些具有某些内在联系的特性和对象，使代码结构更清晰。

```
单例模式  
namespace Singleton {
  export function someMethod() {}
}
Singleton.someMethod();
```

<details>
  <summary>旧版代码，点击查看详细</summary>
  <pre>
  <code>
authLogin() {
let path = this.$route.path;
path = path.split('/ume')[1]
switch (path) {
    case '/extension':
        let platformExtension = new PlatformApi(function() {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        clientId: 'web-extension'
                    }
                })
            })
        }, extensionLogin);
        platformExtension.setRequestTimeOut(3000);
        platformExtension.login(this.$route.query.code).then(token => {
            this.refreshToken('extension');
            this.setUserId(token.userId);
            this.$router.push({ path: '/ume/web_extension' });
        }).catch((error) => {
            this.$router.push({ path: '/pcError/error', query: { type: 'web-extension', path: path, code: this.$route.query.code } })
        });
        break;
    case '/notice':
        let platformNotice = new PlatformApi(application, login);
        platformNotice.consoleLog("notice logining");
        platformNotice.setRequestTimeOut(3000);
        platformNotice.login(this.$route.query.code).then(token => {
            sessionStorage.setItem('notice', JSON.stringify(token));
            this.refreshToken('notice');
            this.setUserId(token.userId);
            platformNotice.consoleLog("notice login success:" + JSON.stringify(token));
            this.handleNotice();
        }).catch((error) => {
            platformNotice.consoleLog("notice login fail");
            this.$router.push({ path: '/pcError/error', query: { type: 'yealink-bulletin', path: path, code: this.$route.query.code } })
        });
        break;
    case '/meeting':
        let platformMeeting = new PlatformApi(getApplication, umeLogin);
        platformMeeting.consoleLog("meeting logining");
        platformMeeting.setRequestTimeOut(3000);
        platformMeeting.login(this.$route.query.code).then(res => {
            platformMeeting.consoleLog("meeting login success" + JSON.stringify(res));
            if (res.personal === null || typeof res.personal === "undefined") {
                this.$router.push({ path: '/pcError/error', query: { type: 'yealink-conference', path: path, code: this.$route.query.code } })
            } else {
                sessionStorage.personal = JSON.stringify({ personal: res.personal });
                this.refreshToken('meeting');
                this.handleReservation();
            }
        }).catch(res => {
            platformMeeting.consoleLog("meeting login fail");
            this.$router.push({ path: '/pcError/error', query: { type: 'yealink-conference', path: path, code: this.$route.query.code } })
            //this.$router.push('/uc/login')
        });
        break;
    case '/vote':
        let platformNoticeVote = new PlatformApi(applicationVote, loginVote);
        platformNoticeVote.consoleLog("vote logining");
        platformNoticeVote.setRequestTimeOut(3000);
        platformNoticeVote.login(this.$route.query.code).then(token => {
            sessionStorage.setItem('vote', JSON.stringify(token));
            this.refreshToken('vote');
            this.setUserId(token.userId);
            platformNoticeVote.consoleLog("vote login success:" + JSON.stringify(token));
            this.deleteLoading();
            console.log("votelist--------")
            if (this.$route.query.groupId) {
                this.$router.push({ path: '/vote/poll', query: { groupId: this.$route.query.groupId } });
            } else {
                this.$router.push({ path: '/vote/list', query: { id: this.$route.query.id } });
            }
        }).catch((error) => {
            platformNoticeVote.consoleLog("vote login failed");
            this.$router.push({ path: '/pcError/error', query: { type: 'yealink-vote', path: path, code: this.$route.query.code } })
        });
        break;
    case '/changePwd':
        let platformPwd = new PlatformApi(function() {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        clientId: 'yealink-pwdChange'
                    }
                })
            })
        }, pwdLogin);
        platformPwd.setRequestTimeOut(3000);
        platformPwd.login(this.$route.query.code).then(token => {
            this.$router.push({ path: '/changePassword', query: { fullJid: token.bareJid } });
        }).catch((error) => {
            this.$router.push({ path: '/pcError/error' })
        });
        break;
    case '/questionnaire':
        let platQuestion = new PlatformApi(applicationQuestion, questionLogin);
        platQuestion.setRequestTimeOut(3000);
        platQuestion.login(this.$route.query.code).then(token => {
            sessionStorage.setItem('questionnaire', JSON.stringify(token));
            this.refreshToken('questionnaire');
            this.setUserId(token.userId);
            platQuestion.consoleLog("questionnaire login success:" + JSON.stringify(token));
            this.$router.push({ path: '/question/list', query: { id: this.$route.query.id } });
        }).catch((error) => {
            platQuestion.consoleLog("questionnaire login failed");
            this.$router.push({ path: '/pcError/error', query: { type: 'yealink-questionnaire', path: path, code: this.$route.query.code } })
        });
        break;
    case '/forward':
        let platformForward = new PlatformApi(applicationForward, forwardLogin);
        platformForward.consoleLog("forward logining");
        platformForward.setRequestTimeOut(3000);
        platformForward.login(this.$route.query.code).then(token => {
            sessionStorage.setItem('forward', JSON.stringify(token));
            this.refreshToken('forward');
            this.setUserId(token.userId);
            platformForward.consoleLog("forward login success:" + JSON.stringify(token));
            this.deleteLoading();
            this.$router.push({ path: '/self/forward', query: { id: this.$route.query.id } });
        }).catch((error) => {
            platformForward.consoleLog("forward login failed");
            this.$router.push({ path: '/pcError/error', query: { type: 'yealink-forward', path: path, code: this.$route.query.code } })
        });
        break;
    case '/imessage':
        let platformIM = new PlatformApi(function() {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        clientId: 'yealink-smsgateway'
                    }
                })
            })
        }, imLogin);
        platformIM.setRequestTimeOut(3000);
        platformIM.login(this.$route.query.code).then(token => {
            sessionStorage.setItem('imessage', JSON.stringify(token));
            this.refreshToken('imessage');
            this.$router.push({ path: '/ume/self/imessage'});
        }).catch((error) => {
            this.$router.push({ path: '/pcError/error' })
        });
        break;
    default:
        console.error('type error');
        break;
}
    }
}
  </code> 
    </pre>
</details>
<details>
 <summary>改变后代码，点击查看详细</summary>
 利用策略者模式消除switch,if，利用namespace组织登录相关模块
 <pre>
 <code>
  authLogin() {
      const value = this.$route.path;
      const code =  this.$route.query.code;
      const instance = StrategyLogin.getLoginInstance(value);
      instance.login(code);
  },
 </code>
<code>
import * as app from '@/views/login/entity';
class StrategyLogin {
    static getLoginInstance(type:string) {
        return new app.login[`${type}`]();
    }
}
export default StrategyLogin;
上面这种写法会报类型错误，于是改成下面这种写法
import { login }from '@/views/login/entity';
class StrategyLogin {
  static getLoginInstance(type:any) {
    const allInstance = Object.values(login);
    let curentInstance = allInstance.findIndex((it)=>{
        return it.toString().toLowerCase().indexOf(type) > -1;
    });
    return new allInstance[curentInstance]();
  }
}
export default StrategyLogin;
 </code>
 <code>
import {NoticeAPI} from './notice';
export namespace login {
    export class Notice extends NoticeAPI{
    }
}
 </code>
 </pre>
</details>

5.decorators (装饰者模式+切面编程,reflect-metadata)  
```
tsconfig.json
compilerOptions:{
"experimentalDecorators": true
}
```
面向切面编程主要用于抽离与核心业务逻辑无关的功能，如日志统计、埋点、异常处理等等，  
可以提高业务模块功能的纯净度与被分离模块的复用性。  
装饰器用来为元素添加一些额外的逻辑或者元数据。
装饰器：类，属性，方法，参数  
类装饰器：接受一个类构造函数作为参数的函数  
方法装饰器：接受属性的对象，属性名和一个可选的参数  
属性装饰器： 接受属性的对象和属性的属性名  
参数装饰器： 接受被装饰参数的方法的对象，方法的名字和参数在参数列表中的索引。  
reflect-metadata：反射元数据 API  
元数据是指程序本身的信息数据，元数据存储在程序集中;
反射就是在运行时动态获取一个对象的一切信息：方法/属性等等。  
eg：       
埋点   (google 分析？) 
```
/**
 * @interface UserBehavior
 * eventProperty：事件属性，事件描述
 */
interface UserBehavior{
  module?: string,
  eventName: string,
  eventProperty: string,
  version?: string,
  date?: Date,
  dns?:string,
  connect?:string,
  ttfb?:string,
  basePage?:string,
  frontEnd?:string
}

export function Log(value:UserBehavior) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    const timing = window.performance.timing;
    Object.assign(value, {
        date: new Date(),
        version: navigator.platform,
        module: name,
        dns: timing.domainLookupEnd - timing.domainLookupStart,
        connect: timing.connectEnd - timing.connectStart,
        ttfb: timing.responseStart - timing.connectEnd,
        basePage: timing-responseEnd - timing.responseStart,
        frontEnd: timing.loadEventStart - timing.responseEnd
    })
  };
}
import { Log } from '@/utils/log';
export class NoticeAPI {
    @Log({eventName: 'notice-login',eventProperty: '用户登录'})
    login(code:string) {
        apiLogin(code);
    }
}
```
参数的提交的各种处理，校验也可以用这种方式    
```
import "reflect-metadata";
export function format(target: any, name: string|symbol, descriptor: PropertyDescriptor) {
    const savedValue = descriptor.value;
    // 如果多个参数表 （...args:any[]）
    descriptor.value = (args:string) =>{
        console.log(args,"before");
        args = 'dddd';
        return Reflect.apply(savedValue,target,[args]);
    }
}
import { format } from '@/views/login/adapters/transform-params';
export class VoteAPI {
    @format
    login(code:string) {
        console.log(code,"after");//此时after的值为'ddd'
    }
}
```
6.泛型 T ，允许使用的时候定义类型(通用函数的考虑)  
eg：

```
geEntities<T>(url:string):void{
  axois.get(url)
    .then() {
      //todo
    }
}
geEntities<User>("/api/users"):void{

}
```
7.Omit
有时候我们需要复用一个类型，  
但是又不需要此类型内的全部属性，  
因此需要剔除某些属性 -- Omit
```
interface User {
    username: string
    id: number
    token: string
    avatar: string
    role: string
}
type UserWithoutToken = Omit<User, 'token'>
```
## 常用的设计模式


