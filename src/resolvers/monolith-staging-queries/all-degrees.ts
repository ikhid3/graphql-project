import { queryStagingStore } from '../../app/lib'
import { Degree } from '../../app/schema'

export async function allDegrees(): Promise<Degree[]> {
  const data = await queryStagingStore({
    name: 'AllDegrees',
    queryString: /* GraphQL */ `
      query AllDegrees {
        degrees(display: true, orderBy: [{ column: ORDER, order: ASC }]) {
          id
          _id: id
          value: id
          display: name
          type: type
          isMedical: is_medical
        }
      }
    `
  })
  return data?.degrees.map((degree: { [key: string]: unknown }) => {
    degree.name = degree?.display
    degree.is_medical = degree.isMedical
    degree.value = degree.id
    degree._id = degree.id
    return degree
  })
}
