const res= await Bun.build({
  entrypoints: ["src/index.ts"],
  outdir: "dist",
  minify: true,
});
if (!res.success) {
  console.log(res.logs)
  throw new Error("Build failed");
}

await Bun.write("dist/index.html", Bun.file("src/index.html"));
await Bun.write("dist/README.md", Bun.file("README.md"));
await Bun.write("dist/favicon.ico", Bun.file("src/favicon.ico"));
