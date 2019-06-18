import { getAllSkillEvents } from '../utils'
import { mockData } from '../mockdata'
// '../src/mockdata'

describe('test getAllSkillEvents', () => {
  test('works for empty list', () => {
    expect(getAllSkillEvents([])).toEqual([])
  })
  test('works for empty list', () => {
    expect(getAllSkillEvents(mockData.chartList)).toEqual([])
  })
})
