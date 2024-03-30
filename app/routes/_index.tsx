import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "Learn Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div>
      <h1>Learn Remix</h1>
      <ul>
        <li>
          <a href='/about'>/about</a>
        </li>
        <li>
          <a href='/users'>/users</a>
        </li>
        <li>
          <a href='/users/123'>/users/123</a>
        </li>
        <li>
          <a href='/users/nested'>/users/nested</a>
        </li>
      </ul>
    </div>
  )
}
