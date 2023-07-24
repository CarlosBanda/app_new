

export async function consultUF(service, number){
    // console.log(number+' UF')
    // return false
    try {
        const response = await fetch('https://apps-ws.spot1.mx/consultUf?msisdn='+number+'&product=MOV',{
            method: 'GET'
        })
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}