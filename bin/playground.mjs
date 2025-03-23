#!/usr/bin/env node
// note: requires the project to be build first (`npm run build`)
import playground from "../build/index.js";

console.time(">> time");
const result = playground();
console.info(">> result:", result);
console.timeEnd(">> time");

const memoryUsage = process.memoryUsage();
console.info(`>> memory:
  rss: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB
  heapTotal: ${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB
  heapUsed: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB
  external: ${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB
  arrayBuffers: ${(memoryUsage.arrayBuffers / 1024 / 1024).toFixed(2)} MB
`);
