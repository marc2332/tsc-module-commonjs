To reproduce, run:
* npm run with-ts-loader
* npm run with-tsc

Each one of these commands will build the same file (`example_file.ts`) under each's folder (`./with-ts-loader` & `./with-tsc`).

They both use the same compilerOptions (both specify to be compiled to CommonJS). But only TSC does really do it, ts-loader just ignores whatever type of module you specify, it always fallbacks to EsModules.