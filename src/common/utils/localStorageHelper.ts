export const LocalStorage = {
  getItem: (key: string): unknown => {
    const localStorageItem = localStorage.getItem(key) as string
    return JSON.parse(localStorageItem)
  },

  setItem: (key: string, data: unknown): void => {
    const item = JSON.stringify(data)
    localStorage.setItem(key, item)
  },

  removeItems: (keys: string[]): void => {
    keys.map((key) => localStorage.removeItem(key))
  },

  removeAllItems: (): void => localStorage.clear(),
}
