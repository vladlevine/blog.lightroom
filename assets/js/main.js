/**
 * The Lightroom Studio Blog - Main JavaScript
 * Handles interactive features
 */

document.addEventListener('DOMContentLoaded', function() {

    // Set current date in masthead
    setCurrentDate();

    // Smooth Scroll for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });

    // Add Reading Progress Bar (for blog posts)
    if (document.querySelector('.article-content')) {
        createReadingProgressBar();
    }

    // Copy Code Block Functionality (if code blocks exist)
    addCopyButtonsToCodeBlocks();

    // Search Functionality (for catalog page)
    if (document.getElementById('searchInput')) {
        initializeSearch();
    }
});

/**
 * Sets the current date in the masthead
 */
function setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (!dateElement) return;

    const now = new Date();
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    // Calculate volume number (years since 2024)
    const volumeNumber = year - 2024 + 1;

    // Calculate issue number (days in current year)
    const startOfYear = new Date(year, 0, 1);
    const diffInMs = now - startOfYear;
    const issueNumber = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1;

    const formattedDate = `${dayName}, ${monthName} ${day}, ${year} - VOL. ${volumeNumber} NO. ${issueNumber}`;
    dateElement.textContent = formattedDate;
}

/**
 * Creates a reading progress bar at the top of blog posts
 */
function createReadingProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(to right, #4A90E2, #2C3E50);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.prepend(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;

        progressBar.style.width = progress + '%';
    });
}

/**
 * Adds copy buttons to code blocks
 */
function addCopyButtonsToCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(function(codeBlock) {
        const pre = codeBlock.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 4px 12px;
            background: #4A90E2;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s ease;
        `;

        pre.style.position = 'relative';

        pre.addEventListener('mouseenter', function() {
            button.style.opacity = '1';
        });

        pre.addEventListener('mouseleave', function() {
            button.style.opacity = '0';
        });

        button.addEventListener('click', function() {
            const code = codeBlock.textContent;
            navigator.clipboard.writeText(code).then(function() {
                button.textContent = 'Copied!';
                setTimeout(function() {
                    button.textContent = 'Copy';
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy code: ', err);
            });
        });

        pre.appendChild(button);
    });
}

/**
 * Initialize search functionality
 */
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const postsGrid = document.getElementById('postsGrid');
    const postCards = Array.from(postsGrid.querySelectorAll('.post-card'));

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        postCards.forEach(card => {
            // Get searchable content from the card
            const title = card.querySelector('.post-card-title')?.textContent.toLowerCase() || '';
            const excerpt = card.querySelector('.post-card-excerpt')?.textContent.toLowerCase() || '';
            const category = card.querySelector('.post-card-category')?.textContent.toLowerCase() || '';
            const tags = Array.from(card.querySelectorAll('.tag'))
                .map(tag => tag.textContent.toLowerCase())
                .join(' ');

            // Combine all searchable text
            const searchableText = `${title} ${excerpt} ${category} ${tags}`;

            // Show or hide card based on search match
            if (searchTerm === '' || searchableText.includes(searchTerm)) {
                card.style.display = '';
                // Add fade-in animation
                card.style.animation = 'fadeIn 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });

        // Show "no results" message if all cards are hidden
        const visibleCards = postCards.filter(card => card.style.display !== 'none');
        let noResultsMsg = document.getElementById('noResultsMessage');

        if (visibleCards.length === 0 && searchTerm !== '') {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'noResultsMessage';
                noResultsMsg.style.cssText = `
                    text-align: center;
                    padding: 3rem 1rem;
                    color: var(--color-text-light);
                    font-size: 1.125rem;
                `;
                noResultsMsg.innerHTML = `
                    <p>No articles found matching "<strong>${searchTerm}</strong>"</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Try different keywords or browse all articles below.</p>
                `;
                postsGrid.appendChild(noResultsMsg);
            } else {
                noResultsMsg.innerHTML = `
                    <p>No articles found matching "<strong>${searchTerm}</strong>"</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Try different keywords or browse all articles below.</p>
                `;
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    });
}

// Add fade-in animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   SOCIAL SHARE FUNCTIONALITY
   ============================================ */

function openSharePopup() {
    const popup = document.getElementById('sharePopup');
    if (popup) {
        popup.classList.add('active');
    }
}

function closeSharePopup() {
    const popup = document.getElementById('sharePopup');
    if (popup) {
        popup.classList.remove('active');
    }
    // Hide success message
    const successMsg = document.getElementById('copySuccess');
    if (successMsg) {
        successMsg.style.display = 'none';
    }
}

function getShareUrl() {
    return window.location.href;
}

function getShareTitle() {
    return document.title;
}

function shareOnTwitter() {
    const url = getShareUrl();
    const text = getShareTitle();
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function shareOnFacebook() {
    const url = getShareUrl();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

function shareOnLinkedIn() {
    const url = getShareUrl();
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
}

function shareByEmail() {
    const url = getShareUrl();
    const title = getShareTitle();
    const emailSubject = encodeURIComponent(title);
    const emailBody = encodeURIComponent(`I thought you might find this interesting: ${url}`);
    window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
}

function copyLink() {
    const url = getShareUrl();
    navigator.clipboard.writeText(url).then(function() {
        const successMsg = document.getElementById('copySuccess');
        if (successMsg) {
            successMsg.style.display = 'block';
            setTimeout(function() {
                successMsg.style.display = 'none';
            }, 3000);
        }
    }).catch(function(err) {
        console.error('Failed to copy link: ', err);
        alert('Failed to copy link. Please copy manually: ' + url);
    });
}

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSharePopup();
    }
});
