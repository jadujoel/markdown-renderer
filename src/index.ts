import "highlight.js/lib/common";
import hljs from "highlight.js";
import { marked } from "marked";
import { style } from "../css.macro" with { type: 'macro' };

document.head.innerHTML += style()
const renderer = new marked.Renderer();
renderer.code = ({ text, lang }) => {
  try {
    const language = hljs.getLanguage(lang ?? "plaintext") === undefined ? "plaintext" : lang ?? "plaintext";
    const highlighted = hljs.highlight(text, { language }).value;
    return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
  } catch {
    return `<pre><code class="hljs language-plaintext">${text}</code></pre>`;
  }
};

marked.use({
  renderer
});

export default function render(str: string) {
  const div = document.createElement("div");
  div.className = "w-full markdown prose w-full break-words dark:prose-invert dark"
  const html = marked(str) as string;
  div.innerHTML = html;
  return { html, div }
}

export async function renderUrl(url: string) {
  const res = await fetch(url);
  const text = await res.text();
  return render(text);
}

export async function renderUrlToElement(url: string, element: HTMLElement) {
  element.innerHTML = (await renderUrl(url)).html
}
