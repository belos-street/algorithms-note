
import { describe, expect, it } from 'vitest'
import { findRepeatsChar } from '..'

describe('字符串中连续重复次数最多的字符', () => {

  it('空字符串', () => {
    const strText = ''
    expect(findRepeatsChar(strText)).toBe(false)
  })

  it('有且只有一种字符出现次数最多', () => {
    const cText = 'ccccccccccccccc'
    const strText = `abbbbbbbbaaaaaaaaaaa${cText}dddjahskjsabdjksadnlkasjdsaikldddddasasssss`
    expect(JSON.stringify(findRepeatsChar(strText))).toBe(JSON.stringify({ c: cText.length }))
  })

  it('多种种字符出现次数最多', () => {
    const strText = 'aaabbbcccdddaaa'
    expect(JSON.stringify(findRepeatsChar(strText))).toBe(JSON.stringify({
      a: 3,
      b: 3,
      c: 3,
      d: 3
    }))
  })

})
