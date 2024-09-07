// Data for the applications (titles, image URLs, and links)
const appData = [
    { title: 'Phone', imageUrl: 'phone.jpg', link: 'https://example.com/app1' },
    { title: 'Music', imageUrl: 'appleM.png', link: 'RadioPlayer.html' },
    { title: 'Maps', imageUrl: 'AppleMaps.png', link: 'https://example.com/app3' },
    { title: 'Messages', imageUrl: 'IMessage.png', link: 'https://example.com/app4' },
    { title: 'Now Playing', imageUrl: 'NowPlaying.jpg', link: 'https://example.com/app2' },
    { title: 'Spotify', imageUrl: 'spotify.png', link: 'https://example.com/app1' },
    { title: 'AudiBooks', imageUrl: 'book.png', link: 'https://example.com/app3' },
    { title: 'Settings', imageUrl: 'settings.jpg', link: 'https://example.com/app4' }
];

// Function to dynamically create app elements based on the data
function createApps() {
    const appContainer = document.getElementById('appContainer');
    const miniAppsContainer = document.getElementById('miniApps');
    
    appData.forEach((app, index) => {
        // Create main app
        const appDiv = document.createElement('div');
        appDiv.classList.add('app');
        appDiv.onclick = () => window.location.href = app.link;

        const imgElement = document.createElement('img');
        imgElement.src = app.imageUrl;
        imgElement.alt = app.title;

        const titleElement = document.createElement('p');
        titleElement.textContent = app.title;

        appDiv.appendChild(imgElement);
        appDiv.appendChild(titleElement);
        appContainer.appendChild(appDiv);

        // For the first three apps, create mini versions in the sidebar
        if (index < 3) {
            const miniAppDiv = document.createElement('div');
            miniAppDiv.classList.add('mini-app');
            miniAppDiv.onclick = () => window.location.href = app.link;

            const miniImg = document.createElement('img');
            miniImg.src = app.imageUrl;
            miniImg.alt = app.title;

            const miniTitle = document.createElement('p');
            miniTitle.textContent = app.title;

            miniAppDiv.appendChild(miniImg);
            miniAppDiv.appendChild(miniTitle);
            miniAppsContainer.appendChild(miniAppDiv);
        }
    });
}

// Function to update the time
function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}

// Toggle fullscreen mode
const fullscreenButton = document.getElementById('fullscreenButton');
fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

setInterval(updateTime, 1000);
updateTime(); // Initial call to set the time immediately

createApps(); // Call the function to create the apps dynamically
