import { getTrimmedEntry } from '../utils'

describe('test works for empty string', () => {
  test('works for empty string', () => {
    expect(getTrimmedEntry('')).toEqual('')
  })

  test('test works for test string', () => {
    expect(getTrimmedEntry('  test  ')).toEqual('test')
  })
})
