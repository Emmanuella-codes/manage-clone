import { BackgroundProps } from "@chakra-ui/react"

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IInput {
  id?: string
  placeholder?: string
  _placeholder?: any
  background?: BackgroundProps['background']
  border?: any
  required?: boolean
  type?: React.HTMLInputTypeAttribute | undefined
  disabled?: boolean
  name: string
  value?: string | number | readonly string[] | undefined | any
  values?: any
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  onPromiseBlur?: (e: any) => Promise<void>
  handleClick?: () => void
  errorMessage?: string | any
  showMessage?: boolean
  isNotLowercase?: boolean
  color?: string
  borderRadius?: string
  isPrice?: boolean
  hideCaret?: boolean
  isNumericFormat?: boolean
  setFieldValue?: any
  hasDropdown?: boolean
  width?: string
  _focus?: string
  leftAddon?: string | React.ReactNode
  rightAddon?: string
  usernameExists?: number
  isRegisterCheck?: boolean
  urlDataFetch?: boolean
  showLabel?: boolean
  height?: string
}