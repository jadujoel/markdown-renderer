# Markdown Renderer

[Example page](https://jadujoel.github.io/markdown-renderer/)

## Quickstart

Include this html:

```html
<style>
  body {
    background-color: #202020;
    height: 100vh;
    width: 100vw;
  }
</style>
<script type="module">
  import render from "https://jadujoel.github.io/markdown-renderer/index.js"
  start()
  async function start() {
    const text = await fetch('https://jadujoel.github.io/markdown-renderer/README.md').then(response => response.text());
    console.log(text)
    const ret = render(text);
    document.body.appendChild(ret.div);
  }
</script>
```

Or include this html:

```html
<style>
  body {
    background-color: #202020;
    height: 100vh;
    width: 100vw;
  }
</style>
<script type="module">
  import { renderUrl, renderUrlToElement } from "https://jadujoel.github.io/markdown-renderer/index.js"
  renderUrl('https://jadujoel.github.io/markdown-renderer/README.md').then(ret => {
    console.log(ret)
    document.body.appendChild(ret.div);
  });

  const div = document.createElement('div');
  document.body.appendChild(div);
  renderUrlToElement('https://jadujoel.github.io/markdown-renderer/README.md', div);
</script>

You will now have rendered your readme file as markdown on the webpage.

- fast
- convenient
- have a good day

## Develop

```bash
git clone git@github.com:jadujoel/markdown-renderer.git
bun install
bun run build
bunx bun-serve dist
```
