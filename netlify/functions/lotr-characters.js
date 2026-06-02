const lotrApiBaseUrl = "https://the-one-api.dev/v2";

exports.handler = async function (event) {
  const token = process.env.LOTR_API_TOKEN;

  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Missing LOTR_API_TOKEN. Add it to your Netlify environment variables."
      })
    };
  }

  const characterName = event.queryStringParameters?.name?.trim();

  if (!characterName) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing character name."
      })
    };
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
      return {
        statusCode: response.status,
        body: JSON.stringify({
          message: data.message || "The One API request failed."
        })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message
      })
    };
  }
};
