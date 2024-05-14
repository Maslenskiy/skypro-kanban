export const getCards = (token) =>{
    return fetch('https://wedev-api.sky.pro/api/kanban', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((res)=> {
        if(res.status === 500){
            throw new Error('Ошибка с сервера')
        }
        if(res.status === 401){
            throw new Error('Нет авторизации')
        }
        if(!res.ok){
            throw new Error('Что-то пошло не так')
        }
      return res.json()
    })
}
