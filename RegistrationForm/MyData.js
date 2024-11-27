import React, { useEffect, useState } from "react";
import './MyData.css';

function MyData() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost/pdc20/get_user.php', {
                method: 'GET', 
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []); 

    return (
        <div className="mydata-container">
            <h1>User List</h1>

            {error && <p className="error-message">Error: {error}</p>}

            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Contact No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.ID}>
                                <td>{user.ID}</td>
                                <td>{user.Name}</td>
                                <td>{user.Gender}</td>
                                <td>{user.ContactNo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-users">No users found.</p>
            )}
        </div>
    );
}

export default MyData;
