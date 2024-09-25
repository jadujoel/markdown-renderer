import hljs from "highlight.js";
import { marked } from "marked";
import { style } from "../css.macro" with { type: 'macro' };

document.head.innerHTML += style()

const renderer = new marked.Renderer();
renderer.code = ({ text, lang }) => {
  const validLanguage =
    hljs.getLanguage(lang ?? "plaintext")?.name ?? "plaintext";
  const highlighted = hljs.highlight(text, { language: validLanguage }).value;
  return `<pre><code class="hljs language-${validLanguage}">${highlighted}</code></pre>`;
};

marked.use({
  renderer
});

export default function render(str: string) {
  const div = document.createElement("div");
  div.className = "w-full markdown prose w-full break-words dark:prose-invert dark"
  const html = marked(str) as string;
  div.innerHTML = html;
  return { html, div}
}
