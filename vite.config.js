const { defineConfig, loadEnv } = require("vite");

const lotrApiBaseUrl = "https://the-one-api.dev/v2";

function sendJson(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
}

function createLotrApiMiddleware(token) {
    return async function lotrApiMiddleware(req, res, next) {
        if (!req.url.startsWith("/api/characters")) {
            next();
            return;
        }

        if (!token) {
            sendJson(res, 500, {
                message: "Missing LOTR_API_TOKEN. Add it to your .env file."
            });
            return;
        }

        const requestUrl = new URL(req.url, "http://localhost");
        const characterName = requestUrl.searchParams.get("name")?.trim();

        if (!characterName) {
            sendJson(res, 400, {
                message: "Missing character name."
            });
            return;
        }

        try {
            const apiUrl = `${lotrApiBaseUrl}/character?name=/${encodeURIComponent(characterName)}/i`;
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                sendJson(res, response.status, {
                    message: data.message || "The One API request failed."
                });
                return;
            }

            sendJson(res, 200, data);
        } catch (error) {
            sendJson(res, 500, {
                message: error.message
            });
        }
    };
}

function lotrApiPlugin(env) {
    const token = env.LOTR_API_TOKEN;

    return {
        name: "lotr-api",
        configureServer(server) {
            server.middlewares.use(createLotrApiMiddleware(token));
        },
        configurePreviewServer(server) {
            server.middlewares.use(createLotrApiMiddleware(token));
        }
    };
}

module.exports = defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [lotrApiPlugin(env)]
    };
});
