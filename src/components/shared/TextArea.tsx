import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react"

type TextAreaProps = {
  id: string
  name: string
  className?: string
  required?: boolean
  value?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void
}

const TextArea: ForwardRefExoticComponent<
  TextAreaProps & RefAttributes<HTMLTextAreaElement>
> = forwardRef<HTMLTextAreaElement, TextAreaProps>(function Input(
  { className, id, required, name, onChange, onBlur, value }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <textarea
      id={id}
      className={`block w-full rounded-md text-gray-800 h-32 resize-none p-2 text-sm border ${className}`}
      ref={ref}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      required={required}
    />
  )
})

export default TextArea
