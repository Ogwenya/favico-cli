#!/usr/bin/env node

import { Command } from "commander";
import { generateFavicon, compressImage } from "./index.js";

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

program
  .command("compress <imagePath>")
  .alias("c")
  .description("Compress Image")
  .option(
    "--replace",
    "Replace the provided image with a compressed one rather than creating a new compressed image"
  )
  .action((imagePath, options) => compressImage(imagePath, options));

program.parse(process.argv);
