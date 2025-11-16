/**
 * The Lightroom Studio Blog - Main JavaScript
 * Handles interactive features
 */

document.addEventListener('DOMContentLoaded', function() {

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
