import { FieldValues, UseFormSetError, Path } from "react-hook-form"

type ValidationErrorResponse = {
  errors: Record<string, string[]>
}

class Validator {
  static validate<TFieldValues extends FieldValues>(
    response: ValidationErrorResponse,
    setError: UseFormSetError<TFieldValues>,
  ): void {
    Object.entries(response.errors).forEach(([field, messages]) => {
      if (messages.length > 0) {
        setError(field as Path<TFieldValues>, {
          type: "server",
          message: messages[0],
        })
      }
    })
  }
}

export default Validator
