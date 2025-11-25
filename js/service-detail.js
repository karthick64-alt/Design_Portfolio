// Service Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get service parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceType = urlParams.get('service');

    // Service data
    const services = {
        uiux: {
            title: 'UI/UX Design',
            overview: 'UI/UX design is at the heart of creating digital products that users love. I combine user research, strategic thinking, and creative design to build interfaces that are both beautiful and functional.',
            includes: [
                { icon: 'bi-check-circle-fill', text: 'User Research: Understanding your users through interviews, surveys, and analytics' },
                { icon: 'bi-check-circle-fill', text: 'Wireframing: Creating low-fidelity layouts to establish structure and flow' },
                { icon: 'bi-check-circle-fill', text: 'Prototyping: Interactive prototypes for testing and validation' },
                { icon: 'bi-check-circle-fill', text: 'UI Design: High-fidelity designs with attention to every detail' },
                { icon: 'bi-check-circle-fill', text: 'Design System: Consistent components and guidelines' },
                { icon: 'bi-check-circle-fill', text: 'Handoff: Developer-ready files and specifications' }
            ],
            scope: 'The scope includes initial consultation, research phase, design iterations, revisions based on feedback, and final delivery of all design assets. I work closely with you throughout the process to ensure the final product meets your goals and exceeds user expectations.'
        },
        branding: {
            title: 'Brand Identity Design',
            overview: 'Create a cohesive brand identity that reflects your values and resonates with your target audience. From logo design to complete brand guidelines, I help establish a strong visual presence.',
            includes: [
                { icon: 'bi-check-circle-fill', text: 'Logo Design: Multiple concepts and iterations' },
                { icon: 'bi-check-circle-fill', text: 'Brand Guidelines: Comprehensive style guide' },
                { icon: 'bi-check-circle-fill', text: 'Color Palette: Strategic color selection' },
                { icon: 'bi-check-circle-fill', text: 'Typography: Font selection and pairing' },
                { icon: 'bi-check-circle-fill', text: 'Brand Assets: Business cards, letterheads, and more' },
                { icon: 'bi-check-circle-fill', text: 'Brand Strategy: Positioning and messaging guidance' }
            ],
            scope: 'Complete brand identity package including logo design, brand guidelines, color palette, typography selection, and brand assets. The process involves research, concept development, refinement, and final delivery of all brand materials.'
        },
        web: {
            title: 'Web Design',
            overview: 'Design responsive and modern websites that look great and perform well on all devices. From landing pages to complex e-commerce sites, I create user-friendly web experiences.',
            includes: [
                { icon: 'bi-check-circle-fill', text: 'Responsive Design: Mobile-first approach' },
                { icon: 'bi-check-circle-fill', text: 'Landing Pages: High-converting page designs' },
                { icon: 'bi-check-circle-fill', text: 'E-commerce Design: Shopping experience optimization' },
                { icon: 'bi-check-circle-fill', text: 'CMS Integration: WordPress, Shopify, etc.' },
                { icon: 'bi-check-circle-fill', text: 'UI Components: Reusable design elements' },
                { icon: 'bi-check-circle-fill', text: 'Performance Optimization: Fast loading designs' }
            ],
            scope: 'Full web design service including wireframes, mockups, responsive design, and developer handoff. I ensure your website is not only beautiful but also functional, accessible, and optimized for performance.'
        },
        graphic: {
            title: 'Graphic Design',
            overview: 'Create stunning visual designs for print and digital media that capture attention and communicate effectively. From posters to social media graphics, I bring your ideas to life.',
            includes: [
                { icon: 'bi-check-circle-fill', text: 'Posters & Flyers: Eye-catching print designs' },
                { icon: 'bi-check-circle-fill', text: 'Social Media Graphics: Platform-optimized content' },
                { icon: 'bi-check-circle-fill', text: 'Infographics: Data visualization and storytelling' },
                { icon: 'bi-check-circle-fill', text: 'Print Design: Brochures, catalogs, and more' },
                { icon: 'bi-check-circle-fill', text: 'Digital Graphics: Web banners and ads' },
                { icon: 'bi-check-circle-fill', text: 'Illustration: Custom artwork and icons' }
            ],
            scope: 'Comprehensive graphic design services for both print and digital media. I work with you to understand your needs and create designs that effectively communicate your message and engage your audience.'
        },
        logo: {
            title: 'Logo Design',
            overview: 'Design memorable and impactful logos that represent your brand and make a lasting impression. A great logo is the foundation of a strong brand identity.',
            includes: [
                { icon: 'bi-check-circle-fill', text: 'Logo Concepts: Multiple design directions' },
                { icon: 'bi-check-circle-fill', text: 'Revisions: Refinement based on feedback' },
                { icon: 'bi-check-circle-fill', text: 'Vector Files: Scalable formats (AI, SVG, PDF)' },
                { icon: 'bi-check-circle-fill', text: 'Brand Guidelines: Logo usage guidelines' },
                { icon: 'bi-check-circle-fill', text: 'Variations: Horizontal, vertical, and icon versions' },
                { icon: 'bi-check-circle-fill', text: 'Color Variations: Full color, black, and white versions' }
            ],
            scope: 'Complete logo design package including multiple concepts, revisions, final files in all formats, and brand guidelines. The process involves research, concept development, refinement, and delivery of all logo variations.'
        },
        consultation: {
            title: 'Design Consultation',
            overview: 'Get expert advice and guidance on your design projects, strategy, and brand direction. Whether you need a one-time consultation or ongoing support, I\'m here to help.',
            includes: [
                { icon: 'bi-check-circle-fill', text: 'Strategy Sessions: Design strategy and planning' },
                { icon: 'bi-check-circle-fill', text: 'Design Reviews: Feedback on existing designs' },
                { icon: 'bi-check-circle-fill', text: 'Brand Audit: Comprehensive brand analysis' },
                { icon: 'bi-check-circle-fill', text: 'Creative Direction: Guidance for design teams' },
                { icon: 'bi-check-circle-fill', text: 'Workshop Facilitation: Team design workshops' },
                { icon: 'bi-check-circle-fill', text: 'Ongoing Support: Regular check-ins and advice' }
            ],
            scope: 'Flexible consultation services tailored to your needs. From one-time strategy sessions to ongoing design support, I provide expert guidance to help you make informed design decisions and achieve your goals.'
        }
    };

    // Update page content based on service type
    if (serviceType && services[serviceType]) {
        const service = services[serviceType];
        
        // Update title
        const titleElement = document.getElementById('serviceTitle');
        if (titleElement) {
            titleElement.textContent = service.title;
        }

        // Update overview
        const overviewElement = document.getElementById('serviceOverview');
        if (overviewElement) {
            overviewElement.textContent = service.overview;
        }

        // Update includes
        const includesElement = document.getElementById('serviceIncludes');
        if (includesElement) {
            includesElement.innerHTML = '<ul class="list-unstyled">' +
                service.includes.map(item => 
                    `<li class="mb-3"><i class="${item.icon} text-primary me-2"></i><strong>${item.text.split(':')[0]}:</strong> ${item.text.split(':').slice(1).join(':')}</li>`
                ).join('') +
                '</ul>';
        }

        // Update scope
        const scopeElement = document.getElementById('serviceScope');
        if (scopeElement) {
            scopeElement.textContent = service.scope;
        }
    }
});







