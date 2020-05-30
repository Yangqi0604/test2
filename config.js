/**
 * @name: 打包脚本关联远程分支
 */

module.exports = {
    production: {
      github: {
        url: 'https://github.com/Yangqi0604/test2.git',
        branch: 'build-production'
      }
    },
  
    test: {
      github: {
        url: 'https://github.com/Yangqi0604/test2.git',
        branch: 'build-test'
      }
    }
  }
  