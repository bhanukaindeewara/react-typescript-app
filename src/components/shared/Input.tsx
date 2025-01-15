import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react"

type InputProps = {
  id: string
  type: string
  name: string
  className?: string
  required?: boolean
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  placeholder?: string
}

const Input: ForwardRefExoticComponent<
  InputProps & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    type,
    className,
    id,
    required,
    name,
    onChange,
    onBlur,
    value,
    placeholder,
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      id={id}
      className={`block w-full rounded-md text-gray-800 p-2 text-sm border ${className}`}
      ref={ref}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      required={required}
      placeholder={placeholder}
    />
  )
})

export default Input
