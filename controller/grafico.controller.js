import {selectDados} from "../model/grafico.model.js"

export async function criarGrafico(req,res){
    const data = Date()
    console.log(data)
    const resposta = await selectDados()
    return res.json(resposta)
}

