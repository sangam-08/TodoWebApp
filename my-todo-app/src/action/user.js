export const getAllClients = () => {
    // const myHeaders = new Headers();
  
    /* 
      myHeaders.append('Content-Type', 'application/json'); 
      since it's a get request you don't need to specify your content-type
    */
  
    // myHeaders.append('Authorization', 'Token 1234abcd');
  
    return fetch('http://localhost:8080/api/students', {
      method: 'GET',
      // mode: 'no-cors',
      // headers: myHeaders,
    })
      .then(response => response.json())
      .then((res) => {
        console.log(res,"uuuuuuuuuuuuuuuuuuuu");
        return res
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  export  const createClient = (data) => {
    // const myHeaders = new Headers();
  
    /* 
      myHeaders.append('Content-Type', 'application/json'); 
      since it's a get request you don't need to specify your content-type
    */
  
    // myHeaders.append('Authorization', 'Token 1234abcd');
  
 return fetch('http://localhost:8080/api/students', {
  method: 'post',
  headers: {
    // 'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(res => res.json())
  .then(res => console.log(res,"response"));
  }