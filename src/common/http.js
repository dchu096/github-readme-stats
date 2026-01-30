// @ts-check

/**
 * Send GraphQL request to GitHub API (Cloudflare Workers compatible).
 *
 * @param {any} data Request data.
 * @param {Record<string, string>} headers Request headers.
 * @returns {Promise<{ data: any }>} Axios-compatible response shape.
 */
const request = async (data, headers = {}) => {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "github-readme-stats",
      ...headers,
    },
    body: JSON.stringify(data),
  });

  const text = await res.text();

  if (!res.ok) {
    console.log("GitHub GraphQL HTTP error:", res.status, text.slice(0, 500));
    throw new Error(`GitHub GraphQL HTTP ${res.status}`);
  }

  let json;
  try {
    json = JSON.parse(text);
  } catch {
    console.log("GitHub GraphQL non-JSON response:", text.slice(0, 500));
    throw new Error("GitHub GraphQL returned invalid JSON");
  }

  // IMPORTANT: keep axios-compatible shape
  return { data: json };
};

export { request };
