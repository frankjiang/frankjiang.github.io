document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadBibtex();
});

// 1. 加载个人基础信息
function loadProfile() {
    if (typeof profileData === 'undefined') return;

    document.getElementById('name').innerText = profileData.name;
    document.getElementById('role').innerHTML = profileData.role;
    document.getElementById('bio-text').innerHTML = profileData.bio;

    // --- 处理多邮箱逻辑 ---
    const emailContainer = document.getElementById('email-container');
    emailContainer.innerHTML = ''; // 清空现有内容

    // 检查是否有 emails 数组
    if (profileData.emails && profileData.emails.length > 0) {
        profileData.emails.forEach(mail => {
            // 为每个邮箱生成一行 HTML
            emailContainer.innerHTML += `
                <p>
                    <i class="fas fa-envelope"></i> 
                    <a href="mailto:${mail}">${mail}</a>
                </p>
            `;
        });
    } 
    // 兼容旧写法：如果 data.js 还没改，只有单数 email 字段
    else if (profileData.email) {
        emailContainer.innerHTML = `
            <p>
                <i class="fas fa-envelope"></i> 
                <a href="mailto:${profileData.email}">${profileData.email}</a>
            </p>
        `;
    }

    // 如果 data.js 里有 hiring 字段，则显示；否则隐藏该章节
    const hiringSection = document.getElementById('join-us-section');
    const hiringText = document.getElementById('join-us-text');
    
    if (profileData.hiring) {
        hiringText.innerHTML = profileData.hiring;
        hiringSection.style.display = "block";
    } else {
        hiringSection.style.display = "none";
    }

    const socialContainer = document.getElementById('social-links');
    socialContainer.innerHTML = ''; 
    // Google Scholar
    if (profileData.scholarLink) {
        socialContainer.innerHTML += `<a href="${profileData.scholarLink}" target="_blank" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>`;
    }
    // GitHub
    if (profileData.githubLink) {
        socialContainer.innerHTML += `<a href="${profileData.githubLink}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>`;
    }
    // X (Twitter)
    if (profileData.xLink) {
        // FontAwesome 6 新版有一个专门的 'fa-x-twitter' 图标
        // 如果你的图标库版本较旧，也可以用 'fa-twitter'
        socialContainer.innerHTML += `
            <a href="${profileData.xLink}" target="_blank" title="X (Twitter)">
                <i class="fa-brands fa-x-twitter"></i>
            </a>`;
    }
    // 新增：小红书 (Red)
    if (profileData.xhsLink) {
        // 使用一个红色的 '书本' 图标代表小红书，或者用 'fa-heart'
        socialContainer.innerHTML += `
            <a href="${profileData.xhsLink}" target="_blank" title="Xiaohongshu (RedNote)" class="xiaohongshu-icon">
                <i class="fas fa-book-open"></i>
            </a>`;
    }

    const newsContainer = document.getElementById('news-list');
    newsContainer.innerHTML = '';
    if (profileData.news) {
        profileData.news.forEach(item => {
            newsContainer.innerHTML += `
                <div class="timeline-item">
                    <span class="news-date">${item.date}</span>
                    <span class="news-content">${item.content}</span>
                </div>
            `;
        });
    }

    const expContainer = document.getElementById('experience-list');
    expContainer.innerHTML = '';
    if (profileData.experience) {
        profileData.experience.forEach(item => {
            expContainer.innerHTML += `
                <div class="job-item">
                    <div class="job-header">
                        <span class="job-role">${item.role}</span>
                        <span class="job-year">${item.year}</span>
                    </div>
                    <div class="job-company">${item.company}</div>
                </div>
            `;
        });
    }

    // --- 渲染访问统计地图 ---
    const mapContainer = document.getElementById('visitor-map');
    if (profileData.mapWidget) {
        mapContainer.innerHTML = profileData.mapWidget;
    }
}

// 2. BibTex 解析与渲染
function loadBibtex() {
    if (!profileData.bibtex) return;

    const rawBib = profileData.bibtex;
    const papers = parseBibtex(rawBib);
    const paperContainer = document.getElementById('paper-list');
    
    // 按年份降序
    papers.sort((a, b) => (b.year || 0) - (a.year || 0));

    paperContainer.innerHTML = '';

    papers.forEach(paper => {
        let authorsHtml = paper.author || "Unknown Author";

        // 1. 还原作者名字高亮逻辑（不再追加 role）
        authorsHtml = authorsHtml.replace(/Jiang, Fan|Fan Jiang|姜帆/gi, '<span class="me">$&</span>');

        // 2. 新增：生成独立的 Role 标签 HTML
        // 如果有 role，生成一个带样式的 div；如果没有，为空字符串
        const roleHtml = paper.role 
            ? `<div class="paper-role-container"><span class="role-badge"><i class="fas fa-tag"></i> ${paper.role}</span></div>` 
            : '';

        const venue = paper.journal || paper.booktitle || "Preprint / Other";

        // URL 跳转逻辑
        const hasUrl = paper.url && paper.url.length > 0;
        const hasGithub = paper.github && paper.github.length > 0;

        const clickableClass = hasUrl ? 'clickable-paper' : '';
        const clickAction = hasUrl ? `onclick="window.open('${paper.url}', '_blank')"` : '';
        const linkIcon = hasUrl ? '<i class="fas fa-external-link-alt link-icon"></i>' : '';
        const githubIcon = hasGithub ? `<img src="https://img.shields.io/github/stars/${paper.github}?style=social" alt="GitHub Stars">` : '';

        // 3. 插入 HTML：注意 roleHtml 放在 title 和 authors 之间
        paperContainer.innerHTML += `
            <div class="paper-item ${clickableClass}" ${clickAction}>
                <div class="paper-year">${paper.year || ''}</div>
                
                <div class="paper-title">
                    ${paper.title || 'Untitled'}
                    ${linkIcon}
                    ${githubIcon}
                </div>

                ${roleHtml}  <!-- 插入在这里 -->

                <div class="paper-authors">${authorsHtml}</div>
                <div class="paper-venue">${venue}</div>
            </div>
        `;
    });
}

// 3. BibTex 解析器
function parseBibtex(input) {
    const entries = [];
    const regex = /@(\w+)\s*\{([^,]+),([\s\S]*?)(?=@|$)/g;
    
    let match;
    while ((match = regex.exec(input)) !== null) {
        const type = match[1];
        const content = match[3];
        
        const entry = { type: type };
        
        const extractField = (fieldName) => {
            const fieldRegex = new RegExp(fieldName + "\\s*=\\s*\\{([\\s\\S]*?)\\}", "i");
            const m = content.match(fieldRegex);
            if (m) {
                return m[1].replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
            }
            return null;
        };

        entry.title = extractField('title');
        entry.author = extractField('author');
        entry.journal = extractField('journal');
        entry.booktitle = extractField('booktitle');
        entry.url = extractField('url');
        entry.github = extractField('github');
        
        // --- 新增：提取 role 字段 ---
        entry.role = extractField('role');
        
        const yearStr = extractField('year');
        if (yearStr) entry.year = parseInt(yearStr);

        entries.push(entry);
    }
    return entries;
}

function renderPublications(sortMethod) {
    console.log("Sort feature coming soon:", sortMethod);
}