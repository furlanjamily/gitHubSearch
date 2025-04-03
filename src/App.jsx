import { useState } from 'react';
import imageGithub from './assets/imageGithub.png';
import imageGit from './assets/imageGit.png';
import imageSearch from './assets/imageSearch.png';



export default function App() {
  const [user, setUser] = useState("");

  const handleSearch = () => {
    console.log(`Procurando pelo usuário: ${user}`);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-[#1F1F1F]">
      <div className="flex flex-col w-full h-full max-w-[1156px] max-h-[537px] items-center bg-black">

        {/* Cabeçalho */}
        <div className="flex w-[384px] h-[82px] items-center pt-[39px]">
          <div className='w-[58px] h-[58px] mr-[11px]'>
            <img src={imageGithub} alt="Icon GitHub" className="h-full w-full" />
          </div>
          <div className="flex items-center text-white text-6xl font-semibold">
            Perfil
            <img
              src={imageGit}
              alt="Imagem GitHub"
              className="ml-[11px] w-[160px] h-[45px]"
            />
          </div>
        </div>


        {/* Campo de pesquisa */}
        <div className="flex mt-[27px] items-center bg-white border rounded-[10px]">
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Digite um usuário do Github"
            className="w-[503px] h-[62px] p-4 text-xl font-semibold rounded-[10px]"
          />
          <button
            onClick={handleSearch}
            className="flex justify-center items-center w-[62px] h-[62px] bg-[#005CFF] rounded-[10px]"
          >
            <img src={imageSearch} alt="Icon Pesquisa" className="w-[25px] h-[25px]" />
          </button>

        </div>


      </div>
    </div>
  );
}

