import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#777777"))
        
        # Header (Pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, 750, "Aatif Hussain Qazi · Personal Portfolio Architectural Handbook")
            self.setStrokeColor(colors.HexColor("#333333"))
            self.setLineWidth(0.5)
            self.line(54, 742, letter[0] - 54, 742)
            
        # Footer
        footer_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(letter[0] - 54, 36, footer_text)
        self.drawString(54, 36, "Confidential & Educational Guide · Stack, GitHub, Vercel & Architecture")
        self.setStrokeColor(colors.HexColor("#333333"))
        self.setLineWidth(0.5)
        self.line(54, 48, letter[0] - 54, 48)
        self.restoreState()

def build_pdf(filename="D:/portfolio/portfolio_handbook.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    # Custom Color Palette
    DARK_BG = colors.HexColor("#0A0A0A")
    ACCENT_LIME = colors.HexColor("#84CC16") # printable lime/green
    TEXT_LIGHT = colors.HexColor("#1A1A1A")
    TEXT_MUTED = colors.HexColor("#555555")
    CODE_BG = colors.HexColor("#F4F4F5")
    BOX_BG = colors.HexColor("#FAFAFA")
    BORDER_COLOR = colors.HexColor("#E4E4E7")

    # Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=colors.HexColor("#0A0A0A"),
        spaceAfter=4
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=TEXT_MUTED,
        spaceAfter=14
    )

    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=19,
        textColor=colors.HexColor("#09090B"),
        spaceBefore=14,
        spaceAfter=8,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor("#18181B"),
        spaceBefore=10,
        spaceAfter=5,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=TEXT_LIGHT,
        spaceAfter=7
    )

    bullet_style = ParagraphStyle(
        'Bullet_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=TEXT_LIGHT,
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=4
    )

    code_style = ParagraphStyle(
        'Code_Custom',
        parent=styles['Normal'],
        fontName='Courier',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#18181B")
    )

    badge_style = ParagraphStyle(
        'Badge_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=colors.HexColor("#4D7C0F")
    )

    story = []

    # Title Banner Box
    banner_data = [
        [
            Paragraph("<b>PORTFOLIO ARCHITECTURAL & DEPLOYMENT HANDBOOK</b>", badge_style)
        ],
        [
            Paragraph("Aatif Hussain Qazi — Creative Technology & Digital Projects", title_style)
        ],
        [
            Paragraph(
                "A comprehensive reference on the technologies, performance optimizations, GitHub version control, "
                "and Vercel cloud deployment architecture used to build your portfolio.",
                subtitle_style
            )
        ]
    ]
    banner_table = Table(banner_data, colWidths=[letter[0] - 108])
    banner_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), BOX_BG),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 12),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(banner_table)
    story.append(Spacer(1, 14))

    # SECTION 1
    story.append(Paragraph("1. Technology Stack: Languages, Libraries & Design Rationale", h1_style))
    story.append(Paragraph(
        "Your portfolio was built using industry-standard, high-performance web technologies rather than generic website builders. "
        "Here is what was chosen and why:",
        body_style
    ))

    stack_rows = [
        [
            Paragraph("<b>Technology</b>", ParagraphStyle('TH', fontName='Helvetica-Bold', fontSize=9, textColor=colors.black)),
            Paragraph("<b>Role</b>", ParagraphStyle('TH', fontName='Helvetica-Bold', fontSize=9, textColor=colors.black)),
            Paragraph("<b>Why it was selected</b>", ParagraphStyle('TH', fontName='Helvetica-Bold', fontSize=9, textColor=colors.black))
        ],
        [
            Paragraph("<b>TypeScript (TSX)</b>", body_style),
            Paragraph("Programming Language", body_style),
            Paragraph("Adds strict type safety to JavaScript. Prevents runtime bugs, enables autocomplete, and guarantees that content structures (projects, skills, education) never crash the app.", body_style)
        ],
        [
            Paragraph("<b>React 19</b>", body_style),
            Paragraph("UI Architecture", body_style),
            Paragraph("Component-based reactive rendering. Keeps the code modular so individual pieces (Navbar, Hero, Modals) can be updated or reused independently.", body_style)
        ],
        [
            Paragraph("<b>Tailwind CSS v4</b>", body_style),
            Paragraph("Design & Styling", body_style),
            Paragraph("A utility-first engine compiled directly into minimal CSS (only ~41KB). Eliminates bulky stylesheets and makes styling maintainable and uniform.", body_style)
        ],
        [
            Paragraph("<b>Three.js (WebGL)</b>", body_style),
            Paragraph("3D Interactive Viewport", body_style),
            Paragraph("Direct GPU-accelerated 3D graphics in the browser. Unlike heavy MP4 video renders, Three.js renders a live geometric sculpture in real-time at 60 FPS with zero video loading delay.", body_style)
        ],
        [
            Paragraph("<b>Framer Motion</b>", body_style),
            Paragraph("Micro-Interactions", body_style),
            Paragraph("Production-grade animation library that uses real physics (springs, damping) instead of rigid transitions, creating a fluid, high-end editorial feel.", body_style)
        ],
        [
            Paragraph("<b>Vite 8 & Rolldown</b>", body_style),
            Paragraph("Build Tool & Bundler", body_style),
            Paragraph("Compiles the code in milliseconds and splits vendor code into optimized chunks so the first visit loads instantly.", body_style)
        ]
    ]

    stack_table = Table(stack_rows, colWidths=[110, 110, letter[0] - 108 - 220])
    stack_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#F4F4F5")),
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('INNERGRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 6),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(stack_table)
    story.append(Spacer(1, 14))

    # SECTION 2
    story.append(Paragraph("2. What Was Done to Make It Smooth & High-Performance", h1_style))
    story.append(Paragraph(
        "Many 3D and animation-heavy websites lag or cause laptops to heat up. To ensure your website feels ultra-smooth on all devices:",
        body_style
    ))

    optimizations = [
        "<b>Linear Interpolation (Lerp) Smoothing:</b> In the 3D Hero, mouse movement does not jump abruptly. A damping factor smoothly eases the sculpture towards the cursor position.",
        "<b>Clamped Device Pixel Ratio (DPR 1.5):</b> High-density Retina displays can overwhelm mobile GPUs. Clamping the DPR to 1.5 keeps rendering crisp while using 60% less GPU memory.",
        "<b>Memory Leak Prevention:</b> When moving between tabs or screens, Three.js geometries, line materials, and renderers are completely disposed to keep browser RAM free.",
        "<b>Optimized Vendor Chunk Splitting:</b> Three.js (541 KB), Framer Motion (148 KB), and Lucide Icons (11 KB) were decoupled into isolated static chunks, allowing the browser to cache them permanently.",
        "<b>Accessible Motion Fallback:</b> Automatically respects users who have 'Reduced Motion' enabled in Windows/macOS, disabling heavy animations while keeping full functionality."
    ]

    for opt in optimizations:
        story.append(Paragraph(f"• {opt}", bullet_style))

    story.append(Spacer(1, 14))

    # SECTION 3
    story.append(Paragraph("3. Why Professionals Use GitHub & Vercel Together", h1_style))
    story.append(Paragraph(
        "In modern web engineering, pros avoid copying files over FTP or manual server hosting. "
        "Here is why the <b>GitHub + Vercel</b> combination is the worldwide gold standard:",
        body_style
    ))

    pro_points = [
        "<b>Git & GitHub (Version Control & Backup):</b> Every line of code, design tweak, or content change is recorded in a commit history. If a mistake is made, you can roll back to any previous version instantly.",
        "<b>Vercel (Serverless Global Edge Network):</b> Rather than hosting on one computer that might crash, Vercel clones your site across hundreds of data centers worldwide. When someone in Kashmir, London, or New York visits, it loads from their closest server in milliseconds.",
        "<b>Continuous Deployment (CI/CD):</b> Whenever you push an update to GitHub, Vercel detects it, rebuilds your site in the cloud, and updates the live site in under 30 seconds with <b>zero downtime</b>."
    ]

    for p in pro_points:
        story.append(Paragraph(f"• {p}", bullet_style))

    story.append(Spacer(1, 14))

    # SECTION 4
    story.append(Paragraph("4. The Easy Visual Web UI Method (No Terminal Required!)", h1_style))
    story.append(Paragraph(
        "While developers often use the terminal, you can manage and update your portfolio entirely through your web browser:",
        body_style
    ))

    story.append(Paragraph("A. Connecting GitHub and Vercel in the Browser (Import Method):", h2_style))
    steps_connect = [
        "1. Open <b>vercel.com</b> and log in using your GitHub account.",
        "2. Click the <b>'Add New...'</b> button in the top right and select <b>'Project'</b>.",
        "3. You will see your GitHub repositories listed. Find <b>'portfolio'</b> and click <b>'Import'</b>.",
        "4. Vercel automatically detects the framework (<b>Vite</b>) and build settings from our <code>vercel.json</code>.",
        "5. Click <b>'Deploy'</b>. From that moment on, Vercel and GitHub are permanently linked!"
    ]
    for s in steps_connect:
        story.append(Paragraph(s, bullet_style))

    story.append(Spacer(1, 6))
    story.append(Paragraph("B. How to Edit Your Site Directly on GitHub (The Browser Trick!):", h2_style))
    steps_edit_browser = [
        "1. Visit your repository in any browser: <b>https://github.com/aatifhussainqazi/portfolio</b>",
        "2. Press the period key (<b>.</b>) on your keyboard! GitHub will instantly open an online VS Code editor right in your browser tab.",
        "3. Navigate to <code>src/data/portfolioData.ts</code> in the left sidebar.",
        "4. Edit your text, add your LinkedIn/Instagram links, or update your projects.",
        "5. Click the Source Control icon on the left (the branch icon), type a short message (e.g. 'Updated social links'), and click <b>Commit & Push</b>.",
        "6. <b>That is all!</b> Vercel will detect your commit in the cloud and update your live website automatically in ~20 seconds without you ever opening a command prompt."
    ]
    for s in steps_edit_browser:
        story.append(Paragraph(s, bullet_style))

    story.append(Spacer(1, 14))

    # SECTION 5: QUICK CHEAT SHEET
    story.append(Paragraph("5. Content Architecture Cheat Sheet", h1_style))
    story.append(Paragraph(
        "Here is exactly where every item lives inside <code>src/data/portfolioData.ts</code>:",
        body_style
    ))

    sheet_rows = [
        [
            Paragraph("<b>Information</b>", ParagraphStyle('TH2', fontName='Helvetica-Bold', fontSize=9, textColor=colors.black)),
            Paragraph("<b>Location in portfolioData.ts</b>", ParagraphStyle('TH2', fontName='Helvetica-Bold', fontSize=9, textColor=colors.black)),
            Paragraph("<b>Notes</b>", ParagraphStyle('TH2', fontName='Helvetica-Bold', fontSize=9, textColor=colors.black))
        ],
        [
            Paragraph("Bio, Location, Email", body_style),
            Paragraph("<code>personalData</code> (Lines 10–25)", body_style),
            Paragraph("Change your headline, current program, or Sopore location.", body_style)
        ],
        [
            Paragraph("Social Links", body_style),
            Paragraph("<code>socialLinks</code> (Lines 26–51)", body_style),
            Paragraph("Paste your LinkedIn/Instagram URLs and change <code>configured: true</code>.", body_style)
        ],
        [
            Paragraph("Selected Projects", body_style),
            Paragraph("<code>projectsData</code> (Lines 54–154)", body_style),
            Paragraph("Update AquaBill, MyKlyra, University Projects, or Blender 3D descriptions.", body_style)
        ],
        [
            Paragraph("Creative Skills", body_style),
            Paragraph("<code>creativeSkillsData</code> (Lines 156–220)", body_style),
            Paragraph("Blender, 3D Animation, Video Editing, Canva, Design.", body_style)
        ],
        [
            Paragraph("Technical Tools", body_style),
            Paragraph("<code>technicalSkillsData</code> (Lines 222–293)", body_style),
            Paragraph("Python, Data Analysis, WordPress, Linux, Content tools.", body_style)
        ],
        [
            Paragraph("Work Experience", body_style),
            Paragraph("<code>experienceData</code> (Lines 295–327)", body_style),
            Paragraph("RGPRS volunteer work, MyKlyra e-commerce roles & dates.", body_style)
        ],
        [
            Paragraph("Education History", body_style),
            Paragraph("<code>educationData</code> (Lines 329–362)", body_style),
            Paragraph("IUST Awantipora, GHSS Doabgah, Netherfield School.", body_style)
        ]
    ]

    sheet_table = Table(sheet_rows, colWidths=[120, 160, letter[0] - 108 - 280])
    sheet_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#F4F4F5")),
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('INNERGRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(sheet_table)
    story.append(Spacer(1, 14))

    # FOOTER CALLOUT BOX
    callout_data = [
        [
            Paragraph(
                "<b>Live Deployment References:</b><br/>"
                "• Primary URL: <b>https://portfolio-six-virid-60.vercel.app</b><br/>"
                "• GitHub Repository: <b>https://github.com/aatifhussainqazi/portfolio</b><br/>"
                "• Vercel Project Dashboard: <b>https://vercel.com/tfpeer-7076s-projects/portfolio</b>",
                body_style
            )
        ]
    ]
    callout_table = Table(callout_data, colWidths=[letter[0] - 108])
    callout_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#F7FEE7")),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#BEF264")),
        ('PADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(callout_table)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF successfully built at {filename}")

if __name__ == '__main__':
    build_pdf()
