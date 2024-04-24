import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { Booking } from '@/type/booking'

export class APIClient {
  private readonly client: AxiosInstance
  private readonly logger: (user: string, error: string) => void

  constructor(baseURL: string, logger = console.error) {
    this.client = axios.create({
      baseURL
    })
    this.logger = logger
  }

  private errorHandler(method: string, user: string, error: AxiosError) {
    // custom error handler, useful for tracing agents like dynatrace, appinsights..
    this.logger(
      `Error using: ${method}`,
      `User: ${user} got: ${error.response!.status}`
    )
    throw error
  }

  public async getBookings(user: string) {
    try {
      const response = await this.client.get<AxiosResponse>('bookings')
      const bookings = response.data

      return bookings.data as unknown as Booking[]
    } catch (error) {
      this.errorHandler('getBookings', user, error as AxiosError)
    }
  }
}
