// State Management
let currentTab = 'foryou';
let watchlist = [];
let favourites = [];

// Mock Database with Real Posters
const database = {
    trending: [
        { id: 't1', title: "Dune", rating: "8.0", desc: "Epic sci-fi adventure.", rank: "Trending #1", img: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/15/53/b9/1553b93b-25b7-cbed-eff5-34d8efe8e09a/pr_source.lsr/600x600bb.jpg", type: "movie" },
        { id: 't2', title: "Shogun", rating: "9.2", desc: "Historical epic set in Japan.", rank: "Trending #2", img: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/19/9e/7b/199e7b4f-dffa-a9e9-50d5-3ca6d5963da6/2fe68501-e05a-4528-84bf-8389d9bf20d8_Shogun1980_CoverArt_3000x3000.png/600x600bb.jpg", type: "webseries" },
        { id: 't3', title: "Fallout", rating: "8.5", desc: "Post-apocalyptic wasteland.", rank: "Trending #3", img: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/22/ff/b2/22ffb2f6-dd46-056f-e062-e6c87e73fc05/pr_source.lsr/600x600bb.jpg", type: "webseries" },
        { id: 't4', title: "Oppenheimer", rating: "8.6", desc: "The story of the atomic bomb.", rank: "Trending #4", img: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c5/12/b8/c512b816-6759-d93b-8176-8e57d4a8bad8/4205-square.jpg/600x600bb.jpg", type: "movie" }
    ],
    movies: [
        { id: 'm1', title: "Dune", rating: "8.0", desc: "Epic sci-fi adventure.", img: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/15/53/b9/1553b93b-25b7-cbed-eff5-34d8efe8e09a/pr_source.lsr/600x600bb.jpg", type: "movie" },
        { id: 'm2', title: "Oppenheimer", rating: "8.6", desc: "The story of the atomic bomb.", img: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c5/12/b8/c512b816-6759-d93b-8176-8e57d4a8bad8/4205-square.jpg/600x600bb.jpg", type: "movie" },
        { id: 'm3', title: "Interstellar", rating: "8.6", desc: "A journey through space and time.", img: "https://is1-ssl.mzstatic.com/image/thumb/Video125/v4/d5/4b/36/d54b360b-80bd-8e3d-ff96-857c7c3c2f0f/pr_source.lsr/600x600bb.jpg", type: "movie" },
        { id: 'm4', title: "The Dark Knight", rating: "9.0", desc: "Batman faces the Joker.", img: "https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/7e/38/54/7e385472-fb39-5e7e-3ce3-5c2020fcdaee/pr_source.lsr/600x600bb.jpg", type: "movie" }
    ],
    webseries: [
        { id: 'w1', title: "Shogun", rating: "9.2", desc: "Historical epic set in Japan.", img: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/19/9e/7b/199e7b4f-dffa-a9e9-50d5-3ca6d5963da6/2fe68501-e05a-4528-84bf-8389d9bf20d8_Shogun1980_CoverArt_3000x3000.png/600x600bb.jpg", type: "webseries" },
        { id: 'w2', title: "Fallout", rating: "8.5", desc: "Post-apocalyptic wasteland.", img: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/22/ff/b2/22ffb2f6-dd46-056f-e062-e6c87e73fc05/pr_source.lsr/600x600bb.jpg", type: "webseries" },
        { id: 'w3', title: "Breaking Bad", rating: "9.5", desc: "A chemistry teacher turns kingpin.", img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c2/a8/c3/c2a8c3d6-56cf-6817-c4e6-731b672b6a76/rm_image.jpg/600x600bb.jpg", type: "webseries" },
        { id: 'w4', title: "The Last of Us", rating: "8.8", desc: "Surviving a fungal apocalypse.", img: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0e/a9/ca/0ea9caf2-fe86-b8de-c9e3-4763ad177a83/rm_image.jpg/600x600bb.jpg", type: "webseries" }
    ],
    results: {
        "result_core": [
            { id: "r1", title: "Bodyguard", rating: "8.1", desc: "Hooks you in ep 1. Short, finished. No drag.", rank: "🔥 Top Pick", img: "https://static.tvmaze.com/uploads/images/original_untouched/162/406981.jpg", type: "webseries" },
            { id: "r2", title: "The Recruit", rating: "7.4", desc: "Fast, fun, bingeable. Constant situations changing.", rank: "⚡ Quick Binge", img: "https://static.tvmaze.com/uploads/images/original_untouched/433/1083995.jpg", type: "webseries" },
            { id: "r3", title: "Limitless", rating: "7.7", desc: "Underrated gem. Every episode feels fresh and fast.", rank: "🧠 Hidden Gem", img: "https://static.tvmaze.com/uploads/images/original_untouched/17/44917.jpg", type: "webseries" }
        ],
        "result_slow_burn": [
            { id: "r4", title: "Better Call Saul", rating: "8.9", desc: "Masterful character study.", rank: "Masterpiece", img: "https://static.tvmaze.com/uploads/images/original_untouched/402/1007255.jpg", type: "webseries" },
            { id: "r5", title: "Succession", rating: "8.8", desc: "Complex power dynamics.", rank: "Drama", img: "https://static.tvmaze.com/uploads/images/original_untouched/406/1017366.jpg", type: "webseries" }
        ],
        "result_comedy": [
            { id: "r6", title: "The Office", rating: "9.0", desc: "Gold standard sitcom.", rank: "Classic", img: "https://static.tvmaze.com/uploads/images/original_untouched/85/213184.jpg", type: "webseries" },
            { id: "r7", title: "Brooklyn Nine-Nine", rating: "8.4", desc: "Fast and funny.", rank: "Feel Good", img: "https://static.tvmaze.com/uploads/images/original_untouched/181/452837.jpg", type: "webseries" }
        ],
        "result_epics": [
            { id: "r8", title: "Game of Thrones", rating: "9.2", desc: "Sprawling fantasy.", rank: "Epic", img: "https://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg", type: "webseries" },
            { id: "r9", title: "Stranger Things", rating: "8.7", desc: "Expanding mystery.", rank: "Sci-Fi", img: "https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg", type: "webseries" },
            { id: "r10", title: "The Boys", rating: "8.7", desc: "Superhero satire.", rank: "Action", img: "https://static.tvmaze.com/uploads/images/original_untouched/415/1039866.jpg", type: "webseries" }
        ],
        "result_scifi": [
            { id: "r11", title: "Severance", rating: "8.7", desc: "Incredible tension.", rank: "Thriller", img: "https://static.tvmaze.com/uploads/images/original_untouched/548/1371406.jpg", type: "webseries" },
            { id: "r12", title: "Mr. Robot", rating: "8.5", desc: "Dark and stunning.", rank: "Hacking", img: "https://static.tvmaze.com/uploads/images/original_untouched/211/528026.jpg", type: "webseries" },
            { id: "r13", title: "Dark", rating: "8.7", desc: "Incredible puzzle box.", rank: "Mystery", img: "https://static.tvmaze.com/uploads/images/original_untouched/259/649622.jpg", type: "webseries" }
        ],
        "result_smart": [
            { id: "r14", title: "Mindhunter", rating: "8.6", desc: "Psychological dive.", rank: "Smart", img: "https://static.tvmaze.com/uploads/images/original_untouched/501/1253490.jpg", type: "webseries" },
            { id: "r15", title: "Lupin", rating: "7.5", desc: "Clever heist show.", rank: "Action", img: "https://static.tvmaze.com/uploads/images/original_untouched/603/1507749.jpg", type: "webseries" },
            { id: "r16", title: "True Detective", rating: "8.9", desc: "Character-driven mystery.", rank: "Mystery", img: "https://static.tvmaze.com/uploads/images/original_untouched/490/1226764.jpg", type: "webseries" }
        ]
    }
};

const questions = [
    {
        id: "q1_pacing",
        text: "What's your general vibe when starting a new show?",
        options: [
            { text: "I love deep, slow-burn epics that take their time.", nextPath: "result_slow_burn" },
            { text: "I want something fast-paced, gripping, and constantly evolving.", nextPath: "q2_commitment" },
            { text: "Give me lighthearted comedy or casual watching.", nextPath: "result_comedy" }
        ]
    },
    {
        id: "q2_commitment",
        text: "How do you feel about long, multi-season shows?",
        options: [
            { text: "Love investing years into a massive story!", nextPath: "result_epics" },
            { text: "I drop them if they get repetitive. Give me short, tight arcs.", nextPath: "q3_genre" }
        ]
    },
    {
        id: "q3_genre",
        text: "Let's test your taste. Have you watched Black Mirror?",
        options: [
            { text: "Yes, loved the mind-bending concepts!", nextPath: "result_scifi" },
            { text: "Yes, but didn't like how dark/heavy it was.", nextPath: "q4_style" },
            { text: "No, haven't watched it.", nextPath: "q4_style" },
            { text: "No, and honestly I hate horror/creepy stuff.", nextPath: "q4_style" }
        ]
    },
    {
        id: "q4_style",
        text: "One last test: Have you watched Sherlock?",
        options: [
            { text: "Yes, loved the smart, clever storytelling!", nextPath: "result_smart" },
            { text: "Yes, didn't really like it.", nextPath: "result_core" },
            { text: "No, haven't watched it.", nextPath: "result_core" }
        ]
    }
];

// Helper to find full movie object from any list by ID
function getMovieById(id) {
    for (let key in database) {
        if (Array.isArray(database[key])) {
            const found = database[key].find(m => m.id === id);
            if (found) return found;
        } else {
            // It's the results object
            for (let resKey in database.results) {
                const found = database.results[resKey].find(m => m.id === id);
                if (found) return found;
            }
        }
    }
    return null;
}

// Router and DOM Manipulation
const mainView = document.getElementById('main-view');
const navItems = document.querySelectorAll('.nav-item');

function renderMovieCard(movie, isRecommended = false) {
    const starsHtml = `<i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star-half"></i>`;
    const rankHtml = movie.rank ? `<div class="badge-tag">${movie.rank}</div>` : '';
    const descHtml = isRecommended && movie.desc ? `<div style="font-size:0.85rem; color:#a1a1aa; margin-top:5px; line-height:1.4;">${movie.desc}</div>` : '';
    
    const isWatchlist = watchlist.includes(movie.id);
    const isFav = favourites.includes(movie.id);

    return `
        <div class="movie-card" data-id="${movie.id}">
            ${rankHtml}
            <div class="card-actions-top">
                <div class="action-btn toggle-watchlist ${isWatchlist ? 'active' : ''}" title="Watchlist">
                    <i class="ph${isWatchlist ? '-fill' : ''} ph-bookmark-simple"></i>
                </div>
                <div class="action-btn toggle-fav ${isFav ? 'active' : ''}" title="Favourite">
                    <i class="ph${isFav ? '-fill' : ''} ph-heart"></i>
                </div>
            </div>
            <div class="card-image-container">
                <img src="${movie.img}" alt="${movie.title}" class="card-image">
                <div class="card-overlay"></div>
                <div class="card-content">
                    <div class="card-title">${movie.title}</div>
                    <div class="card-rating">
                        ${starsHtml} <span>${movie.rating}</span>
                    </div>
                    ${descHtml}
                    <button class="card-btn">View Details</button>
                </div>
            </div>
        </div>
    `;
}

function renderForYou() {
    // If we have recommended results stored from a recent test, show them, else show CTA
    const recommendedContent = window.currentResults ? 
        window.currentResults.map(m => renderMovieCard(m, true)).join('') :
        `
        <div class="cta-card">
            <div class="cta-content">
                <h2>Discover Your Next Obsession</h2>
                <p>Take our quick taste test to get hyper-personalized recommendations based on your unique vibe.</p>
                <button id="open-test-btn" class="primary-btn">Take Taste Test</button>
            </div>
        </div>
        `;

    mainView.innerHTML = `
        <section class="row-section">
            <div class="section-header">
                <h3>Recommended</h3>
            </div>
            <div class="row-content" id="recommended-row">
                ${recommendedContent}
            </div>
        </section>

        <section class="row-section">
            <div class="section-header">
                <h3>Trending Now</h3>
                <button class="filter-btn"><i class="ph ph-faders"></i> Filter</button>
            </div>
            <div class="row-content grid-layout" id="trending-row">
                ${database.trending.map(m => renderMovieCard(m)).join('')}
            </div>
        </section>
    `;

    const openTestBtn = document.getElementById('open-test-btn');
    if (openTestBtn) {
        openTestBtn.addEventListener('click', startQuiz);
    }
}

function renderGridPage(title, moviesArray) {
    if (moviesArray.length === 0) {
        mainView.innerHTML = `
            <div class="section-header">
                <h3>${title}</h3>
            </div>
            <div class="empty-state">
                <i class="ph ph-film-slate"></i>
                <h2>Nothing here yet</h2>
                <p>Add some movies or shows to your ${title.toLowerCase()} to see them here.</p>
            </div>
        `;
        return;
    }

    mainView.innerHTML = `
        <div class="section-header">
            <h3>${title}</h3>
            <button class="filter-btn"><i class="ph ph-faders"></i> Filter</button>
        </div>
        <div class="grid-layout">
            ${moviesArray.map(m => renderMovieCard(m)).join('')}
        </div>
    `;
}

function switchTab(tabId) {
    currentTab = tabId;
    navItems.forEach(nav => {
        if (nav.dataset.tab === tabId) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });

    // Simple fade animation
    mainView.style.opacity = 0;
    setTimeout(() => {
        switch(tabId) {
            case 'foryou':
                renderForYou();
                break;
            case 'trending':
                renderGridPage('Trending Now', database.trending);
                break;
            case 'movies':
                renderGridPage('Movies', database.movies);
                break;
            case 'webseries':
                renderGridPage('Webseries', database.webseries);
                break;
            case 'watchlist':
                const watchItems = watchlist.map(id => getMovieById(id)).filter(Boolean);
                renderGridPage('Your Watchlist', watchItems);
                break;
            case 'favourites':
                const favItems = favourites.map(id => getMovieById(id)).filter(Boolean);
                renderGridPage('Your Favourites', favItems);
                break;
        }
        mainView.style.opacity = 1;
    }, 200);
}

// Global Event Delegation for Cards and Nav
document.body.addEventListener('click', (e) => {
    // Tab Navigation
    const navItem = e.target.closest('.nav-item');
    if (navItem) {
        e.preventDefault();
        const tab = navItem.dataset.tab;
        if (tab && tab !== currentTab) {
            switchTab(tab);
        }
        return;
    }

    // Toggle Watchlist
    const watchBtn = e.target.closest('.toggle-watchlist');
    if (watchBtn) {
        e.preventDefault();
        const card = watchBtn.closest('.movie-card');
        const id = card.dataset.id;
        if (watchlist.includes(id)) {
            watchlist = watchlist.filter(item => item !== id);
            watchBtn.classList.remove('active');
            watchBtn.querySelector('i').classList.replace('ph-fill', 'ph');
        } else {
            watchlist.push(id);
            watchBtn.classList.add('active');
            watchBtn.querySelector('i').classList.replace('ph', 'ph-fill');
        }
        // If we are currently on the watchlist tab, we should probably re-render, but for simplicity we'll just let it vanish on next load.
        return;
    }

    // Toggle Favourites
    const favBtn = e.target.closest('.toggle-fav');
    if (favBtn) {
        e.preventDefault();
        const card = favBtn.closest('.movie-card');
        const id = card.dataset.id;
        if (favourites.includes(id)) {
            favourites = favourites.filter(item => item !== id);
            favBtn.classList.remove('active');
            favBtn.querySelector('i').classList.replace('ph-fill', 'ph');
        } else {
            favourites.push(id);
            favBtn.classList.add('active');
            favBtn.querySelector('i').classList.replace('ph', 'ph-fill');
        }
        return;
    }

    // View Details / Generic Buttons
    const genericBtn = e.target.closest('.card-btn, .filter-btn');
    if (genericBtn) {
        e.preventDefault();
        alert('This detailed view is under development in the CineFlow prototype.');
    }
});

// Notifications
const notifBtn = document.getElementById('notification-btn');
const notifDropdown = document.getElementById('notification-dropdown');
const notifBadge = document.getElementById('notif-badge');

if (notifBtn) {
    notifBtn.addEventListener('click', (e) => {
        // prevent closing immediately
        e.stopPropagation(); 
        notifDropdown.classList.toggle('hidden');
        if (!notifDropdown.classList.contains('hidden')) {
            notifBadge.style.display = 'none'; // clear badge when opened
        }
    });

    document.body.addEventListener('click', () => {
        if (!notifDropdown.classList.contains('hidden')) {
            notifDropdown.classList.add('hidden');
        }
    });
    notifDropdown.addEventListener('click', (e) => e.stopPropagation());
}

// Modal Quiz Logic
const modalOverlay = document.getElementById('test-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const questionScreen = document.getElementById('question-screen');
const processingScreen = document.getElementById('processing-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');

let quizHistory = [];

function startQuiz() {
    modalOverlay.classList.remove('hidden');
    quizHistory = [];
    questionScreen.classList.remove('hidden');
    questionScreen.style.display = 'flex';
    setTimeout(() => { questionScreen.classList.add('active'); }, 50);
    
    processingScreen.classList.remove('active');
    processingScreen.style.display = 'none';
    
    loadQuestion("q1_pacing");
}

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
});

function loadQuestion(questionId) {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const progressPercent = Math.min(((quizHistory.length + 1) / 4) * 100, 100);
    progressFill.style.width = `${progressPercent}%`;

    questionText.style.opacity = 0;
    optionsContainer.style.opacity = 0;

    setTimeout(() => {
        questionText.textContent = question.text;
        optionsContainer.innerHTML = '';

        question.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.text;
            btn.style.animationDelay = `${index * 0.1}s`;
            btn.addEventListener('click', () => handleOptionClick(opt.nextPath, questionId));
            optionsContainer.appendChild(btn);
        });

        questionText.style.opacity = 1;
        optionsContainer.style.opacity = 1;
    }, 200);
}

function handleOptionClick(nextPath, currentQuestionId) {
    quizHistory.push(currentQuestionId);
    
    if (nextPath.startsWith('result_')) {
        finishQuiz(nextPath);
    } else {
        loadQuestion(nextPath);
    }
}

function finishQuiz(resultId) {
    questionScreen.classList.remove('active');
    
    setTimeout(() => {
        questionScreen.style.display = 'none';
        processingScreen.style.display = 'flex';
        
        setTimeout(() => {
            processingScreen.classList.add('active');
            
            setTimeout(() => {
                window.currentResults = database.results[resultId] || [];
                modalOverlay.classList.add('hidden');
                switchTab('foryou'); // Re-render 'for you' to show results
            }, 1500);
        }, 50);
    }, 400);
}

// Live Search Logic
const searchInput = document.getElementById('search-input');
const searchDropdown = document.getElementById('search-dropdown');
let searchTimeout;

if (searchInput && searchDropdown) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        clearTimeout(searchTimeout);
        
        if (query.length < 2) {
            searchDropdown.classList.add('hidden');
            return;
        }

        // Add loading state
        searchDropdown.classList.remove('hidden');
        searchDropdown.innerHTML = '<div class="search-item"><div class="search-info"><span class="search-title">Searching...</span></div></div>';

        searchTimeout = setTimeout(async () => {
            try {
                // Using TVMaze API for free open search.
                const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
                const data = await res.json();
                
                if (data && data.length > 0) {
                    searchDropdown.innerHTML = data.slice(0, 5).map(item => {
                        const show = item.show;
                        const imgUrl = show.image ? show.image.medium : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=100&auto=format&fit=crop';
                        const year = show.premiered ? show.premiered.substring(0,4) : 'N/A';
                        const safeName = show.name.replace(/'/g, "\\'");
                        return `
                            <div class="search-item" onclick="alert('You clicked on \\'${safeName}\\'. In a full version, this would add it to your Watchlist or open details!')">
                                <img src="${imgUrl}" alt="Poster">
                                <div class="search-info">
                                    <span class="search-title">${show.name}</span>
                                    <span class="search-meta">${year} • ${show.genres.join(', ') || 'Series'}</span>
                                </div>
                            </div>
                        `;
                    }).join('');
                } else {
                    searchDropdown.innerHTML = '<div class="search-item"><div class="search-info"><span class="search-title">No results found</span></div></div>';
                }
            } catch (error) {
                searchDropdown.innerHTML = '<div class="search-item"><div class="search-info"><span class="search-title">Error fetching results</span></div></div>';
            }
        }, 500); // Debounce 500ms
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#search-container')) {
            searchDropdown.classList.add('hidden');
        }
    });
}

// Initial Load
switchTab('foryou');
