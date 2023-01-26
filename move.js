var shell = require('shelljs');
shell.rm('-rf','docs/*');
shell.cp('-R','press/.vuepress/dist/*','docs');
shell.cp('-R','press/guide/img/*','docs/assets/img');
shell.rm('-rf','press/.vuepress/dist');
shell.cp('-R','ppt/*','docs');