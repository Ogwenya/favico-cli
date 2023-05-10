#!/usr/bin/env node

import { Command } from "commander";
import { generateFavicon } from "./index.js";

const program = new Command();

program
  .version("1.0.0")
  .alias("v")
  .description("Favicon generator and Image compressor");

// generate favicon
program
  .command("generate <imagePath>")
  .alias("g")
  .description("Generate Favicon icon")
  .action((imagePath) => generateFavicon(imagePath));

program.parse(process.argv);
