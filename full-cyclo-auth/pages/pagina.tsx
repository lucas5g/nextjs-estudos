import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const Pagina = ({name}:{name: string}) => {
    return(
    <div>
        Pagina - {name}       
    </div>
  )
}

export default Pagina


export const getServerSideProps: GetServerSideProps = async(context) => {

    return {
        props: {
            name: 'Lucas de Sousa'
        }
    }
}