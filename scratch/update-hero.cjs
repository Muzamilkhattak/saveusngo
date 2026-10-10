const fs = require('fs');
let content = fs.readFileSync('src/pages/program-pages.tsx', 'utf8');

// 1. Update ProgramHeroProps interface
content = content.replace(/  primaryCtaText: string;\n  onPrimaryCta: \(\) => void;\n  secondaryCtaText: string;\n  secondaryCtaHref: string;\n/, '  onPrimaryCta: () => void;\n');

// 2. Update ProgramHero function signature
content = content.replace(/  primaryCtaText,\n  onPrimaryCta,\n  secondaryCtaText,\n  secondaryCtaHref,\n/, '  onPrimaryCta,\n');

// 3. Update ProgramHero render to just have one button with hardcoded text
content = content.replace(/        <div className="program-hero-actions">[\s\S]*?<\/div>/, `        <div className="program-hero-actions">
          <button
            className="btn-impact-cta"
            onClick={onPrimaryCta}
            data-testid={\`button-\${testIdPrefix}-hero-primary\`}
          >
            $1 - Your one dollar a day saves a life <ArrowRight size={18} style={{ color: 'var(--gold)' }} />
          </button>
        </div>`);

// 4. Update the 8 usages
content = content.replace(/ *primaryCtaText=".*?"\n *onPrimaryCta=\{\(\) => goDonate\(\d+\)\}\n *secondaryCtaText=".*?"\n *secondaryCtaHref=".*?"\n/g, '          onPrimaryCta={() => goDonate(1)}\n');

fs.writeFileSync('src/pages/program-pages.tsx', content);
console.log('Done!');
