// const AV = require('leancloud-storage');
// const APP_ID = 'jJfXeV1I2kHde68Hnn7A7yEJ-gzGzoHsz';
// const APP_KEY = 'SXR99ldnbUDDFITs3h62K9OH';
// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY,
//   serverURLs: 'https://avoscloud.com'
// });
// const Logger = AV.Object.extend('Visitor');
export const update = (router)=>{
    fetch('//freegeoip.net/json/?callback=?')
    .then((res)=>{
        console.log(res);
    });
}