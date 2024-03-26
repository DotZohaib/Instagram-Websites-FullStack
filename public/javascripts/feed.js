const storyList = document.getElementById('story-list');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const initialStoryCount = <%= initialStoryCount %>; // Access the variable from template

    let displayedStories = initialStoryCount;

    loadMoreBtn.addEventListener('click', async function() {
      const storiesToLoad = Math.min(initialStoryCount, stories.length - displayedStories);

      try {
        // Simulate fetching additional stories (replace with actual logic)
        const additionalStories = stories.slice(displayedStories, displayedStories + storiesToLoad);

        additionalStories.forEach(function(story) {
          const storyLink = document.createElement('a');
          storyLink.href = `/story/${story.id}`;

          // Create the story link structure (similar to existing loop)

          storyList.appendChild(storyLink);
        });

        displayedStories += storiesToLoad;

        if (displayedStories >= stories.length) {
          loadMoreBtn.disabled = true; // Disable button if all stories are loaded
        }
      } catch (error) {
        console.error(error); // Handle any errors during