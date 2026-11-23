import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'
import { pages } from '../src/content.js'

const template = await readFile('dist/index.html', 'utf8')
const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' })
try {
  const { render } = await server.ssrLoadModule('/src/static.jsx')
  for (const path of [...pages.map(p=>p.path), '/404']) {
    const { head, html } = render(path)
    const output = template.replace('<!--sis-head-->', () => head).replace('<!--sis-page-->', () => html)
    await writeFile('dist' + (path === '/' ? '/index' : path) + '.html', output)
  }
} finally {
  await server.close()
}
