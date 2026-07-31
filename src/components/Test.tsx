import { useState } from 'react'

export default function Test() {
  const [count, setCount] = useState(67)

  return (
    <>
      <section>
        <h2>
          <p>
            It's me, Sean! This is coming from:
            <code>App.tsx</code>
            <button
              type="button"
              className="counter"
              onClick={() => setCount((count) => count +1 )}
            >
              Add to the count! {count}
            </button>
          </p>
        </h2>
      </section>
    </>
  )
}
