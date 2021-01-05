import { useCavy } from 'cavy'

export function useTestHook(id, ref) {
  const generateTestHook = useCavy()
  if (__DEV__) {
    return generateTestHook(id, ref)
  } else {
    return ref
  }
}
