export async function getCharts() {
  try {
    const res = await fetch('/chartList')
    return await res.json()
  } catch (e) {
    console.log('getCharts() at services.js: ', e)
    return e
  }
}

export async function getChartsOfUser(userId) {
  try {
    const res = await fetch('/chartList/' + userId)
    return await res.json()
  } catch (e) {
    console.log('getCharts() at services.js: ', e)
    return e
  }
}
export async function postCharts(chartList) {
  console.log('postCharts in services.js ', JSON.stringify(chartList))
  const res = await fetch('/chartList', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chartList),
  })
  return await res.json()
}

export async function patchCharts(chartList) {
  const res = await fetch(`/chartList/${chartList._id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chartList),
  })
  return res.json
}

export async function getCertificates() {
  try {
    const res = await fetch('/certificates')
    return await res.json()
  } catch (e) {
    console.log('getCertificates() at services.js: ', e)
    return e
  }
}

export async function getCertificatesOfUser(userId) {
  try {
    const res = await fetch('/certificates/' + userId)
    return await res.json()
  } catch (e) {
    console.log('getCertificates() at services.js: ', e)
    return e
  }
}

export async function postCertificates(certificates) {
  console.log('postCharts in services.js ', JSON.stringify(certificates))
  const res = await fetch('/certificates', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(certificates),
  })
  return await res.json()
}

export async function patchCertificates(certificates) {
  const res = await fetch(`/certificates/${certificates._id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(certificates),
  })
  return res.json
}

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
