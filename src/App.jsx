import { useState } from 'react';
import imageGithub from './assets/imageGithub.png';
import imageGit from './assets/imageGit.png';
import imageSearch from './assets/imageSearch.png';

export default function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [notFound, setNotFound] = useState(false);


  // Fetch para pesquisar pelo nome do usuário
  const handleSearch = () => {
    if (!username.trim()) return;

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setUserData(null);
          setNotFound(true);
        } else {
          setUserData(data);
          setNotFound(false);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error);
        setUserData(null);
        setNotFound(true);
      });
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-[#1F1F1F] overflow:hidden">
      <div className="flex flex-col w-full h-full max-w-[1156px] max-h-[537px] items-center bg-black">

        {/* Cabeçalho */}
        <div className="flex w-[384px] h-[82px] items-center pt-[39px] pb-[27px]">
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

        {/* Exibição do usuário encontrado */}
        {userData && (
          <div className="flex justify-between w-[804px] h-[257px] mt-[33px] bg-[#D9D9D9] border rounded-[25px]">

            {/* Imagem do usuário */}
            <div className="flex justify-start items-start">
              <img
                src={userData.avatar_url}
                alt="Avatar"
                className="w-[220px] h-[220px] mx-[33px] my-[20px] border-2 border-[#005CFF] rounded-full"
              />
            </div>

            {/* Username e Bio */}
            <div className="flex flex-col items-start justify-center h-full">
              <div className='pr-[70px] pl-[33px] flex flex-col text-left gap-4'>
                <p className="text-2xl font-bold text-[#005CFF]">{userData.name}</p>
                <p className="text-sm font-light">{userData.bio}</p>
              </div>
            </div>
          </div>
        )}

        {/* Usuário não encontrado */}

        {notFound && (
          <div className="flex flex-col justify-center items-center w-[710px] h-[88px] mt-[33px] bg-[#D9D9D9] text-[#FF0000] font-normal 
          size-5 border rounded-[10px]">
            <p>Nenhum perfil foi encontrado com ese nome de usuário.</p>
            <p>Tente novamente</p>
          </div>
        )}


      </div>
    </div>
  );
}

