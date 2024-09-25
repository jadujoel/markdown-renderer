# Markdown Renderer

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
  import render from "https://github.jadujoel.com/markdown-renderer/index.js"
  start()
  async function start() {
    const text = await fetch('https://github.jadujoel.com/markdown-renderer/README.md').then(response => response.text());
    console.log(text)
    const ret = render(text);
    document.body.appendChild(ret.div);
  }
</script>
```

You will now have rendered your readme file as markdown on the webpage.

[Example page](https://github.jadujoel.com/markdown-renderer/README.md)

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
