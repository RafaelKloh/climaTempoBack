import { conexao } from "../conexao.js"


export async function validarEmailMiddleware(req,res,next){
    const email = req.body.email
    new Promise((resolve,reject)=>{        
        conexao.query(`SELECT * FROM usuario WHERE email = '${email}'`,(error,result)=>{
            if(result.length > 0){
               return res.json({erro:"Email ja cadastrado"}) 
            }

            else {
                next()
            }
        })
    })
}