import { navLinkList } from './commons/constants'

export function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function getLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (error) {
    console.log(error)
  }
}

// returns Date in Format: YYYY-MM-DD
// useful vor <input type="date"> ->  in order to set value, which expects this format
export function getFormatedDate(date) {
  if (date instanceof Date) {
    return date.toISOString().substring(0, 10)
  } else {
    return date && date.substring(0, 10)
  }
}

export function getAllSkillEvents(chartList) {
  const allChartsCategories = chartList.map(chart => chart.categories)
  const allSkills = []
  const skillEntries = []
  allChartsCategories.forEach(chart => {
    chart.forEach(category => {
      addSkills(category.skillList)
    })
  })

  const filteredSkills = allSkills.filter(skill =>
    skill.hasOwnProperty('changeHistory')
  )

  filteredSkills.forEach(skill =>
    skill.changeHistory.forEach(entry =>
      addHistoryEntry(entry.changeDate, skill.name)
    )
  )

  function addHistoryEntry(date, name) {
    skillEntries.push({ title: name, date: date, type: 'skill' })
  }

  function addSkills(skillList) {
    allSkills.push(...skillList)
  }

  return skillEntries
}

export function getTrimmedEntry(entry) {
  if (entry && typeof entry === 'string') {
    return entry.trim()
  } else {
    return entry
  }
}

export function getColorOfTitle(title) {
  const index = navLinkList
    .map(link => link.name.toLowerCase())
    .indexOf(title.toLowerCase())

  return navLinkList[index].color
}
