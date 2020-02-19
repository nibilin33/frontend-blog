let currentDir = process.cwd();
process.stdout.write(currentDir);
//process.chdir();改变目录
// 等待输入     
// process.stdin.resume();
// process.stdin.setDefaultEncoding('utf8');
// process.stdin.on('data',function(data){
//     console.log(data);
// });
Array.from({length:38}).forEach((it,index)=>{
    process.stdout.write(`\u001b[38;5;${index}m ${index}`);
});