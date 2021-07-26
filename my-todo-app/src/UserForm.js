import React, {useState, useEffect} from 'react';
import {createClient, getAllClients} from './action/user';
import UserDetail from './UserDetail';

function UserForm() {
    const initialDetail = {
        userId:'',
        ethAddress:'',
        facebookId:'',
        twitterHandle:''
    }
    const [userDetail, setUserDetail] = useState(initialDetail);
    const [userList, setUserList] = useState('')
    
    const getAllClients = () => {
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
              console.log(res,"uuuuuuuuuuu");
            setUserList(res)
          })
          .catch((error) => {
            console.error(error);
          });
      }


    const handleChange = (event) => {
        const {name,value} = event.target
        console.log(name,"888888888",value);
        setUserDetail({...userDetail,[name]:value}) 
    }

    const handleSubmit = () => {
        if(userDetail.userId && userDetail.ethAddress && userDetail.facebookId && userDetail.twitterHandle ) {
            alert("form was submited")
            createClient(userDetail)
            setUserDetail(initialDetail)
        }
        else {
            alert ("kindly fill the form")
        }
    }
   console.log(userList,"11111111111111");
    return (
        <div >
            <div className = "mb-15">
                <button className = "Get-button" onClick = {getAllClients}>Refresh</button>
            </div>
            <UserDetail userList = {userList} />
            <h1>User Form</h1>
            <div className = "d-flex">
            <div className = "mb-15">
                <label className ="form-label">Userid</label> <br/>
                <input className = "input-feild" value = { userDetail.userId } name = {'userId'} onChange = {handleChange} />
            </div>
            <div className = "mb-15">
                <label className ="form-label">EthAddress</label> <br/>
                <input className = "input-feild" value = { userDetail.ethAddress } name = {'ethAddress'} onChange = {handleChange}  />
            </div>
            <div className = "mb-15">
                <label className ="form-label">FacebookId</label> <br/>
                <input className = "input-feild" value = { userDetail.facebookId } name = {'facebookId'} onChange = {handleChange} />
            </div>
            <div className = "mb-15">
                <label className ="form-label">TwitterHandle</label> <br/>
                <input className = "input-feild" value = { userDetail.twitterHandle } name = {'twitterHandle'} onChange = {handleChange} />
            </div>
            </div>
            <div className = "mb-15">
                <button className = "submit-button" onClick = {handleSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default UserForm;
