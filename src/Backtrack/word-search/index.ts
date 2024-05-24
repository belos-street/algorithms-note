/** @link https://leetcode.cn/problems/word-search */

// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

export function exist(board: Array<Array<string | null>>, word: string): boolean {
  if (board.length === 0) return false
  if (word.length === 0) return true

  //行数，列数
  let [row, col] = [board.length, board[0].length]

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const result = find(i, j, 0) //行索引 列索引 word字符串的索引
      if (result) return true //如果遍历过程拿到了true 则直接停止遍历
    }
  }

  return false //遍历完还没有拿到true 则是false

  /**
   * @param i //board的横坐标
   * @param j //board的纵坐标
   * @param cur word字符串的索引
   */
  function find(i: number, j: number, cur: number): boolean {
    //判断越界
    if (i >= row || i < 0) return false
    if (j >= col || j < 0) return false

    let char = board[i][j]
    if (char !== word[cur]) return false //如果不是对应的char直接退出
    if (cur === word.length - 1) return true //当以上条件都过滤后，cur的值等于word长度 说明找到了

    board[i][j] = null //取到对应值后，把值置空，说明已经遍历过了

    const result =
      find(i + 1, j, cur + 1) || // 往右查询
      find(i - 1, j, cur + 1) || // 往左查询
      find(i, j + 1, cur + 1) || // 往下查询
      find(i, j - 1, cur + 1) // 往上查询

    board[i][j] = char //回撤

    return result
  }
}
