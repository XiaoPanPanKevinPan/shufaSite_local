import http from "node:http";
import handler from "serve-handler";
import * as gluon from "@gluon-framework/gluon";
import fs from "node:fs";

// the closer
class Closer {
	constructor() {}
	#todo = [];
	add(fn) {
		this.#todo.push(fn);
	}
	async close() {
		while(this.#todo.length > 0)
			await this.#todo.pop()();

	}
}
const closer = new Closer();

// set a port randomly
const port = Math.floor(1025 + Math.random() * (49151 - 1025));

// serve the static site
const server = http.createServer((req, res) => handler(req, res, {
	public: "site"
}));
await new Promise(res => server.listen(port, res));
closer.add(async () => {
	console.log("Shutting down the server...");
	const result = await new Promise(res => server.close(res)); 
	console.log("The server is shut down.");
	return result;
});

// open a window
const window = await gluon.open(`http://localhost:${port}/`, { allowHTTP: true });
closer.add(() => {
	window.close();
	fs.rm("gluon_data", { recursive: true })
})

// shut down everything if the window is closed
const windowCloseDetection = setInterval(async () => {
	if(!window.closed) return;

	await closer.close();
	console.log("Everything's closed.");
}, 333);
closer.add(() => clearInterval(windowCloseDetection));
