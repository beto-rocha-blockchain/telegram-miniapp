// wagmiConfig.ts
import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

const projectId = 'SEU_PROJECT_ID_DO_WALLETCONNECT';

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    walletConnect({
      projectId,
      metadata: {
        name: 'Seu Mini App',
        description: 'Mini App do Telegram com integração Ethereum',
        url: 'https://seuapp.com',
        icons: ['https://seuapp.com/icon.png'],
      },
    }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
});
