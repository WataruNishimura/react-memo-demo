import { useEffect } from "react"

export type ChildProps = {
  count: number
  onClick: (text: string) => void
}

export const Child = ({count, onClick}: ChildProps) => {

  useEffect(() => {
  onClick("Child rendered")
  })

  return (
    <p>
      {`Count: ${count}`}
    </p>
  )
}