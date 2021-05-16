const getContent = async () => {
  try {
    const response = await fetch('https://api.github.com/users/roger3g/repos')
    const data = await response.json()
    showContent(data)
  } catch (error) {
    console.log(error)
  }
}

const showContent = repos => {
  let output = ''

  for (let repo of repos) {
    const description = repo.description == null ? 'No description' : repo.description

    output += `
    <a href="${repo.html_url}" target="_blank" class="repo-card">
      <section class="name">
        <img src="../assets/github-repo.svg" alt="">

        <span>${repo.name}</span>
      </section>

      <sction class="description">
        ${description}
      </sction>

      <section class="start-fork">
        <span class="starts">
          <img src="../assets/gihub-start.svg" alt="Starts">
          <span>${repo.stargazers_count}</span>
        </span>
        
        <span class="forks">
          <img src="../assets/github-fork.svg" alt="Forks">
          <span>${repo.forks}</span>
        </span>
      </section>
    </a>`
  }

  return document.querySelector('#content').innerHTML = output
}

getContent()