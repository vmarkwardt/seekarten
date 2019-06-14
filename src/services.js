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
  const res = await fetch('/chartList', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chartList),
  })
  return await res.json()
}

export async function patchCharts(userId, chartList) {
  const chartListObj = { userId, chartList }
  const res = await fetch(`/chartList/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chartListObj),
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

export async function postCertificates(userId, certificateList) {
  const certificateObj = { userId, certificateList }
  const res = await fetch('/certificates', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(certificateObj),
  })
  return await res.json()
}

export async function patchCertificates(userId, certificateList) {
  const fullCertificatesObj = { userId, certificateList }
  const res = await fetch(`/certificates/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fullCertificatesObj),
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
