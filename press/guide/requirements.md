## 介绍

这份文档仅供统一项目编码风格

#### 基本概念

**实体（Entities）**，实体用于封装企业范围的业务规则。实体可以是拥有方法的对象，也可以是数据结构和函数的集合。如果没有企业，只是单个应用，那么实体就是应用里的业务对象。这些对象封装了最通用和高层的业务规则，极少会受到外部变化的影响。任何操作层面的改动都不会影响到这一层。  
**用例（Use Cases）**，用例是特定于应用的业务逻辑，一般用来完成用户的某个操作。用例协调数据流向或者流出实体层，并且在此过程中通过执行实体的业务规则来达成用例的目标。用例层的改动不会影响到内部的实体层，同时也不会受外层的改动影响，比如数据库、UI 和框架的变动。只有而且应当应用的操作发生变化的时候，用例层的代码才随之修改。  
**接口适配器（Interface Adapters）** ，接口适配器层的主要作用是转换数据，数据从最适合内部用例层和实体层的结构转换成适合外层（比如数据持久化框架）的结构。反之，来自于外部服务的数据也会在这层转换为内层需要的结构。

#### 目录即分层的具体实践
![Alt text](/guide/img/目录即分层.png)

#### 文件名文件结构

1.文件名全部为小写或包含-  
 2.单文件组件的顶级元素的顺序 template,script,style  
 3.script 的

#### 命名规则

css 采用 BEM 命名规则  
例：  
.ListCard 块，高层次组件  
.ListCard\_\_title 元素  
.ListCard--feature 修饰符，表示不同状态

#### 注释

尽量利用函数名称，参数或者返回值自身就足够传达信息。  
短函数不需要太多描述，为只做一件事的短函数选个好名字，比写函数头注释要好。  
**好注释**  
1.对意图解释的注释  
2.用于警告其他程序员会出现某种后果的注释  
3.TODO 注释  
**写注释的常见动机之一是糟糕代码的存在，与其花时间编写解释你搞出的**  
**糟糕的代码的注释，不如花时间清洁代码。如果编程语言足够有表达里，就不那么需要注释**

#### 函数

函数的第一个规则是要短小，第二条规则是只做一件事。

#### 项目 README

- 运行命令
- 线上的示例或者最后的运行环境
- 相关的文档链接
- 相关人员的联系方式或群
- 代码组织结构图

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
3.class,extends  
4.namespace  
命名空间，又称内部模块，用于组织一些具有某些内在联系的特性和对象，使代码结构更清晰。

```
namespace app {
  export namespace models {
     export calss UserModel {
     }
  }
}
let user = new app.models.UserModel();
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
 </code>

 <code>
import {noticeAPI} from './notice';
export namespace login {
    export class notice extends noticeAPI{
    }
}
 </code>
 </pre>
</details>


5.decorators (装饰者模式+切面编程,reflect-metadata)    
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


6.泛型 T ，允许使用的时候定义类型(通用函数的考虑)  
例子：

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
