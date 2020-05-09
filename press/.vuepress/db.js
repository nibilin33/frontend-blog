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
    if(!window.returnCitySN) {
        var script = document.createElement('script')
        // script.src = 'https://jsonip.com/'
        script.src = 'https://pv.sohu.com/cityjson?ie=utf-8'
        script.onload = function() {
          console.log(window.returnCitySN);
        }
        document.body.appendChild(script);
    }

}