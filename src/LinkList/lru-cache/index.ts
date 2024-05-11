/** https://leetcode.cn/problems/lru-cache */
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * @class LRUCache
 * 原理：利用Map 模拟cache链表
 *  链表尾部：最新存入的元素
 *  链表头部：最久未使用的元素
 *    map.keys().next().value
 */

class LRUCache {
  public cache
  private capacity
  constructor(capacity: number) {
    this.cache = new Map<number, number>()
    this.capacity = capacity
  }

  /**
   * @function get 获取元素
   * 如果取的key在cache中
   *  1.删除
   *  2.重新赋值，相当于置于链表尾部，则是最新元素
   *    2>7>5; get(7) ===> 2>5>7
   * 不在cache
   *  返回 -1
   */
  get(key: number): number {
    if (this.cache.has(key)) {
      const value = this.cache.get(key)!
      this.cache.delete(key)
      this.cache.set(key, value)
      return value
    } else {
      return -1
    }
  }

  /**
   * @function put 添加元素
   * 1.如果取的key在cache中，删除该key
   * 2.不存在cache中, 但是容量满了，删除链表头部最久未使用元素
   * 3.判断完1、2后添加元素
   */
  put(key: number, value: number) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      const headKey = this.cache.keys().next().value
      this.cache.delete(headKey)
    }
    this.cache.set(key, value)
  }
}
