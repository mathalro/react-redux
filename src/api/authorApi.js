import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export async function saveAuthor(author) {
  try {
    let response = await fetch(baseUrl + (author.id || ""), {
      method: author.id ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(author),
    });
    return handleResponse(response);
  } catch (handleError) {
    return handleError(handleError);
  }
}
