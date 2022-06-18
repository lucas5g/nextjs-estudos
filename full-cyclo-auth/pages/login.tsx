import { FormEvent } from 'react'
import styles from '../styles/Login.module.css'



const Login = () => {

    async function onSubmit(event: FormEvent){
        event.preventDefault()

        const username = (document.querySelector('#username') as HTMLInputElement).value 
        const password = (document.querySelector('#password') as HTMLInputElement ).value 

        api.post('')


        console.log({username, password})

    }

    return(
    <form onSubmit={onSubmit} >
        <div className={styles.formGroup}>
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
        </div>
        <button>
            Login
        </button>
    </form>
  )
}

export default Login

