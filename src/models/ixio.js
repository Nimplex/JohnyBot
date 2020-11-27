module.exports = async data => {
  let key = ''
  const params = new URLSearchParams(); params.append('f:1', data)
  await Johny.http(`http://ix.io`, { method: 'post', body: params }).then(res => res.text()).then(text => key = text.replace('\n', ''))
  return [`${key}`, `${key}/`]
}