import { useState } from 'react';
import imageGithub from './assets/imageGithub.png';
import Search from './assets/Search.png';


export default function App() {
  const [user, setUser] = useState("");

  const handleSearch = () => {
    console.log(`Procurando pelo usuário: ${user}`);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-[#1F1F1F]">
      <div className="flex flex-col w-full h-full max-w-[1156px] max-h-[537px] items-center bg-black">

        {/* Cabeçalho */}
        <div className="flex w-[384px] h-[82] items-center text-center pt-[39px]">
          <div className='h-[58px] w-[58px] mr-[11px]'>
            <img src={imageGithub} alt="Imagem GitHub" className="h-full w-full" />
          </div>
          <p className="flex text-white text-6xl font-semibold">
            Perfil <span className='ml-[11px]'>GitHub</span>
          </p>

          
        </div>


        {/* Campo de pesquisa */}
        <div className="mt-[27px]">
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Digite um usuário do Github"
            className="w-[503px] h-[62px] p-4 text-xl font-semibold bg-white"
          />
          <button onClick={handleSearch}>
          <img src={Search} alt="Imagem Pesquisa" className="h-full w-full" />
          </button>

        </div>


      </div>
    </div>
  );
}

