type Result = {
  [key: string]: number
}

export function findRepeatsChar(strText: string) {
  if (!strText) return false
  const result: Result = {}
  let point = 0

  let repeatNum = 1 //记录重复次数
  let isRepeat = false //是否是以前出现过的

  while (point < strText.length) {
    const currentChar = strText[point]
    const beforeCharValue = strText[point - 1]
    if ((currentChar === beforeCharValue)) { //处理当前字符和上一个字符相等的情况
      if (isRepeat) {
        repeatNum++
        repeatNum > result[currentChar] && (result[currentChar] = result[currentChar] + 1)
      } else {
        result[currentChar] = result[currentChar] + 1
      }

    } else { //当前字符和上一个不是同一个字符
      repeatNum = 1
      isRepeat = false
      if (!result[currentChar]) { //全新的key
        result[currentChar] = 1
      } else { //出现过的key
        isRepeat = true
      }
    }
    // console.log(result, repeatNum)
    point++
  }
  return coutMaxResult(result)
}

function coutMaxResult(data: Result) {
  const sortArr = Object.entries(data).sort((a, b) => b[1] - a[1])
  if (sortArr.length <= 0) return false
  let maxNum = sortArr[0][1]
  let result: Result = {}
  for (const item of sortArr) {
    const [key, value] = [item[0], item[1]]
    if (value === maxNum) {
      result[key] = value
    } else {
      return result
    }
  }

  return result
}