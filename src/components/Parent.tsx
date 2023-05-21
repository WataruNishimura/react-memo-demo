import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { Child, ChildProps } from "./Child"

export const Parent = () => {

  const [parentCount, setParentCount] = useState(0)
  const [childCount, setChildCount] = useState(0)

  // Child コンポーネントの onClick プロパティに渡す関数を作成
  // useCallback でメモ化
  const onClick = useCallback((text: string) => {console.log(text)},[])

  // memo 化された Child コンポーネントを作成
  const ChildMemo = useMemo(() => <Child count={childCount} onClick={onClick} />, [childCount])
  
  useEffect(() => {
    // Parent コンポーネントがレンダリングされたときに実行される
    console.log("Parent rendered")
  })

  return (
    <>
      <button onClick={() => setParentCount((count) => count + 1)}>
        Parent Count
      </button>
      <p>count is {parentCount}</p>
      <button onClick={() => setChildCount((count) => count + 1)}> Child Count</button>
      {ChildMemo}
    </>
  )
}