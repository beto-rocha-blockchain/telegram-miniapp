import React from 'react';
import WebApp from '@twa-dev/sdk';

const App: React.FC = () => {
  // Exemplo de uso do MainButton do Telegram
  React.useEffect(() => {
    WebApp.MainButton.setText('Clique aqui');
    WebApp.MainButton.show();
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao Mini App do Telegram</h1>
      <p>Usuário: {WebApp.initDataUnsafe?.user?.first_name}</p>
      {/* Aqui você pode adicionar a lógica para conectar a carteira Ethereum e integrar o zkVerify */}
    </div>
  );
};

export default App;
