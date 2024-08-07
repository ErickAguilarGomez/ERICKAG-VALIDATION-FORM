export default async function countryData() {
  // Obtener el token de autenticación
  const response = await fetch(
    "https://www.universal-tutorial.com/api/getaccesstoken",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token":
          "u4XCjccQeFVOLAy7oKGu14IvqAfHpGlFQZ2u90fUcQX0zcTERur0svAMjstHJy05ZZM",
        "user-email": "lemayor040@hotmail.com"
      }
    }
  );

  const data1 = await response.json();
  const token = data1.auth_token;
  

  const response3 = await fetch(
    `https://www.universal-tutorial.com/api/states/Peru`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  );

  const states = await response3.json();
  return states; 
}
