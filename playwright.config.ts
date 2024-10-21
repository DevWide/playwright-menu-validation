import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: {
        baseURL: 'https://www.atomicsolutions.com.br/',
        browserName: 'chromium',
        launchOptions: {
          slowMo: 500, // Atraso de 500ms para desacelerar a execução
          headless: false, // Exibir o navegador durante o teste
        },
      },
    },
  ],
  reporter: [['list'], ['json', { outputFile: 'test-results.json' }]], // Relatórios de testes
});
