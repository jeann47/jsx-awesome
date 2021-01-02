import { readFromStorage } from 'src/storage/handle-async-storage'

export function isLogged() {
  return readFromStorage({ key: '@auth-headers' }).then((data) => data !== null)
}
