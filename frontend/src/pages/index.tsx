import { APIClient } from '@/methods/client'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useState } from 'react'

import { Booking } from '@/type/booking'

const { NEXT_API_URL, COOKIE_NAME, NEXT_PUBLIC_API_URL } = process.env

type InitialDataProps = {
  isError: boolean
  data: Booking[]
}
export async function getServerSideProps(context: { req: { cookies: { [x: string]: any } } }){
  const client = new APIClient(NEXT_API_URL!)
  const userID = context.req.cookies[COOKIE_NAME!]!

  let isError = false
  let data: Booking[] = []

  try {
    data = (await client.getBookings(userID)) as unknown as Booking[]
  } catch {
    // error already handled inside client
    isError = true
  }
  return {
    props: {
      isError,
      data
    }
  }
}

export default function Index(props: Readonly<InitialDataProps>) {
  const { isError, data = [] } = props
  const [bookings, setBookings] = useState(data)
  const [isFetchError, setIsFetchError] = useState(isError)

  // reduce array // being lazy I know but if I had the time id add in pagination to the table
  bookings.length = Math.min(bookings.length, 5)
  // client side using same api client

  const getBookings = async () => {
    setIsFetchError(false)
    try {
      await fetch('/api/bookings').then(async (res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw text
          })
        }
        const response = await res.json()
        setBookings(response.data)
      })
    } catch (error) {
      setIsFetchError(true)
    }
  }

  return (
    <>
      {!isFetchError && bookings.length > 0 && (
        <>
          <Alert severity="success">See some bookings below</Alert>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">id</TableCell>
                  <TableCell align="right">user</TableCell>
                  <TableCell align="right">parc</TableCell>
                  <TableCell align="right">bookingdate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((row: Booking, index: number) => (
                  <TableRow key={row.id}>
                    <TableCell align="right" key={'id' + index}>
                      {row.id}
                    </TableCell>
                    <TableCell align="right" key={'user' + index}>
                      {row.user}
                    </TableCell>
                    <TableCell align="right" key={'parc' + index}>
                      {row.parc}
                    </TableCell>
                    <TableCell align="right" key={'bookingdate' + index}>
                      {row.bookingdate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      {isFetchError && (
        <Alert severity="error">
          There appears to be a problem getting the bookings,{' '}
          <Button onClick={getBookings}>try again?</Button>
        </Alert>
      )}
      {!isFetchError && bookings.length === 0 && (
        <Alert severity="warning">You appear to have no bookings! oh no!</Alert>
      )}
    </>
  )
}
