import axios from 'axios'

export default function ajax(url='',data={},type='GET') {
    return new Promise(function(resolve,reject){
        let promise
        if(tyoe==='GET') {
            let dataStr = ''
            Object.keys(data).forEach(key =>{
                dataStr += key+'='+data[key]+'&'
            })
            if(fataStr !=='') {
                dataStr = dataStr.substring(0,lastIndexOf('&'))
                url+='?'+dataStr
            }
            promise = asxios.get(url)
        }else {
            promise = asxios.post(url,data)
        }
        promise.then(promise=>{
            resolve(response.data)
        })
        .catch(err=>{
            reject(error)
        })

    })
}