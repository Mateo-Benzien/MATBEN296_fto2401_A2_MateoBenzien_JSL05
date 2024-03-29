// Array of song objects
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Add more songs
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Thriller", artist: "Michael Jackson", genre: "Pop" },
    { title: "Hotel California", artist: "Eagles", genre: "Rock" },
    { title: "Let It Be", artist: "The Beatles", genre: "Rock" },
    { title: "Respect", artist: "Aretha Franklin", genre: "R&B" }
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = {};
    for (const guardian in guardians) {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);
        playlists[guardian] = playlist;
    }
    return playlists;
}

// Display playlists on the web page
function displayPlaylists(playlists) {
    const playlistsDiv = document.getElementById('playlists');
    for (const guardian in playlists) {
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');

        const guardianHeading = document.createElement('h2');
        guardianHeading.textContent = `${guardian}'s Playlist:`;
        playlistDiv.appendChild(guardianHeading);

        const songList = document.createElement('ul');
        playlists[guardian].forEach(song => {
            const songItem = document.createElement('li');
            songItem.classList.add('song');
            const songTitle = document.createElement('span');
            songTitle.classList.add('song-title');
            songTitle.textContent = `${song.title} by ${song.artist}`;
            songItem.appendChild(songTitle);
            songList.appendChild(songItem);
        });
        playlistDiv.appendChild(songList);
        playlistsDiv.appendChild(playlistDiv);
    }
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);
