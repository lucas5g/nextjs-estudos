import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'

//@ts-ignore
const Home: NextPage = ({ repositories, date }) => {
  // const [repositories, setRepositories] = useState<string[]>([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/lucas5g/repos')
  //     .then(response => response.json())
  //     .then(data => {
  //       const repositoryNames = data.map((item) => item.name)

  //       setRepositories(repositoryNames)
  //     })
  // }, [])
  return (
    <>
      <h1>{date}</h1>
      <ul>
        {/*//@ts-ignore */}
        {repositories.map(repo => (
          <li key={repo}>
            {repo}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home


// export const getServerSideProps: GetServerSideProps = async () => {

//   const response = await fetch('https://api.github.com/users/lucas5g/repos')

//   const data = await response.json()
//   const repositoryNames = data.map((item) => item.name)

//   return {
//     props: {
//       repositories: repositoryNames,
//       date: new Date().toISOString()
//     }
//   }

// } 

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/lucas5g/repos')

  const data = await response.json()
  
  //@ts-ignore
  const repositoryNames = data.map((item) => item.name)

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString()
    },
    revalidate: 5
  }

}