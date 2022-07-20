import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GitHubContext from '../context/github/GithubContext';

function User() {
  const { getUser, user } = useContext(GitHubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>USER</div>;
}

export default User;
