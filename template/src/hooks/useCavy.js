import { useCavy as cavyHook } from 'cavy'

export function useCavy() {
  if (__DEV__) {
    return cavyHook()
  } else {
    return (_id, ref) => ref
  }
}
