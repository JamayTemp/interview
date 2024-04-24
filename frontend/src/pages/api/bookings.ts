import { NextApiRequest, NextApiResponse } from 'next'
import { APIClient } from '@/methods/client'
import { Booking } from '@/type/booking'

const { NEXT_API_URL, COOKIE_NAME } = process.env
const client = new APIClient(NEXT_API_URL!)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405)
  }
  const context = { req, res }
  const userID = context.req.cookies[COOKIE_NAME!]!
  if (userID) {
    let data: Booking[] = []

    try {
      data = (await client.getBookings(userID)) as unknown as Booking[]
    } catch {
      return res.status(400).send('api error')
    }
    return res.status(200).json({ data })
  } else {
    // no session
    return res.status(401).send('null')
  }
}
