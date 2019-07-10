let storage = {
    // 添加缓存
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    // 获取缓存
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    // 移除huanc
    remove(key) {
        localStorage.removeItem(key)
    }
}

export default storage