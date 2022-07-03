import styles from  './Home.module.css'
import DisciplinasRepository from '../repositories/disciplinas';
import Link from 'next/link';
import { useEffect, useState } from "react";
import FormDialog from '../components/dialogCreate';
import { BsPlusCircle } from 'react-icons/bs';

export default function Home() {
  const disciplinasRepository = DisciplinasRepository.getInstance();

  const [open, setOpen] = useState(false);
  const [disciplinaOpen, setDisciplinaOpen] = useState(false)
  const [valuesDisciplina, setValuesDisciplina] = useState();

  function handleClickInclude() {
    setDisciplinaOpen(true);
    setOpen(true);
  }

    return (
      <>
      <FormDialog open={open} setOpen={setOpen} disciplinaOpen={disciplinaOpen} valuesDisciplina={valuesDisciplina} setValuesDisciplina={setValuesDisciplina} />
        <div className={styles.container}>
        <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
      {
        // Header
      }
      <div className={styles.header}>
        <ul>
          <li><a href="#home">Postagens</a></li>
          <li><a href="#home">Professores</a></li>
          <li><a href="#home">Login</a></li>
          <li><a href="#home">Registrar-se</a></li>
          <li className={styles.active}><a href="#home">Sair</a></li>
          <li className={styles.active}><a href="#home">Opções</a></li>
        </ul>
      </div>

      {
        // Busca
      }

      <form className={styles.formPesquisa}>
        <input type='text' placeholder="Pesquise professor, instituição, disciplina.." name="search"/>
        <button type="submit">Pesquisar</button>
      </form>

      {
        // Botão Adicionar
      }   

      <button className={styles.add} onClick={() => handleClickInclude()}><BsPlusCircle size={30}/></button>


      {
        // Encontrados
      }
      <div className={styles.cartoes}>
      {
        disciplinasRepository.getAllDisciplinas().map(disciplina =>  <Link key={disciplina.id} href={{pathname:'disciplinas', query:{disciplinaId: disciplina.id}}}><div className={styles.cartao}>
          <h1>{disciplina.nome}</h1>
          <h3>{disciplina.codigo}</h3>
          <h2>{disciplina.universidade}</h2>
        </div>
        </Link>
        )
      }
      </div>

      <footer className={styles.footer}>
          Trabalho de Eng Soft 2
      </footer>
    </div>
    </>
    )
}