import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Main } from './styles'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Certificados</title>
        <meta name="description" content="Sistema de certificados IFBA" />
        <link rel="icon" href="/certificados/favicon.ico" />
      </Head>
      <Main>
        <Image src="/certificados/logo.svg" alt="Logo Certificados" width={636} height={100} />
        <h1>Atenção</h1>
        <h2>
          O sistema está em processo de implantação no IFBA Campus Vitória da Conquista no domínio <a href="http://vca.ifba.edu.br:81/certificados" target="_blank" rel="noopener noreferrer">vca.ifba.edu.br:81/certificados</a>
        </h2>
        <h2>
          A versão anterior pode ser acessar em: <a href="http://certificados.conquista.ifba.edu.br" target="_blank" rel="noopener noreferrer">certificados.conquista.ifba.edu.br</a>
        </h2>
      </Main>
    </Container>
  )
}

export default Home
