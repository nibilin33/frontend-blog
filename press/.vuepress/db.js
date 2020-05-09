const APP_ID = 'jJfXeV1I2kHde68Hnn7A7yEJ-gzGzoHsz';
const APP_KEY = 'SXR99ldnbUDDFITs3h62K9OH';
const init = ()=>{
    return new Promise((resolve)=>{
        if(!window.returnCitySN) {
            var script = document.createElement('script');
            var leancloud = document.createElement('script');
            leancloud.src = 'https://cdn.jsdelivr.net/npm/leancloud-storage@4.5.3/dist/av-min.js';
            leancloud.onload = function(){
                AV.init({
                    appId: APP_ID,
                    appKey: APP_KEY,
                    serverURLs: 'https://avoscloud.com'
                });
                resolve();
            }
            script.src = 'https://pv.sohu.com/cityjson?ie=utf-8';
            document.body.appendChild(script);
            document.body.appendChild(leancloud);
        }else{
            resolve();
        }
    })
}
export const update = async (router)=>{
    console.log(router.currentRoute.fullPath);
    await init();
    console.log(router.currentRoute.fullPath,'22');
    const Logger = AV.Object.extend('Visitor');
    let score = new Logger();
    Object.keys(window.returnCitySN).forEach((key)=>{
        score.set(key,window.returnCitySN[key]);
    });
    score.set('path',router.currentRoute.fullPath);
    Logger.saveAll([score]);

}