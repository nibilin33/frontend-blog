const fs = require('fs');
const { spawn } = require('child_process');
const filePath = './press/.vuepress/config.js';
console.log(`正在监听 ${filePath}`);
fs.watchFile(filePath, (cur, prv) => {
    if (filePath) {
        // 打印出修改时间
        console.log(`cur.mtime>>${cur.mtime.toLocaleString()}`)
        console.log(`prv.mtime>>${prv.mtime.toLocaleString()}`)
        // 根据修改时间判断做下区分，以分辨是否更改
        if (cur.mtime != prv.mtime){
            console.log(`${filePath}文件发生更新`)
            spawn('npm.cmd',['stop']);
            spawn('npm.cmd',['run','docs:dev']);
        }
    }
})