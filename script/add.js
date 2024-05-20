import inquirer from 'inquirer'
import fs from 'fs'

const srcPath = './src'
const dirs = fs.readdirSync(srcPath).filter(item => !item.includes('.'))


/**
 * 脚本流程
 * 1.选择目录
 * 2.输入算法编号
 * 3.输入算法路由
 * 4.输入算法名字
 * 5.生成对应文件
 *   5.1 切换对应目录
 *   5.2 生成文本内容
 * 6.写入md文件
 */
const algorithmInfo = {
  id: 0,
  router: '',
  type: '',
  path: '',
  name: ''
}

inquirer
  .prompt([ //1
    {
      type: 'list',
      name: 'type',
      message: '请选择算法类型(如 BinaryTree):',
      choices: dirs.map(type => ({ name: type, value: type }))
    },
  ])
  .then(data => {
    algorithmInfo.type = data.type
    return inquirer.prompt([ //2
      {
        type: 'number',
        name: 'id',
        message: '请输入算法编号:'
      }
    ])
  }).then((data) => {
    algorithmInfo.id = data.id
    return inquirer.prompt([ //3
      {
        type: 'input',
        name: 'router',
        message: '请输入算法路由(如 invert-binary-tree):'
      }
    ])
  }).then((data) => {
    algorithmInfo.router = data.router
    return inquirer.prompt([ //4
      {
        type: 'input',
        name: 'name',
        message: '请输入算法名字(如 翻转二叉树):'
      }
    ])
  }).then((data) => {
    algorithmInfo.name = data.name
    const { router, type } = algorithmInfo//5
    algorithmInfo.path = `${srcPath}/${type}/${router}`
    const { path } = algorithmInfo
    fs.mkdirSync(path) //5.1
    fs.writeFileSync(`${path}/index.ts`, `/** @link https://leetcode.cn/problems/${router} */`); //5.2
    updateReadme() //6
  })



const updateReadme = () => {
  const { router, type, id, name } = algorithmInfo
  let content = fs.readFileSync('README.md', 'utf-8')
  const contentList = content.split('\n')
  const fileIndex = contentList.findIndex(item => item === `#### ${type}`) //
  contentList.splice(fileIndex + 2, 0, ...[`[${id}. ${name}](https://github.com/belos-street/algorithms-note/blob/main/src/${type}/${router}/index.ts)`, ''])
  fs.writeFileSync('README.md', contentList.join('\n'))
}