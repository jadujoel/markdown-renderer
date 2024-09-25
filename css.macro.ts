export async function style() {
  const monokai = await fetch(
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/monokai-sublime.min.css",
  ).then((res) => res.text());
  await Bun.$`bunx tailwindcss -i src/tailwind.css -o dist/index.css`;
  const tailwind = await Bun.file("dist/index.css").text();
  return `<style>\n${monokai}\n${tailwind}></style>`;
}
