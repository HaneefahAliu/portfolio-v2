export const cards = [
    {
        number: '01',
        title: 'Colour Contrast',
        description: 'Deep green (#004B23) on white, exceeding WCAG 1.4.6 enhanced contrast.',
    },
    {
        number: '02',
        title: 'Typography',
        description: 'Urbanist at 16pt minimum — readable across all screen sizes with clear hierarchy.',
    },
    {
        number: '03',
        title: 'Touch Targets',
        description: 'All inputs at 44×44px minimum so one-handed and motor-impaired users could tap confidently.',
    },
    {
        number: '04',
        title: 'Focus Visibility',
        description: 'Active input fields highlighted to support keyboard and switch-access users (WCAG 2.4.7).',
    },
    {
        number: '05',
        title: 'Video Captions',
        description: 'Two-line caption limit per BBC guidelines, with adjustable contrast for hard-of-hearing users.',
    },
    {
        number: '06',
        title: 'Text Alternatives',
        description: 'All images include screen reader descriptions so VoiceOver users could navigate fully.',
    },
];

export const thinkings = [
    {
        number: '01',
        title: 'Competitive benchmarking',
        description: 'Before designing any feature, I studied how the best tools in the space solved the same problem, identifying patterns worth adopting, conventions worth challenging, and mistakes worth avoiding.',
    },
    {
        number: '02',
        title: 'Brief Unpacking',
        description: 'Every feature started with a deep working session to fully understand the intent; what problem it solved, who it served, and what success looked like. Where briefs were incomplete, I asked questions rather than filled gaps with assumptions.',
    },
    {
        number: '03',
        title: 'Flow mapping before screens',
        description: 'Before opening Figma, I mapped every user flow - what an HR manager needed to do, what an employee needed to do, and where those paths intersected. Getting the logic right before the visuals saved enormous time and prevented expensive rework.',
    },
    {
        number: '04',
        title: 'High-fidelity design with the system in parallel',
        description: 'I built screens and design system components simultaneously. Every new element I created either used an existing component or became a new one, this kept the product visually consistent and made designing later features significantly faster.',
    },
    {
        number: '05',
        title: 'Founder review and iteration',
        description: 'Designs were reviewed in regular 1-1 sessions. Feedback was evaluated through both a business lens and a UX lens - sometimes aligning, sometimes requiring negotiation. Every round of feedback made the product sharper.',
    },
    {
        number: '06',
        title: 'Demo testing',
        description: 'Features were stress-tested through internal demos. Running through real scenarios to identify edge cases, confusing labels, or flows that worked in theory but broke down in practice.',
    },
];

export const systems = [
    {
        number: '01',
        title: 'Establish foundations first',
        description: 'Before building any component, I locked in the colour tokens, type scale, and spacing system. These are the rules everything else inherits so getting them right early meant never having to retroactively fix every component when a base value changed.',
    },
    {
        number: '02',
        title: 'Build components as the product needs them',
        description: 'Rather than trying to anticipate every component upfront, I built each one when a feature required it, immediately abstracting it into the library rather than leaving it as a one-off. This kept the system lean and grounded in real product needs.',
    },
    {
        number: '03',
        title: 'Design all states, not just the default',
        description: 'Every component was built with its full range of states — default, hover, active, disabled, error. In a product where users are submitting forms, approving requests, and managing data, edge cases aren\'t edge cases. They\'re the experience.',
    },
    {
        number: '04',
        title: 'Refine through use',
        description: 'The system was never "finished", it evolved with the product. When a new feature exposed a gap, I filled it. When a component was used in a context it wasn\'t designed for, I adapted it. The system got stronger with every feature it had to support.',
    },
    {
        number: '05',
        title: 'Document for whoever comes next',
        description: 'Every component, token, and pattern was documented with enough clarity that a designer or developer joining the team could understand the system without needing to ask questions.'
    },
];


export const stats = [
    { value: '8', label: 'participants.' },
    { value: '6', label: 'tasks each.' },
    { value: '68+', label: 'all SUS scores.' },
    { value: '30', label: 'minutes per session.' },
];

export const values = [
    { value: '10+', label: 'features shipped.' },
    { value: '1', label: 'design system built.' },
    { value: '0 → 1', label: 'product built.' },
    { value: '12 mo', label: 'solo.' },
];

export const quotes = [
    {
        text: '"Even though I have no allergies, I had to choose one to continue. Since there is no option to select none, I\'m not sure if I can move forward without choosing one."',
        author: 'Participant 3',
    },
    {
        text: '"I don\'t get any form of feedback to inform me if my item has been added to the cart, so I am not sure if it was added or not."',
        author: 'Participant 1',
    },
    {
        text: '"The secondary text\'s grey shade is too light, and some users may mistake it for disabled text."',
        author: 'Participant 3',
    },
];

export const solutions = [
    {
        number: '01',
        description: 'a personalised meal planner that generates plans based on dietary preferences and nutritional goals.',
    },
    {
        number: '02',
        description: 'a recipe discovery system organised by cuisine, ingredients, and skill level.',
    },
    {
        number: '03',
        description: 'an integrated grocery list that builds automatically from meal plans',
    },
    {
        number: '04',
        description: 'a meal scanner that identifies dishes and surfaces recipes on the spot.',
    },
]

export const findings = [
    {
        title: '👁️ The eyes have it',
        description: 'Observation is one of our earliest and most powerful learning tools. Mimicry, watching, copying - and it never really stops.',
        quote: '\"I find it easier to learn by watching people than listening to explanations. I get sleepy when people explain to me.\"',
    },
    {
        title: '🖼️ Images over text',
        description: 'The brain processes images 60,000x faster than text. Our users felt this long before they could articulate it — they reached for YouTube before manuals, every time.',
        quote: '\"I love when lecturers demonstrate what they\'re explaining. I usually don\'t forget afterwards.\"',
    },
    {
        title: '🔧 Cars need attention',
        description: 'Many users were already engaged and observant with their vehicles. They just lacked a reliable, accessible way to act on what they noticed.',
        quote: '\"I know my car has problems by looking at the dashboard lights. I just don\'t always know what to do next\"',
    },
    {
        title: '💪 Confidence grows with time',
        description: 'Competence builds through doing. Users who tried things themselves grew quickly — they just needed a safe space to start and fail without consequences.',
        quote: '\"These days I only go to the mechanic if I try and can neither find nor fix the problem myself.\"',
    },
];