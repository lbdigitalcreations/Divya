const fs = require('fs');

const files = ['home.html', 'wishes.html', 'gallery.html', 'celebration.html'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');

  // 1. Remove Top Navigation
  content = content.replace(/<!-- Navigation -->[\s\S]*?<\/nav>/, '');
  
  // 2. Remove Footer Navigation
  content = content.replace(/<nav class="footer-nav">[\s\S]*?<\/nav>/, '');

  if (file === 'home.html') {
    content = content.replace(
      '<a href="gallery.html" class="btn-classic" style="margin-top:50px; display:inline-block;">🖼 View All Memories</a>',
      '<a href="wishes.html" class="btn-classic" style="margin-top:50px; display:inline-block; font-size: 1.1rem; padding: 18px 45px;">Next: Read My Wishes ✨ →</a>'
    );
  } else if (file === 'wishes.html') {
    content = content.replace(
      '<div style="margin-top:50px;display:flex;gap:18px;justify-content:center;flex-wrap:wrap;">\n      <a href="gallery.html"     class="btn-classic">🖼 View Gallery</a>\n      <a href="celebration.html" class="btn-outline">🎉 Celebrate Now!</a>\n    </div>',
      '<div style="margin-top:50px;display:flex;justify-content:center;">\n      <a href="gallery.html" class="btn-classic" style="font-size: 1.1rem; padding: 18px 45px;">Next: View Photo Gallery 📸 →</a>\n    </div>'
    );
  } else if (file === 'gallery.html') {
    content = content.replace(
      '<a href="celebration.html" class="btn-classic">🎉 Next: Let\'s Celebrate!</a>',
      '<a href="celebration.html" class="btn-classic" style="font-size: 1.1rem; padding: 18px 45px;">Next: Let\'s Celebrate! 🎉 →</a>'
    );
  } else if (file === 'celebration.html') {
    content = content.replace(
      '  </section>\n\n  <!-- ── FOOTER ── -->',
      '  </section>\n\n  <div style="text-align:center; padding-bottom: 60px; background: var(--bg);">\n    <a href="home.html" class="btn-outline">Back to Beginning ↻</a>\n  </div>\n\n  <!-- ── FOOTER ── -->'
    );
  }

  fs.writeFileSync(file, content, 'utf-8');
});

// Fix CSS padding
let css = fs.readFileSync('style.css', 'utf-8');
css = css.replace('.page-content {\r\n  padding-top: 66px;\r\n}', '.page-content {\r\n  padding-top: 0;\r\n}');
css = css.replace('.page-content {\n  padding-top: 66px;\n}', '.page-content {\n  padding-top: 0;\n}');
fs.writeFileSync('style.css', css, 'utf-8');
console.log('Successfully updated navigation flow.');
