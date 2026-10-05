// Use Astro's programmatic preview so agent detection cannot detach the CLI
// process from Playwright's webServer lifecycle.
import { preview } from 'astro';

const server = await preview({ root: process.cwd(), server: { host: '127.0.0.1', port: 4321 } });
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, async () => {
    await server.stop();
    process.exit(0);
  });
}
