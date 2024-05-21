/** @link https://leetcode.cn/problems/simplify-path */

function simplifyPath(path: string): string {
  const stack: Array<string> = []
  const paths = path.split('/')

  for (const item of paths) {
    if (item === '..') {
      if (stack.length > 0) stack.pop() //确保栈不为空时才pop，避免在空栈时操作
    } else if (item && item !== '.') {
      // 简化条件，直接排除空字符串和'.'，减少一层条件分支
      stack.push(item)
    }
  }

  return `/${stack.join('/')}`
}
