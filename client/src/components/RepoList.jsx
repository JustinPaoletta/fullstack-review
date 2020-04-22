import React from 'react';

const RepoList = ({repos}) => (

  <div>
    {console.log(repos)};
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
{repos.map((repo) => {return <div><ul><li>{<a href={repo.html_url}>{repo.name}</a>}</li><li>{repo.html_url}</li><li>{repo.stargazers_count}</li></ul></div>})}
  </div>
)

export default RepoList;