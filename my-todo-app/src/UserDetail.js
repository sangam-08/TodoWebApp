import React from 'react'

function UserDetail({userList}) {
    
    return (
        <div>
            <h2>User Table</h2>

            <table>
                <tr>
                    <th>User Id</th>
                    <th>EthAddress</th>
                    <th>FacebookId</th>
                    <th>TwitterHandle</th>
                </tr>

                { userList.length && userList.map((user,idx)=>{
                    return(
                        <tr id = {idx}>
                    <td>{user.userId}</td>
                    <td>{user.ethAddress}</td>
                    <td>{user.facebookId}</td>
                    <td>{user.twitterHandle}</td>
                </tr>)
                    
                    
                })}
                
                </table>

        </div>
    )
}

export default UserDetail;
