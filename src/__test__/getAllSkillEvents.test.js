import { getAllSkillEvents } from '../utils'
import { mockData } from '../mockdata'

describe('test getAllSkillEvents', () => {
  test('works for empty list', () => {
    expect(getAllSkillEvents([])).toEqual([])
  })
  test('works for mockData list', () => {
    expect(getAllSkillEvents(mockData.chartList)).toEqual([
      {
        date: '2019-02-05',
        title: 'Arbeitshaltung',
        type: 'skill',
      },
      {
        date: '2019-04-01',
        title: 'Arbeitshaltung',
        type: 'skill',
      },
    ])
  })
})
