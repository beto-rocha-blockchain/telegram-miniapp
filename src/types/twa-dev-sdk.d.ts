declare module '@twa-dev/sdk' {
  interface WebApp {
    ready(): void;
    MainButton: {
      setText(text: string): void;
      show(): void;
      hide(): void;
    };
    initDataUnsafe: {
      user?: {
        first_name?: string;
      };
    };
  }

  const WebApp: WebApp;
  export default WebApp;
} 