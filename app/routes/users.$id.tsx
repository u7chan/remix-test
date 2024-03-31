import type { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData, useRouteError } from "@remix-run/react"

export async function loader({ params }: LoaderFunctionArgs) {
  const filterd = createDummyData().filter((x) => x.id === params.id)
  if (filterd.length <= 0) throw Error("Not found user")
  const [data] = filterd
  return {
    data,
  }
}

export default function UsersId() {
  const { data } = useLoaderData<typeof loader>()
  return (
    <>
      <p>Users Detail</p>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{data.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{data.email}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return (
    <>
      <p>{error instanceof Error && error.message}</p>
    </>
  )
}

function createDummyData() {
  return [
    {
      id: "66e1ef01-e2ab-48fb-a88f-117c947605e6",
      name: "Dexter Holmes",
      email: "d.holmes@randatmail.com",
    },
    {
      id: "d3112d36-e5e2-49be-a4cd-f3af519287fd",
      name: "Deanna Brooks",
      email: "d.brooks@randatmail.com",
    },
    {
      id: "90a9687d-9f49-4103-9825-b20ec0bf1da1",
      name: "Miranda Douglas",
      email: "m.douglas@randatmail.com",
    },
    {
      id: "efe5091c-d007-45fe-9be5-39b14ccc69b5",
      name: "Sabrina Wells",
      email: "s.wells@randatmail.com",
    },
    {
      id: "f289f2c9-04d9-47cd-84f1-14727dd6e17d",
      name: "Jack Bennett",
      email: "j.bennett@randatmail.com",
    },
  ]
}
