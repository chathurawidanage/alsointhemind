
const meta = {
    index: {
        type: 'page',
        display: 'hidden'
    },
    master: {
        type: 'page',
        display: 'hidden'
    },
    book: {
        items: {
            '*': {
                theme: {
                    breadcrumb: false
                }
            },
            foreword: {
                title: "Foreword",
            },
            'by-the-roadside-1990': {
                title: "By the Roadside, 1990",
            },
            'before-it-was-too-late': {
                title: "Before It Was Too Late",
            },
            'from-friedrich-moller-to-venerable-nanavimala-mahathera': {
                title: "From Friedrich Möller to Venerable Ñāṇavimala Mahāthera",
            },
            'a-readers-guide': {
                title: "A Reader's Guide",
            },
            chapter1: {
                title: "Chapter 1",
            }
        }
    }
};

export default meta;
