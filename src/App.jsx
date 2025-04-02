import imageGithub from './assets/imageGithub.png';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
        <img src={imageGithub} alt="Imagem GitHub"  className="mx-auto" />
        <p className="text-white mt-4">Perfil</p>
      </div>
    </div>
  );
}

export default App;
