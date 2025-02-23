
import { el, mount } from 'redom';

class BlogPost {
    el: HTMLElement;

    constructor(title: string, date: string) {
        this.el = el('div.blog-post', [
            el('h2.blog-title', title),
            el('p.blog-date', date),
        ]);
    }
}

class BlogPage {
    el: HTMLElement;

    constructor() {
        const title = el('h1', 'My Blog')
        const arrowLeft = el("img", {
            src: "public/assets/leftArrow.svg",
            class: "arrowLeft",
        });
        arrowLeft.addEventListener("click", (e) => {
            window.location.href = "javascript:history.back()"; // Redirects to main page
        })
        const titleContainer = el('div.title-container', [arrowLeft, title])
        this.el = el('div.blog-page', [titleContainer]);
        // Simulate blog posts (You can fetch from an API)
        const posts = [
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'Second Post', date: 'Feb 15, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'Second Post', date: 'Feb 15, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'Second Post', date: 'Feb 15, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'Second Post', date: 'Feb 15, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'Second Post', date: 'Feb 15, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'Second Post', date: 'Feb 15, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'Second Post', date: 'Feb 15, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'Second Post', date: 'Feb 15, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },
            { title: 'Second Post', date: 'Feb 15, 2025' },
            { title: 'First Post', date: 'Feb 17, 2025' },

        ];

        // Add posts dynamically
        const postContainer = el('div.blog-posts');
        posts.forEach(post => mount(postContainer, new BlogPost(post.title, post.date)));

        mount(this.el, postContainer);
    }
}

// Mount blog page to the container
const blogContainer = document.getElementById('blog-container');
if (blogContainer) {
    mount(blogContainer, new BlogPage());
}
