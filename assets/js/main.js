/**
 * The Lightroom Studio Blog - Main JavaScript
 * Handles category filtering and interactive features
 */

// Category Filter Functionality
document.addEventListener('DOMContentLoaded', function() {

    // Category Filter Buttons
    const filterButtons = document.querySelectorAll('.category-btn');
    const postCards = document.querySelectorAll('.post-card');

    if (filterButtons.length > 0 && postCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter posts
                postCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                        // Add fade-in animation
                        card.style.animation = 'fadeIn 0.3s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

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

    // Add Reading Progress Bar (optional feature for blog posts)
    if (document.querySelector('.article-content')) {
        createReadingProgressBar();
    }

    // Copy Code Block Functionality (optional)
    addCopyButtonsToCodeBlocks();
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
 * Simple search functionality (optional - can be enhanced)
 */
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const postCards = document.querySelectorAll('.post-card');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();

            postCards.forEach(card => {
                const title = card.querySelector('.post-card-title').textContent.toLowerCase();
                const excerpt = card.querySelector('.post-card-excerpt').textContent.toLowerCase();
                const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());

                const matches = title.includes(query) ||
                               excerpt.includes(query) ||
                               tags.some(tag => tag.includes(query));

                card.style.display = matches ? 'block' : 'none';
            });
        });
    }
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
