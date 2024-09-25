await Bun.build({
  entrypoints: ["src/index.ts"],
  outdir: "dist",
  minify: true,
});

await Bun.write("dist/index.html", Bun.file("src/index.html"));
await Bun.write("dist/README.md", Bun.file("README.md"));
await Bun.write("src/favicon.ico", Bun.file("src/favicon.ico"));
