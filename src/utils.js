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
