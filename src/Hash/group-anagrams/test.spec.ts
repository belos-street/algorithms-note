import { describe, expect, it } from 'vitest'
import { groupAnagrams } from '.'

describe('字母异位词分组', () => {
  it('example1', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([['bat'], ['eat', 'tea', 'ate'], ['tan', 'nat']])
  })

  it('example2', () => {
    expect(groupAnagrams(['ac', 'd'])).toEqual([['d'], ['ac']])
  })
})
