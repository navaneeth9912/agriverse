async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    console.log("starting server");

    server.listen();
  } else {
    const { worker } = await import("./browser");
    console.log("starting worker");
    worker.start();
  }
}

initMocks();

export {};
