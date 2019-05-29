import { ChangeHistory } from 'styled-icons/material'

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
export function getISODate(date) {
  return date.toISOString().substring(0, 10)
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

  console.log('allSkills: ', allSkills)

  const filteredSkills = allSkills.filter(skill =>
    skill.hasOwnProperty('changeHistory')
  )
  console.log('Skills with history?: ', filteredSkills)

  filteredSkills.forEach(skill =>
    skill.changeHistory.forEach(entry =>
      addHistoryEntry(entry.changeDate, skill.name)
    )
  )
  console.log('skillEntries: ', skillEntries)

  function addHistoryEntry(date, name) {
    console.log(date) // geISODate()?
    skillEntries.push({ title: name, date: date })
  }

  function addSkills(skillList) {
    allSkills.push(...skillList)
  }

  return skillEntries
}
