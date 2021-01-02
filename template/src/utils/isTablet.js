import { useWindowDimensions } from 'react-native'
import { isTablet } from 'react-native-device-info'

export function getDeviceType() {
  const { width } = useWindowDimensions()
  return width >= 768 && isTablet()
}
