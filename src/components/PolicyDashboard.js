import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PolicyDashboard() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const res = await axios.get('/api/policies');
        setPolicies(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchPolicies();
  }, []);

  return (
    <div>
      <h1>Policies</h1>
      <ul>
        {policies.map(policy => (
          <li key={policy._id}>
            <h3>{policy.title}</h3>
            <p>{policy.description}</p>
            <p>Accessibility Impact: {policy.accessibilityImpact}</p>
            <p>Created by: {policy.createdBy.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PolicyDashboard;
