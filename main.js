const LinksSocialMedia = {
  github: 'Rafaviegas',
  youtube: 'watch?v=e-fA-gBCkj0',
  facebook: 'rafaella.viegas.37',
  instagram: 'rafaella_viegas_2004',
  twitter: 'RafaViegas5'
}

function ChangeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    // alert(li.children[0].href)
  }
}

ChangeSocialMediaLinks()

function GetGitHubprofileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      UserPhoto.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

GetGitHubprofileInfos()
