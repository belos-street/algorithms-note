import inquirer from 'inquirer'
import fs from 'fs'

const srcPath = './src'
const dirs = fs.readdirSync(srcPath).filter(item => !item.includes('.'))


/**
 * 脚本流程
 * 1.选择目录
 * 2.输入算法名
 * 3.输入算法编号
 * 4.生成对应文件
 *   4.1 切换对应目录
 *   4.2 生成文本内容
 * 5.写入md文件
 */
const algorithmInfo = {
  id: 0,
  name: '',
  type: '',
  path: ''
}

inquirer
  .prompt([ //1
    {
      type: 'list',
      name: 'type',
      message: '请选择算法类型:',
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
        name: 'name',
        message: '请输入算法名字:'
      }
    ])
  }).then((data) => {
    algorithmInfo.name = data.name
    const { name, type } = algorithmInfo//4
    algorithmInfo.path = `${srcPath}/${type}/${name}`
    const { path } = algorithmInfo
    fs.mkdirSync(path) //4.1
    fs.writeFileSync(`${path}/index.ts`, `/** @link https://leetcode.cn/problems/${name} */`); //4.2
    writeDoc() //5
  })



const writeDoc = () => {

}
