interface SessionStorageItem {
  data: Data
  expiry: number
}

interface Data {
  [key: string]: string | number
}

export const SessionStorage = {
  getItem: (key: string): unknown => {
    const sessionStorageItem = sessionStorage.getItem(key) as string
    const item = JSON.parse(sessionStorageItem) as SessionStorageItem

    if (item) {
      if (item.expiry && item.expiry < Date.now()) {
        return null
      }

      return item.data
    }

    return null
  },

  setItem: (key: string, data: unknown, expiry?: number): void => {
    const item = JSON.stringify({ data, expiry })
    sessionStorage.setItem(key, item)
  },
  // example: SessionStorage.setItem(key, data, Date.now() + 100000)
  // or: SessionStorage.setItem(key, data)

  removeItems: (keys: string[]): void => {
    keys.map((key) => sessionStorage.removeItem(key))
  },

  removeAllItems: (): void => sessionStorage.clear(),
}
