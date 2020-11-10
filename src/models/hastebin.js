const base_url = 'https://hastebin.com'

module.exports = async data => {
  let key = ''
  await Johny.http(`${base_url}/documents`, { method: 'post', body: data }).then(res => res.json()).then(json => key = json.key) 
  return [`${base_url}/${key}`, `${base_url}/raw/${key}`]
}