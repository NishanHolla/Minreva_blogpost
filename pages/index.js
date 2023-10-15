import Image from 'next/image';
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import { resolve } from 'styled-jsx/css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[title,setTitle] = useState('');
  const[genre,setGenre] = useState('');
  const[author,setAuthor] = useState('');
  const[content,setContent] = useState('');
  
  function handleTitle(e){
      setTitle(e.target.value);
  } 

  function handleGenre(e){
    setGenre(e.target.value);
  }

  function handleAuthor(e){
    setAuthor(e.target.value);
  }
  
  function handleContent(e){
    setContent(e.target.value);
  }

    const submit = () =>{
      console.log(title,genre,author,content);
      if(genre!=''){console.log(1)}else{console.log(0)}
      if(title !='' && genre !='' && content !='' && author!=''){
          console.log(title,genre,author,content);
          axios.post("http://localhost:3001/",{
            title,genre,content,author
          })
          .then((response)=>{
            console.log(response)
            document.querySelector('#succ').style.display = 'block';
            console.log(title,genre)
          })
      }else{
        document.querySelector('#warn').style.display = 'block';
      }
    }

  return (
    <div style={{backgroundImage:`url(https://techmeetups.com/wp-content/uploads/2019/06/blogging-SMB.png)`,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"100%"}}>
    <div className='text-center'>
      <h1 style={{fontFamily:'fantasy'}} className='text-6xl mt-5 font-serif text-sky-950'>minreva blogpost</h1>
      <h1 className='italic font-bold text-cyan-900 text-xl mb-10'>"where content is king"</h1>
    </div>
      <div className='text-left'>
        <div className='mx-64 my-5'>
          <div id="succ" className='hidden w-96 h-8 text pl-6 pt-1 ml-10 bg-green-500 font-bold'> Successfully published will be on the feed soon </div>
          <div id="warn" className='hidden w-96 h-8 text pl-6 pt-1 ml-10 bg-red-500 font-bold'> Please fill all the entry before submitting</div>
          <input id="title" type='text' className='italic h-10 w-4/5 ml-5 font-bold text-2xl bg text-black p-5 bg-transparent border-b-2 border-black' maxLength={60} placeholder='title of article' onChange={handleTitle}></input>
          <h6 className='text-red-600 text-bold text-right relative right-48'>{title.length}/60</h6>
        </div>
        <div className='flex mx-64 my-12'>
          <h1 className='text-3xl text-red-700 mx-10 my-1 font-extrabold'>Genre of article</h1>
          <select id="genre" onChange={handleGenre} className='w-64 h-10 text-black font-semibold text-center text-xl bg-transparent border-b-2 border-black'>
            <option>select one</option>
            <option>politics</option>
            <option>crime</option>
            <option>thriller</option>
            <option>mystery</option>
            <option>astrology</option>
            <option>horror</option>
            <option>sci-fi</option>
            <option>geopolitics</option>
            <option>hollywood</option>
            <option>bollywood</option>
            <option>kpop</option>
            <option>music</option>
            <option>art</option>
            <option>tradition</option>
            <option>spiritual</option>
            <option>yoga</option>
            <option>sport</option>
          </select>
        </div>
        <div className='flex mx-64 my-16'>
          <h1 className='text-3xl text-red-700 mx-10 my-1 font-extrabold'>Author's Name</h1>
          <input id="author" type='text' placeholder="author's name" className='bg-transparent text-black border-b-2 border-black w-64 h-10 font-medium text-xl p-5' maxLength={20} onChange={handleAuthor}></input>
        </div>
        <div className='flex mx-64'>
          <h1 style={{fontFamily:"cursive"}} className='italic text-5xl text-red-600 mx-10 font-bold'>Content</h1>
          <textarea id="content" className='bg-cyan-500 h-48 font-small text-xl bg p-5 border rounded-xl' cols={80} onChange={handleContent}></textarea>
        </div>
        <div className='flex align-middle justify-center'>
          <button style={{fontFamily:"fantasy"}} className='text-3xl border border-2 rounded-lg px-8 py-1 my-3 bg-cyan-500' onClick={submit}>submit</button>
        </div>
      </div>
    </div>
  );
}
