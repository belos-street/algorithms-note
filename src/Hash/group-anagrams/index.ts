/** @link https://leetcode.cn/problems/group-anagrams */

// 创建一个记录字符到质数映射的对象，每个字母映射到一个唯一的质数
const LETTER_MAP: Readonly<Record<string, number>> = {
  a: 2,
  b: 3,
  c: 5,
  d: 7,
  e: 11,
  f: 13,
  g: 17,
  h: 19,
  i: 23,
  j: 29,
  k: 31,
  l: 37,
  m: 41,
  n: 43,
  o: 47,
  p: 53,
  q: 59,
  r: 61,
  s: 67,
  t: 71,
  u: 73,
  v: 79,
  w: 83,
  x: 89,
  y: 97,
  z: 101
}

export function groupAnagrams(strs: string[]): string[][] {
  const map: Record<number, string[]> = {}

  for (const str of strs) {
    // 对于每个字符串，将其每个字符映射到质数，然后乘积作为该字符串的特征键值
    // 字符串的乘积特性保证了字母相同但顺序不同的字符串会有相同的乘积，从而实现词模分组
    const coutKey = str.split('').reduce((pre, cur) => pre * LETTER_MAP[cur], 1)

    if (!(coutKey in map)) map[coutKey] = [] // 如果该键值不在map中，则初始化为空数组

    map[coutKey].push(str) // 将当前字符串添加到对应特征键值的数组中
  }

  return Object.values(map) //分组后的结果
}
