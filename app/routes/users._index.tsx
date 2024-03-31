import { useLoaderData, useNavigate } from "@remix-run/react"

export async function loader() {
  return {
    data: createDummyData(),
  }
}

export default function UsersIndex() {
  const navigate = useNavigate()
  const { data } = useLoaderData<typeof loader>()
  const handleRowClick = (id: string) => {
    navigate(`/users/${id}`)
  }
  return (
    <>
      <p>Users List</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, i) => (
            <tr key={`${x.id}`} onClick={() => handleRowClick(x.id)}>
              <td>{i + 1}</td>
              <td>{x.name}</td>
              <td>{x.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
