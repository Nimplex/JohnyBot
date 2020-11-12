const base_url = 'http://ix.io'

module.exports = async data => {
  let key = ''
  const params = new URLSearchParams(); params.append('f:1', data)
  await Johny.http(`${base_url}`, { method: 'post', body: params }).then(res => res.text()).then(text => key = text.replace('\n', ''))
  return [`${key}`, `${key}/`]
}