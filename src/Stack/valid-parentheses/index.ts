/** @link https://leetcode.cn/problems/valid-parentheses */
// s 仅由括号 '()[]{}' 组成

function isValid(s: string): boolean {
  const parenthesesMap: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const stack = []
  let index = 0
  while (index < s.length) {
    const char = s[index]
    if (char in parenthesesMap) {
      //开括号
      stack.push(char)
    } else {
      //闭括号
      const popChar = stack.pop()! //从栈中弹出最后一个开括号
      if (char !== parenthesesMap[popChar]) return false // 检查当前闭括号是否与弹出的开括号匹配
    }
    index++
  }

  return stack.length === 0
}
