import { useEffect, useState } from "react";

export default function Default(){
    const [content0 , setContent0] = useState('loading ...');
    const [content1 , setContent1] = useState('loading ...');
    const [content2 , setContent2] = useState('loading ...');
    const [content3 , setContent3] = useState('loading ...');
    const [genre0 , setGenre0] = useState('loading ...');
    const [genre1 , setGenre1] = useState('loading ...');
    const [genre2 , setGenre2] = useState('loading ...');
    const [genre3 , setGenre3] = useState('loading ...');
    const [author0 , setAuthor0] = useState('loading ...');
    const [author1 , setAuthor1] = useState('loading ...');
    const [author2 , setAuthor2] = useState('loading ...');
    const [author3 , setAuthor3] = useState('loading ...');
    const [title0 , setTitle0] = useState('loading ...');
    const [title1 , setTitle1] = useState('loading ...');
    const [title2 , setTitle2] = useState('loading ...');
    const [title3 , setTitle3] = useState('loading ...');
    
    
    let len = 0;
    useEffect(()=>{
        axios.get("http://localhost:3001/").then((response)=>{

            console.log(response.data[0]);
            len = response.data.length;
            let resp = response.data
            console.log(len);
            setContent0(resp[len].content);
            setTitle0(resp[len].title);
            setGenre0(resp[len].genre);
            setAuthor0(resp[len].author);
            const j1 = Math.floor(Math.random()*len);
            setContent1(resp[j1].content);
            setTitle1(resp[j1].title);
            setGenre1(resp[j1].genre);
            setAuthor1(resp[j1].author);
            const j2 = Math.floor(Math.random()*len);
            setContent2(resp[j2].content);
            setTitle2(resp[j2].title);
            setGenre2(resp[j2].genre);
            setAuthor2(resp[j2].author);
            const j3 = Math.floor(Math.random()*len);
            setContent3(resp[j3].content);
            setTitle3(resp[j3].title);
            setGenre3(resp[j3].genre);
            setAuthor3(resp[j3].author);

        })
        
    })
    return(
        <div className="p-10 pt-2 bg-black">
            <div className='text-center'>
            <h1 style={{fontFamily:'fantasy'}} className='text-6xl mt-5 font-serif text-sky-950'>minreva blogpost</h1>
            <h1 className='italic font-bold text-cyan-900 text-xl mb-10'>"where content is king"</h1>
        </div>
            <div className="border-2 rounded-xl p-4 mb-5">
                <h3 className="italic font-normal text-blue-300">new</h3>
                <h1 className="font-bold text-2xl">{title0}</h1>
                <h4 className="p-2">Genre : <span className="font-bold">{genre0}</span></h4>
                <p className=" font-light">
                {content0}
                </p>    
                <h6 className="text-right pr-5">By {author0}</h6>
            </div>
            <div className="border-2 rounded-xl p-4 mb-5">
                <h1 className="font-bold text-2xl">{title1}</h1>
                <h4 className="p-2">Genre : <span className="font-bold">{genre1}</span></h4>
                <p className=" font-light">
                {content1}
                </p>    
                <h6 className="text-right pr-5">By {author1}</h6>
            </div>
            <div className="border-2 rounded-xl p-4 mb-5">
                <h1 className="font-bold text-2xl">{title2}</h1>
                <h4 className="p-2">Genre : <span className="font-bold">{genre2}</span></h4>
                <p className=" font-light">
                {content2}
                </p>    
                <h6 className="text-right pr-5">By {author2}</h6>
            </div>
            <div className="border-2 rounded-xl p-4 mb-5">
                <h1 className="font-bold text-2xl">{title3}</h1>
                <h4 className="p-2">Genre : <span className="font-bold">{genre3}</span></h4>
                <p className=" font-light">
                {content3}
                </p>    
                <h6 className="text-right pr-5">By {author3}</h6>
            </div>
        </div>
    );
}