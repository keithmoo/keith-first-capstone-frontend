import config from '../config'

const monsterIndexApiService = {
  monsterAPI() {
  
    return fetch(`${config.API_ENDPOINT}/`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  
}
}

 
export default monsterIndexApiService;