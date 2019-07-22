var shell = require('shelljs');
shell.rm('-rf','docs/*')
shell.cp('-R','press/.vuepress/dist/*','docs')