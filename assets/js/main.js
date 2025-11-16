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
