/** @link https://leetcode.cn/problems/lemonade-change */

function lemonadeChange(bills: Array<5 | 10 | 20>): boolean {
  let [fiveNum, tenNum] = [0, 0]

  for (const bill of bills) {
    if (bill === 5) {
      fiveNum++
    } else if (bill === 10) {
      if (fiveNum > 0) {
        fiveNum--
        tenNum++
      } else {
        return false //如果给了10元，兜里没有5元，则不能找零
      }
    } else {
      //20
      if (tenNum > 0 && fiveNum > 0) {
        //找1张10元 + 1张5元
        tenNum--
        fiveNum--
      } else if (fiveNum > 2) {
        //找3张5元
        fiveNum -= 3
      } else {
        return false
      }
    }
  }

  return true
}
