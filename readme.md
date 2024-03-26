
  <div id="profile" class="profile-container">
    <header class="profile-header">
      <h3 class="username"><%= user.username %></h3>
      <div class="profile-icons">
        <a href="/upload" class="upload-icon"><i class="ri-add-box-line"></i></a>
        <i class="placeholder-icon"></i> </div>
    </header>

    <main class="profile-main">
      <section class="profile-image">
        <img class="user-avatar" src="/images/uploads/<%= user.picture %>" alt="<%= user.username %>">
      </section>

      <section class="profile-stats">
        <div class="stat">
          <h3><%= user.posts.length %></h3>
          <h4>Posts</h4>
        </div>
        <div class="stat">
          <h3><%= user.followers.length %></h3>
          <h4>Followers</h4>
        </div>
        <div class="stat">
          <h3><%= user.following.length %></h3>
          <h4>Following</h4>
        </div>
      </section>

      <section class="profile-info">
        <h3 class="user-name"><%= user.name %></h3>
        <p class="user-bio"><%= user.bio ?? "You haven't set a bio yet. Click edit profile to set one." %></p>
        <a href="/edit" class="edit-profile-btn">Edit Profile</a>
      </section>

      <section class="user-posts">
        <% if (user.posts.length > 0) { %>
          <% user.posts.reverse().forEach(function(post) { %>
            <div class="post-item">
              <img class="post-image" src="/images/uploads/<%= post.picture %>" alt="Post by <%= user.username %>">
            </div>
          <% }) %>
        <% } else { %>
          <div class="no-posts">
            <small class="opacity-50">No posts yet.</small>
          </div>
        <% } %>
      </section>
    </main>

    <nav class="profile-navigation">
      <a href="/feed" class="nav-item"><i class="ri-home-line"></i></a>
      <a href="/search" class="nav-item"><i class="ri-search-line"></i></a>
      <a href="/upload" class="nav-item"><i class="ri-add-box-line"></i></a>
      <a href="/profile" class="nav-item active">
        <div class="nav-profile-image">
          <img class="profile-pic" src="/images/uploads/<%= user.picture %>" alt="<%= user.username %>">
        </div>
      </a>
    </nav>
  </div>


   body,
  ul {
    margin: 0;
    padding: 0;
  }

  /* Style the navigation bar */
  nav {
    background-color: #d5d7dc;
    /* Facebook's primary color */
    padding: 10px;
    width: 20vw;
    height: 100vh;
    position: fixed;
  }

  nav ul li {
    list-style: none;
    margin-left: 30px;
  }

  #title-nav {
    font-size: 32px;
    font-style: italic;
  }

  #icon {
    margin-top: 30px;
    font-size: 22px;
  }

  #icon:hover {
    color: goldenrod;
  }

  #icon a i {
    margin-right: 20px;
  }


  #pic {
    display: flex;
    margin-top: 30px;
    font-size: 22px;
  }

  #pic a:hover {
    color: goldenrod;
  }

  #pic img {
    margin-right: 20px;
  }




   <div id="profile-navigation">
          <a id="btn3" href="/feed" class="nav-item"><i class="ri-home-line"></i></a>
          <a id="btn3" href="/search" class="nav-item"><i class="ri-search-line"></i></a>
          <a id="btn3" href="/upload" class="nav-item"><i class="ri-add-box-line"></i></a>
          <a id="btn3" href="/profile" class="nav-item active">
            <div class="nav-profile-image">
              <img id="btn3" class="profile-pic" src="/images/uploads/<%= user.picture %>" alt="<%= user.username %>">
            </div>
          </a>
        </div>