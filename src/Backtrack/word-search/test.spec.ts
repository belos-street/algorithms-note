import { describe, expect, it } from 'vitest'
import { exist } from '.'

describe('单词搜索', () => {
  it('example1', () => {
    expect(
      exist(
        [
          ['A', 'B', 'C', 'E'],
          ['S', 'F', 'C', 'S'],
          ['A', 'D', 'E', 'E']
        ],
        'ABCCED'
      )
    ).toBe(true)
  })
})
