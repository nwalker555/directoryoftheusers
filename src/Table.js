import React, {useState,useEffect} from "Reace";

return (
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th>Cell</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Post Code</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{title}</td>
                    <td>{first}</td>
                    <td>{last}</td>
                    <td>{gender}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{Cell}</td>
                    <td>{City}</td>
                    <td>{State}</td>
                    <td>{Country}</td>
                    <td>{postcode}</td>
                    <td><img src={thumbnail}/></td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default Table;