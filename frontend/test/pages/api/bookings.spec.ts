process.env.COOKIE_NAME = 'frontEndUser'

import handler from '@/pages/api/bookings'
import { createMocks } from 'node-mocks-http'

const COOKIE_NAME = 'frontEndUser'


jest.mock('@/methods/client', ()=> {
    return {
      APIClient: jest.fn().mockReturnValue({
        getBookings: jest.fn()
          .mockImplementationOnce(() =>Promise.resolve([{
            id: 'mockId',
            user: 'user',
            parc: 'parc',
            bookingdate: 'bookingdate',
            comments: 'comments'
          }]))
          .mockImplementation(() => Promise.reject({message: 'kaboom'}))

      })
    }
  }
)

describe('bookings', () => {

  it('Should return 405 request if not GET', async () => {
    const { req, res } = createMocks({
      method: 'POST'
    })
    await handler(req as any, res as any)
    await expect(res._getStatusCode()).toBe(405)
  })

  it('Should return 401 request if no user session', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    })
    await handler(req as any, res as any)
    await expect(res._getStatusCode()).toBe(401)
  })

  it('Should return 200 request with data', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    })
    req.cookies = {
      [COOKIE_NAME]: 'ALovelySessionID'
    }
    await handler(req as any, res as any)
    await expect(res._getStatusCode()).toBe(200)
    const {data} = await res._getJSONData()
    expect(data[0].id).toEqual('mockId')
  })

  it('Should return 400 request with API error', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    })
    req.cookies = {
      [COOKIE_NAME]: 'ALovelySessionID'
    }
    await handler(req as any, res as any)
    await expect(res._getStatusCode()).toBe(400)
  })


})
