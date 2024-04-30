# Mock 方案优化
## 当前 Mock 方案的问题
在本地启动 Express 服务器，并在请求代码中配置是否使用 mock 数据。增加一个 mock 的步骤如下：     
1. 增加一个 route 文件，实现对应返回
```js
class BillingGroupsRoute extends BaseRoute {
    constructor(public path) {
        super();
        this.router.get('/billing_groups', this.getbillinggroups);
        this.router.get('/billing_groups/:id', this.getbillinggroup);
        this.router.put('/billing-groups/:id/', this.updatebillinggroup);
        this.router.post('/billing_groups/:id', this.updatebillinggroup);
    }

    public getbillinggroups = async (req: Request, res: Response) => {
        logger.info(req.query.pagable as unknown as SettingServices.BillingGroupsRequest);
        this.sendOk<SettingServices.BillingGroupsResponse>(res, {
            total: 2,
            page_number: 0,
            page_size: 10,
            rows: [
                {
                    id: 1,
                    name: 'Max Shop Entity Group 1',
                    billing_currency: 'USD',
                    employees_count: 2,
                    legal_entity_name: 'Cobias Global Technology Pte, Ltd.',
                }
            ]
        });
    }
}
```
2. 引入 route
```js app.ts
import {BillingGroupsRoute} from '@/routes/biling.routes'
```
3. 接口方法开启 mock
```js
export async function uploadLogo(file: any): Promise<CommonResponse> {
    return restfulClient.client.post({
        url: getServiceUrl('client', '/clients/upload_logo/'),
        data: file,
        // mock: true,
    });
}
```
从上述步骤中，我们可以看出当前 mock 方案存在以下问题：
1. 对业务代码有侵入性。
2. 无法进行不同场景的编排。
3. 需要进行代码维护。

## 优化方案