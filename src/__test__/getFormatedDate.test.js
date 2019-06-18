import { getFormatedDate } from '../utils'

describe('test works for empty string', () => {
  test('works for empty list', () => {
    expect(getFormatedDate('')).toEqual('')
  })

  test('test works for mongoDB date', () => {
    expect(getFormatedDate('2019-02-04T23:00:00.000+00:00')).toEqual(
      '2019-02-04'
    )
  })
})
