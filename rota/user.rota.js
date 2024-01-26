import {Router} from "express"
import {buscaUsuarioController, cadastrarController } from "../controller/usuario.controller.js"
import { validarEmailMiddleware } from "../middleware/validarEmail.middleware.js"

 const userRouter = Router()

userRouter.get('/:id',buscaUsuarioController)
userRouter.post('',validarEmailMiddleware,cadastrarController)

export{userRouter}
